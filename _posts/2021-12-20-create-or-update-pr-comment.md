---
layout: post
title: Create or Update Pull Request Comments in GitHub
tags:
  - github
description: "Describes a simple solution to create or update GitHub pull request comments."
---

Oftentimes, it's nice to have a bot user post some information to a Pull Request. For example, imagine a link to a
pre-production preview link for the branch, or infrastructure-as-code diffs. Having this data in-line with your Pull
Request makes it simpler for reviewers to understand the impact and risk of approving a given change.

Sadly, GitHub doesn't provide an easy way to "create or update" a comment for a particular bot message. So, I built a
simple serverless solution to work around this using the GitHub GraphQL API.

## The Solution

I worked around this problem by building a serverless API with [AWS API Gateway](https://aws.amazon.com/api-gateway/).
It communicates with the [GitHub GraphQL API](https://docs.github.com/en/graphql) to update an existing comment or
create a new one.

So, for instance, a call to the serverless API looks something like this:

```bash
PULL_REQUEST_URL="https://github.com/blimmer/example/pull/1"
MESSAGE="The current date is $(date). This comment will be updated."
curl \
  -H 'Content-Type: application/json' \
  -X PUT \
  -d "{ \"url\": \"$PULL_REQUEST_URL\", \"body\": \"$MESSAGE\", \"singletonId\": \"singleton-demo\" }" \
  'https://github-pr-comment-api.benlimmer.com/comment'
```

When calling the API endpoint, you pass the `singletonId` value. This informs the backend that you want to update any
existing comment with the same `singletonId`. Then, if an existing comment with that `singletonId` is discovered, the
content is updated with the new message.

The key to this solution is an [HTML comment](https://www.w3schools.com/html/html_comments.asp) inside the GitHub
comment text. This is how I identify whether we should create a new comment or update an existing one.

<div class='center mt-3 mb-3'>
  <img src="{{ site.base_url }}/{% ministamp _images/posts/2021/12/pr-comment-html-comment.png assets/images/posts/2021/12/pr-comment-html-comment.png %}" alt='HTML comment containing identifiable metadata to identify existing comments'>
</div>

So, when a request to the endpoint is received, I fetch existing comments on the Pull Request:

```graphql
query GetCommentsForPullRequest($url: URI!) {
  resource(url: $url) {
    ... on PullRequest {
      comments(first: 100) {
        nodes {
          id
          url
          author {
            login
          }
          body
        }
        pageInfo {
          hasNextPage
        }
      }
    }
  }
}
```

Then, I search the comment body for the HTML comment with the `singletonId` passed. If it exists, I update the comment
via this mutation:

```graphql
mutation UpdatePullRequestComment($commentId: ID!, $body: String!) {
  updateIssueComment(input: { id: $commentId, body: $body }) {
    issueComment {
      id
    }
  }
}
```

Otherwise, I simply create a new comment via:

```graphql
mutation CreateNewPullRequestComment($prId: ID!, $body: String!) {
  addComment(input: { subjectId: $prId, body: $body }) {
    commentEdge {
      node {
        id
      }
    }
  }
}
```

## Demo

To see this solution in action, check out
[the Demo Pull Request](https://github.com/blimmer/github-pr-comment-api-demo/pull/1).

As you'll see, the first time the API is called, a new comment is created. Then, when the API is subsequently called,
the existing comment will be updated.

By updating an existing comment, bot-based noise is significantly reduced, while the history of each bot post is
retained in the "edited" dropdown.

<div class='center mt-3 mb-3'>
  <img src="{{ site.base_url }}/{% ministamp _images/posts/2021/12/pr-comment-edited.png assets/images/posts/2021/12/pr-comment-edited.png %}" alt='changes to the pull request comment are retained in the edited dropdown'>
</div>
<div class='center mt-3 mb-3'>
  <img src="{{ site.base_url }}/{% ministamp _images/posts/2021/12/pr-comment-edited-diff.png assets/images/posts/2021/12/pr-comment-edited-diff.png %}" alt='the edit history displays inline diffs when the comment is updated'>
</div>

The [demo PR](https://github.com/blimmer/github-pr-comment-api-demo/pull/1) is interactive! Add a comment to see the bot
update the existing comment with a new timestamp.

## Related Post

If you're looking to build against the GitHub GraphQL API in TypeScript, check out my post
["Adding Typescript Types to Github's GraphQL API"](/2020/05/16/adding-typescript-types-github-graphql-api/). This post
describes how to gain type-safety when working with the GraphQL API.
