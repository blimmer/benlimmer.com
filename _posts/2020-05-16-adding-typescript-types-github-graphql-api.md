---
layout: post
title: Adding Typescript Types to Github's GraphQL API
tags:
  - github
  - github graphql api
  - graphql-codegen
description:
  "A tutorial to generate Typescript types for Github GraphQL API v4 using graphql-codegen. Complete with example code
  and repository."
---

[Github's GraphQL API](https://developer.github.com/v4/) is powerful, especially for implementing
[custom automation and developer tooling](/freelance). Check out the
[Explorer](https://developer.github.com/v4/explorer/) to play around with some queries and mutations in their live
[GraphiQL environment](https://github.com/graphql/graphiql) if you've never used it before.

When interacting with the Github GraphQL API in [Typescript](https://www.typescriptlang.org/), it would be nice to
leverage the power of types to understand the structure of queries, mutations, variables, and responses. Luckily, with a
little glue code between [`graphql-codegen`](https://graphql-code-generator.com/) and Github's published schema
[`@octokit/graphql-schema`](https://github.com/octokit/graphql-schema), we can add types to all of our interactions with
the API.

If you're looking for the TLDR, the complete sample code is available
[on Github](https://github.com/blimmer/github-graphql-schema-types).

## Prerequisites

If you don't already have a Typescript / GraphQL repository initialized, go ahead and create one.

```
mkdir my-typescript-project
cd my-typescript-project
npm init -y
npm install --save graphql
npm install --save-dev typescript ts-node
tsc --init
```

## Generating Types from the Github GraphQL Schema

To start, we'll generate types from the Github GraphQL schema, provided by
[`@octokit/graphql-schema`](https://github.com/octokit/graphql-schema). We'll need to install the schema package and
[`graphql-codegen`](https://graphql-code-generator.com/).

```
npm i --save-dev @octokit/graphql-schema @graphql-codegen/cli
```

Next, we'll use the `graphql-codegen`
[wizard](https://graphql-code-generator.com/docs/getting-started/index#initialization-wizard) to configure our initial
code generation config.

```
npx graphql-codegen init
    Welcome to GraphQL Code Generator!
    Answer few questions and we will setup everything for you.
```

```
? What type of application are you building? (Press <space> to select, <a> to toggle all, <i> to invert
 selection)
 ❯◉ Backend - API or server
 ◯ Application built with Angular
 ◯ Application built with React
 ◯ Application built with Stencil
 ◯ Application built with other framework or vanilla JS
```

Select the type of app you're building. For this tutorial, we'll demo a `Backend - API or server`. Highlight "Backend -
API or server", press the space bar to select it, and press enter.

```
? Where is your schema?: (path or url) src/generated/github-schema-loader.js
```

We'll point [`graphql-codegen`](https://graphql-code-generator.com/) at the schema published by
[`@octokit/graphql-schema`](https://github.com/octokit/graphql-schema) that we installed earlier. For now, type
`src/generated/github-schema-loader.js` and press enter. We'll create that file in a subsequent step.

```
? Pick plugins: (Press <space> to select, <a> to toggle all, <i> to invert selection)
 ◉ TypeScript (required by other typescript plugins)
 ◉ TypeScript Resolvers (strongly typed resolve functions)
 ◯ TypeScript MongoDB (typed MongoDB objects)
❯◉ TypeScript GraphQL document nodes (embedded GraphQL document)
```

I like to write distinct GraphQL files for improved IDE support. To support this workflow, we want to use
[`typescript-document-nodes`](https://graphql-code-generator.com/docs/plugins/typescript-document-nodes). To do so, use
the down arrow key to select "TypeScript GraphQL document nodes (embedded GraphQL document)", press space and then press
enter.

```
? Where to write the output: (src/generated/graphql.ts)
```

In this case, the default suggestion (`src/generated/graphql.ts`) is just fine. Press enter to continue.

```
? Do you want to generate an introspection file? (Y/n) n
```

For this demo, we won't need an [introspection file](https://graphql.org/learn/introspection/). Type `n` and press
enter.

```
? How to name the config file? (codegen.yml)
```

Naming the `graphql-codegen` configuration file `codegen.yml` (the default indicated above) is fine with me. Press enter
to continue.

```
? What script in package.json should run the codegen? codegen
```

This will create an entry in the `package.json` `scripts` object. I like to use `codegen`. Type `codegen` and press
enter.

```
    Config file generated at codegen.yml

      $ npm install

    To install the plugins.

      $ npm run codegen

    To run GraphQL Code Generator.
```

Great, we're all done with the wizard. Install all the plugins the wizard wrote to `package.json`'s `devDependencies`.

```
npm install
```

Our last setup step is to write the `src/generated/github-schema-loader.js` file we referenced earlier. Create a file at
src/generated/github-schema-loader.js` and paste the following code:

```js
const { schema } = require("@octokit/graphql-schema");
module.exports = schema.json;
```

This will load the schema up from the package published by Github,
[`@octokit/graphql-schema`](https://github.com/octokit/graphql-schema).

Now, run your first codegen!

```bash
npm run codegen
> my-typescript-project@1.0.0 codegen /private/tmp/my-typescript-project
> graphql-codegen --config codegen.yml

  ✔ Parse configuration
  ✔ Generate outputs
```

Check out `src/generated/graphql.ts`. We've now got lots of Github-related types generated!

```ts
<trimmed>
export type Repository = Node & ProjectOwner & RegistryPackageOwner & RegistryPackageSearch & Subscribable & Starrable & UniformResourceLocatable & RepositoryInfo & {
   __typename?: 'Repository';
  /** A list of users that can be assigned to issues in this repository. */
  assignableUsers: UserConnection;
  /** A list of branch protection rules for this repository. */
  branchProtectionRules: BranchProtectionRuleConnection;
  /** Returns the code of conduct for this repository */
  codeOfConduct?: Maybe<CodeOfConduct>;
  /** A list of collaborators associated with the repository. */
  collaborators?: Maybe<RepositoryCollaboratorConnection>;
  /** A list of commit comments associated with the repository. */
  commitComments: CommitCommentConnection;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime'];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars['Int']>;
  /** The Ref associated with the repository's default branch. */
  defaultBranchRef?: Maybe<Ref>;
  /** Whether or not branches are automatically deleted when merged in this repository. */
  deleteBranchOnMerge: Scalars['Boolean'];
  /** A list of deploy keys that are on this repository. */
 <trimmed>
```

### Checkpoint

If you ran into any problems following the steps above view
[Checkpoint #1 on Github](https://github.com/blimmer/github-graphql-schema-types/tree/checkpoint-1).

## Writing Queries and Mutations

Now that we have types generated let's do something with them! We'll write some simple GraphQL
[queries and mutations](https://graphql.org/learn/queries/) with added type safety. I like to keep my queries and
mutations in their own folders, so create a directory for each:

```
mkdir -p src/mutations src/queries
```

And reference those directories in your `codegen.yml` file:

```yaml
documents:
  - src/queries/*.graphql
  - src/mutations/*.graphql
```

For the next steps, you'll also need a Github Personal Access token with `repo` scope. If you don't already have one,
create one in your [settings](https://github.com/settings/tokens). For help doing this, check out this
[Github support page](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line).

### Install Apollo

For this demo, I'll use [Apollo](https://github.com/apollographql/apollo-client) as my GraphQL client. Install Apollo
and its dependencies:

```
npm i --save apollo-client apollo-cache-inmemory apollo-link-http cross-fetch
```

Now, we'll write some boilerplate code to generate a GraphQL client. Create `src/client.ts` and paste this code:

```ts
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";

import "cross-fetch/polyfill";

export function githubClient(): ApolloClient<NormalizedCacheObject> {
  if (!process.env.GITHUB_TOKEN) {
    throw new Error(
      "You need to provide a Github personal access token as `GITHUB_TOKEN` env variable. See README for more info."
    );
  }

  return new ApolloClient({
    link: new HttpLink({
      uri: "https://api.github.com/graphql",
      headers: {
        authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }),
    cache: new InMemoryCache(),
  });
}
```

Don't worry about understanding this code if it's unfamiliar. All it's doing is setting up a GraphQL client to use when
communicating with the Github GraphQL API.

### GraphQL Codegen Typescript Operations

To add types to our queries, mutations, and variables, let's add the
[`@graphql-codegen/typescript-operations`](https://graphql-code-generator.com/docs/plugins/typescript-operations) plugin
to generate Typescript classes from our `.graphql` files.

```
npm install --save-dev @graphql-codegen/typescript-operations
```

and reference it in your `codegen.yml` file under the `plugins` list.

```yaml
generates:
  src/generated/graphql.ts:
    plugins:
      - "typescript"
      - "typescript-resolvers"
      - "typescript-document-nodes"
      - "typescript-operations" # add this
```

### Writing A Query

Now, let's write a simple query. Create `src/queries/who-am-i.graphql` and paste the following code:

```
query WhoAmI {
  viewer {
    login
  }
}
```

Since we have a new GraphQL query, run the codegen step to create create the appropriate Typescript types.

```bash
npm run codegen
```

This `viewer` query will return your username ([docs](https://developer.github.com/v4/query/#viewer)). Now, this is
where the generated types come in super-handy. Create an index file at `src/index.ts` and paste the following code:

```ts
import { githubClient } from "./client";
import { WhoAmIQuery, WhoAmI } from "./generated/graphql";

async function whoAmI() {
  const result = await githubClient().query<WhoAmIQuery>({
    query: WhoAmI,
  });

  return result.data.viewer.login;
}

async function main() {
  const username = await whoAmI();
  console.info(`Your github username is ${username}`);
}

main();
```

By providing the `<WhoAmIQuery>` type, Typescript now understands the object that will be returned from the query. We
can also pass the query as `WhoAmI`, instead of writing our GraphQL statement in-line as a string.

When we run this code, we should see our username written out to the console. To run the code, you'll need to provide
your Github token generated above as the `GITHUB_TOKEN` environment variable. In your terminal, run:

```bash
GITHUB_TOKEN=PASTE_YOUR_GITHUB_TOKEN_HERE ts-node src/index.ts

Your github username is blimmer
```

Pretty cool! But that was a lot of work, right? Things get more interesting when you add start working with variables
and mutations.

### Checkpoint

If you ran into any problems following the steps above view
[Checkpoint #2 on Github](https://github.com/blimmer/github-graphql-schema-types/tree/checkpoint-2).

### Writing a Mutation

Next, lets write a mutation that requires a variable to show the power of layer in types when communicating with the
API.

Create `src/mutations/add-star.graphql` and paste the following code:

```
mutation AddStar($starrableId: ID!) {
  addStar(input: { starrableId: $starrableId }) {
    starrable {
      stargazers {
        totalCount
      }
    }
  }
}
```

This code will add a star on the repository ID you pass ([docs](https://developer.github.com/v4/mutation/addstar/)).
Note that we're using a [GraphQL variable](https://graphql.org/learn/queries/#variables) called `starrableId` that will
be set at runtime. Since we've added a `.graphql` file, we need to run codegen again.

```bash
npm run codegen
```

Let's update our `src/index.ts` to call this mutation.

```ts
import { githubClient } from "./client";
import { WhoAmIQuery, WhoAmI, AddStarMutation, AddStarMutationVariables, AddStar } from "./generated/graphql";

async function whoAmI() {
  const result = await githubClient().query<WhoAmIQuery>({
    query: WhoAmI,
  });

  return result.data.viewer.login;
}

// !!! New Function !!!
async function starRepo(repoId: string) {
  const result = await githubClient().mutate<AddStarMutation, AddStarMutationVariables>({
    mutation: AddStar,
    variables: {
      starrableId: repoId,
    },
  });

  if (result.errors) {
    throw new Error("Mutation failed!");
  }

  console.info(`The repository now has ${result.data?.addStar?.starrable?.stargazers.totalCount} stargazers!!`);
}

async function main() {
  const username = await whoAmI();
  console.info(`Your github username is ${username}`);

  const benLimmerDotComRepoId = "MDEwOlJlcG9zaXRvcnkxMjUwOTk3OA==";
  await starRepo(benLimmerDotComRepoId);
}

main();
```

Note that we've added the `starRepo` method that calls our new mutation. By passing
`<AddStarMutation, AddStarMutationVariables>`, Typescript will now ensure that we're passing all the required variables
to the mutation, and that they're of the correct type. This is great because it will help catch bugs before we even call
the Github API.

For example, if I don't pass the required `starrableId` variable, I get a handy warning in my editor.

<div class="mb-2 center">
  <img src="/assets/images/posts/2020/05/typescript-missing-variable.png" alt="an typescript error about a missing, expected variable" />
</div>

As before, let's run this code. Note that, if you're using the code as-is, you'll add a star to the
[`blimmer/benlimmer.com` public Github repository](https://github.com/blimmer/benlimmer.com).

```bash
GITHUB_TOKEN=PASTE_YOUR_GITHUB_TOKEN_HERE ts-node src/index.ts
Your github username is blimmer
The repository now has 4 stargazers!!
```

Great! We just used the Github GraphQL API to add a star to my repository (thanks!)

### Checkpoint

If you ran into any problems following the steps above view
[Checkpoint #3 on Github](https://github.com/blimmer/github-graphql-schema-types/tree/checkpoint-3).

### Combining a Query and a Mutation

The code above is great, but we hard-coded the ID of my repository, which maybe we don't want to do.

```ts
const benLimmerDotComRepoId = "MDEwOlJlcG9zaXRvcnkxMjUwOTk3OA==";
```

Let's look up the repository ID at runtime, using the `repository` query, and use that for the mutation instead.

Create `src/queries/get-repo-id.graphql` and paste the following code:

```
query GetRepoId($owner: String!, $name: String!) {
  repository(owner: $owner, name: $name) {
    id
  }
}
```

This query takes two variables (`owner` and `name`) and will return the repository ID of the matching repo
([docs](https://developer.github.com/v4/query/#repository)).

Let's update `index.ts` to use the result of this query in the mutation. Paste the following code:

```ts
import { githubClient } from "./client";
import {
  WhoAmIQuery,
  WhoAmI,
  GetRepoId,
  GetRepoIdQuery,
  GetRepoIdQueryVariables,
  AddStarMutation,
  AddStarMutationVariables,
  AddStar,
} from "./generated/graphql";

async function whoAmI() {
  const result = await githubClient().query<WhoAmIQuery>({
    query: WhoAmI,
  });

  return result.data.viewer.login;
}

async function getBenLimmerDotComRepoId(): Promise<string> {
  const result = await githubClient().query<GetRepoIdQuery, GetRepoIdQueryVariables>({
    query: GetRepoId,
    variables: {
      owner: "blimmer",
      name: "benlimmer.com",
    },
  });

  if (!result.data.repository) {
    throw new Error(`Couldn't find repository id!`);
  }

  return result.data.repository.id;
}

async function starRepo(repoId: string) {
  const result = await githubClient().mutate<AddStarMutation, AddStarMutationVariables>({
    mutation: AddStar,
    variables: {
      starrableId: repoId,
    },
  });

  if (result.errors) {
    throw new Error("Mutation failed!");
  }

  console.info(`The repository now has ${result.data?.addStar?.starrable?.stargazers.totalCount} stargazers!!`);
}

async function main() {
  const username = await whoAmI();
  console.info(`Your github username is ${username}`);

  const benLimmerDotComRepoId = await getBenLimmerDotComRepoId();
  await starRepo(benLimmerDotComRepoId);
}

main();
```

Note that we're now calling `getBenLimmerDotComRepoId()` instead of hard-coding the value. Typescript is also helping us
make sure we have a `null` check, in case the repository can't be found. That information from Typescript reminded us to
add this block of code to ensure the repository could be found from the API call:

```ts
if (!result.data.repository) {
  throw new Error(`Couldn't find repository id!`);
}
```

Let's run the code:

```bash
GITHUB_TOKEN=PASTE_YOUR_GITHUB_TOKEN_HERE ts-node src/index.ts
Your github username is blimmer
The repository now has 4 stargazers!!
```

The output is the same, but we're now dynamically querying for the repository ID before we call the `AddStar` mutation.

### Checkpoint

If you ran into any problems following the steps above view
[Checkpoint #4 on Github](https://github.com/blimmer/github-graphql-schema-types/tree/checkpoint-4).

## Conclusion

As part of this tutorial, we created a project to interact with the
[Github GraphQL API](https://developer.github.com/v4/). By using
[`graphql-codegen`](https://graphql-code-generator.com/), we were able to add Typescript types to make interacting with
the API easier and safer.

Because [`@octokit/graphql-schema`](https://github.com/octokit/graphql-schema) is
[automatically updated](https://github.com/octokit/graphql-schema#graphql-schema) any time Github GraphQL schema is
updated, we can simply update the package and ensure our Typescript still compiles.

```bash
npm update @octokit/graphql-schema
```

Without generating types from the schema, Github could change their schema in a way that breaks our code, and we
wouldn't know until runtime.

I hope this walkthrough was helpful and helps your next integration with Github a little bit more fun!
