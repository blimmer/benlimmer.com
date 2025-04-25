---
layout: post
title: Audit CircleCI Contexts for Exposed Secrets
tags:
  - circleci
description: "CircleCI announced a security incident on January 4, 2023. They recommend rotating all secrets stored on the system. circleci-audit can help!"
---

CircleCI [announced](https://circleci.com/blog/january-4-2023-security-alert/) on January 4, 2023, that all secrets
stored in CircleCI were potentially accessed by a malicious actor. They recommend rotating all secrets stored on their
platform.

<div class='center mt-3 mb-3'>
  <img src="{{ site.base_url }}/{% ministamp _images/posts/2023/01/circleci-warning.png assets/images/posts/2023/01/circleci-warning.png %}" alt='the CircleCI user interface informing users to rotate all secrets stored in CircleCI'>
</div>

I spent a decent amount of time this looking into client's CircleCI contexts, identifying secrets that needed to be
rotated. I quickly cobbled together some scripts, but today I spent some time writing
[`circleci-audit`](https://github.com/blimmer/circleci-audit/), a tool to help identify exposed secrets.

You can easily run it with `npx`:

```bash
npx circleci-audit contexts \
  --token $CIRCLECI_TOKEN \
  --orgId $CIRCLECI_ORG_ID
```

You can create a token [here](https://app.circleci.com/settings/user/tokens) and find your Organization's ID on the
"Organization Settings" page in the CircleCI UI.

I hope this tool helps you quickly identify secrets needing to be rotated.
