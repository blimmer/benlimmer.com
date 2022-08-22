---
layout: page
title: Automated Front End Content Preview
description:
  "Ben Limmer is a freelance engineer who can help accelerate your frontend engineering teams by deploying an automated
  content preview solution. Learn more and contact me today!"
is_about: true
---

Some of the most productive front-end engineering teams utilize a
[Continuous Deployment (CD)](https://en.wikipedia.org/wiki/Continuous_deployment) process to automatically deploy code
changes once approved and merged to their `main` branch.

In many cases, in addition to reviewing the source code of the change, reviewers find it helpful to validate the
functionality of a changeset in a web browser. In early 2020, I implemented "Content Preview" solution that makes it
easy to preview changes in a web browser directly from a GitHub Pull Request.

## Content Preview Architecture

Since the client wanted to preview a single-page application created using [React](https://reactjs.org/), I used AWS
S3 + CloudFront to serve the static content. You can learn more about serving a static website using S3 + CloudFront
[in the AWS Knowledge Center](https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-serve-static-website/).

When an engineer opens a Pull Request, a [GitHub Action](https://github.com/features/actions):

1. Builds the React application.
1. Sanitizes the branch name into an [IETF RFC 1123](https://datatracker.ietf.org/doc/html/rfc1123/) compatible
   subdomain (e.g., `feature/my-branch` becomes `feature-my-branch`).
1. Uploads the built assets to the S3 bucket with a `content-preview/<branch-name>/` prefix (e.g,
   `s3://bucket-name/content-preview/feature-my-branch`).

    <div class="center mb-2">
      <img src="{{ site.base_url }}/{% ministamp _images/portfolio/freelance/content-preview/pr-upload.png assets/images/pages/portfolio/freelance/content-preview/pr-upload.png %}" alt='diagram describing the steps outlined above'>
    </div>

1. A bot user posts back to the PR with a URL to view the preview. You can learn more about how this bot user works [on
   my blog]({% post_url 2021-12-20-create-or-update-pr-comment %}).

  <div class="center mb-4">
    <img src="{{ site.base_url }}/{% ministamp _images/portfolio/freelance/content-preview/bot-pr-postback.png assets/images/pages/portfolio/freelance/content-preview/bot-pr-postback.png %}" alt='a bot user posting the URL to view the content preview to the GitHub pull request comment feed'>
  </div>

Then, when the user visits the preview URL (e.g., `https://feature-my-branch.client.com`):

1. The request is sent to a CloudFront distribution for processing.
1. An [Origin Request Lambda@Edge function](https://docs.aws.amazon.com/lambda/latest/dg/lambda-edge.html) handles all
   requests to content preview subdomains and serves the static assets from the `content-preview/<branch-name>/` path in
   S3. The requester is served the assets produced and uploaded by the GitHub action described above.

  <div class="center mb-2">
    <img src="{{ site.base_url }}/{% ministamp _images/portfolio/freelance/content-preview/request-diagram.png assets/images/pages/portfolio/freelance/content-preview/request-diagram.png %}" alt='diagram describing the request steps outlined above'>
  </div>

This simple, cost-effective solution significantly improved developers confidence to review and approve changes. Easily
previewing changes empowers developers, QA, and design to quickly review and iterate.

## Freelance Services

Are you interested in being able to preview front-end application changes during your development process? I'd love to
help! Learn more about my [freelance services](/freelance) and [reach out](/freelance/contact).
