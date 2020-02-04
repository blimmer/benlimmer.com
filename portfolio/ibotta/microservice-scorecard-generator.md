---
layout: page
title: Microservice Scorecard Generator
description: "A description of Ben Limmer's role building the microservice scorecard generator at Ibotta"
is_about: true
---

In just twelve short months, the Technology department at Ibotta grew by over _100 people_. Along with this growth, we started breaking down our monolithic Ruby on Rails application into a series of microservices, which caused a rapid increase in the number of GitHub projects, languages and frameworks squads use.

To keep **technologists** (engineers, data scientists and analysts) focused on business logic, two cross-functional squads were created focusing on introducing conventions, reducing boilerplate and making common use-cases work out-of-the-box with little configuration.

These squads started making great progress on “Paving the Road to Production” by introducing:

- Yeoman Generators for building new apps in common languages and frameworks
- Pipelines to provision, build and deploy services to AWS accounts and Kubernetes clusters
- Tools to encrypt and manage secrets
- Standardized libraries for logging, metrics and configuration

However, we had a difficult time documenting and communicating the available tools and best-practices as they evolved. Internal blog posts, Slack announcements, Confluence wiki documentation, and in-person training were tried, but they didn’t provide a long-term benefit.

To help mitigate this problem, I developed a [scorecard](https://medium.com/building-ibotta/encouraging-development-best-practices-with-gamification-ffdea7b0712) to game-ify following best practices. The scorecard project proved to be a fun, effective way to emit information about the health of services as the company grows. It rolls up a plethora of information about each project and helps identify opportunities for maintenance work after services are in production.

### Key Skills

- Scaleable Developer Tooling
- Internal Tools
- Microservices Best Practices
- Team Building
- [Brigade](https://brigade.sh/)

<div class='center mt-5 mb-5'>
  <img src="{{ site.base_url }}/{% ministamp _images/portfolio/ibotta/scorecard.png assets/images/pages/portfolio/ibotta/scorecard.png %}">
</div>

You can read all about this project [on Medium](https://medium.com/building-ibotta/encouraging-development-best-practices-with-gamification-ffdea7b0712).
