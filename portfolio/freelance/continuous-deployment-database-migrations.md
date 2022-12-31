---
layout: page
title: Continuous Deployment Database Migrations
description:
  "Stabilize and democratize deployments by automating database migrations in your continuous deployment pipeline."
---

Database migrations often stand in the way of fully automating your deployment pipeline. Many teams treat database
migrations as a separate, manual (and often error-prone) step.

In 2021, I worked with a client in this position. Their engineers would execute database migrations from their local
development machines. This manual process was error-prone and required granting access to the running database
instances. Because migrations required production access, their offshore teams could only deploy when a full-time
employee was online and available to do it for them.

To work around this issue, I automated the database migration step as part of their existing deployment pipeline. This
democratized the deployment process to all engineers, removed manual interactions, and allowed significantly restricting
the number of people who needed access in production.

## The Solution

I previously set this client up with
[CDK Pipelines](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.pipelines-readme.html) to deliver their
containerized Python application to [Amazon ECS](https://aws.amazon.com/ecs/). CDK Pipelines provided a great platform
to add automated database migrations.

<div class="center mb-2">
  <a href="{{ site.base_url }}/{% ministamp _images/portfolio/freelance/continuous-deployment-database-migrations/diagram.png assets/images/pages/portfolio/freelance/continuous-deployment-database-migrations/diagram.png %}">
    <img src="{{ site.base_url }}/{% ministamp _images/portfolio/freelance/continuous-deployment-database-migrations/diagram.png assets/images/pages/portfolio/freelance/continuous-deployment-database-migrations/diagram.png %}" alt=''>
  </a>
</div>

To automatically run the database migrations, we follow these steps:

1. When a developer merges to the `main` branch on GitHub, it triggers CodePipeline.
1. The project's test suite runs while the new container image is built and pushed to Elastic Container Registry.
1. The CDK deployment begins. We first deploy some CloudFormation stacks, including the application's database stack. We
   do not yet deploy the application stack since we need to run migrations first.
1. After the database stack deploys, we trigger a custom CodeBuild job. This job:
   - Schedules a single ECS task using the newly built container image.
   - Uses ECS Exec to run the migration script inside the container. This particular client was using a Django
     application, so the script runs `manage.py migrate`.
   - The rollback is automatically run if the migration fails and the deployment stops. The pipeline failure triggers a
     PagerDuty alarm via CloudWatch.
1. After the migration successfully completes, the CDK deployment continues. The last step is to update the ECS Task
   Definition to replace the running production containers with the new version.

Before this system was implemented, this client could not enable Continuous Deployment because database migrations
required manual intervention from a user with the proper access level. This slowed down offshore and full-time employees
alike. It also made deployments riskier because more commits were batched into a single deployment.

Now, any engineer with approval to merge to `main` can trigger a production deployment, including commits with database
migrations!

## A Note on Linting

Running database migrations using this method requires writing _forward-compatible migrations_. In other words, the
previous application version must be able to run without errors after the migration completes.

Forward-compatible migrations cannot include any of the following migration types:

- Adding `NOT NULL` columns, which don't have a `DEFAULT` value
- Dropping columns
- Dropping tables
- Renaming columns
- Renaming tables
- Altering columns (which can be backward compatible and potentially ignored)
- Adding a `UNIQUE` constraint

Luckily, many framework ORMs have linters that help detect these problematic migrations. For example,
[`django-migration-linter`](https://github.com/3YOURMIND/django-migration-linter) is a great option for Django. I've
also used [`strong_migrations`](https://github.com/ankane/strong_migrations) for Rails/ActiveRecord projects.

If you decide to automate database migrations, seek a linter to ensure your migrations are safe to run automatically.
Make sure to run this check with your continuous integration test suite.

## Continuous Deployment Consulting

Do you want to run database migrations in your deployment pipeline automatically? I'd love to help.

Learn more about [my freelance services](/freelance) and [get in touch](/freelance/contact) today!
