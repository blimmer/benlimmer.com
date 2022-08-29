---
layout: page
title: Serverless Postgres Change Data Capture
description:
  "Accelerate your transition to an event-driven architecture by automatically publishing events when changes occur in
  your database."
---

Adopting an event-driven architecture can be a formidable paradigm shift for your developers. However, especially in
monolith-centric ecosystems with a single database, you can accelerate the adoption of event-driven architecture by
automatically publishing database change events as they occur.

By leveraging [logical replication](https://www.postgresql.org/docs/current/logical-replication.html), AWS Lambda, and
an [event-driven architecture powered by EventBridge](/portfolio/freelance/event-driven-architecture), we can
automatically produce events with information about changes to our database in near real-time. This approach removes the
need to manually `PutEvent`s throughout your application code. In
[my portfolio](/portfolio/freelance/event-driven-architecture), you can learn more about my general approach to
event-driven architectures.

## Concrete Example

Imagine your database has a `users` table. And let's say you want to trigger a Welcome email campaign with your CRM when
a new user is created. With this system, EventBridge receives an event when a new user is created in the database:

```json
{
  "detail-type": "DatabaseEvent",
  "resources": ["monolith_database"],
  "source": "com.benlimmer.Database",
  "detail": {
    "txnid": 123456789,
    "timestamp": "2021-04-28T16:01:22.131231+00:00",
    "schema": "public",
    "table": "users",
    "operation": "insert",
    "newValues": {
      "id": {
        "type": "integer",
        "value": 1
      },
      "first_name": {
        "type": "string",
        "value": "Ben"
      },
      "last_name": {
        "type": "string",
        "value": "Limmer"
      },
      "email": {
        "type": "string",
        "value": "ben@example.com"
      }
    },
    "changedValues": ["id", "first_name", "last_name", "email"]
  }
}
```

Then, with a simple [EventBridge rule](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-create-rule.html),
you can trigger a Lambda function to initiate the campaign for this user.

```json
{
  "detail-type": ["DatabaseEvent"],
  "resources": ["monolith_database"],
  "detail": {
    "schema": "public",
    "table": "users",
    "operate": "insert"
  }
}
```

Taking this example a bit further, imagine your Lambda function handled all communication between your system and your
customer engagement platform. You can use these auto-generated database events to do all kinds of things without needing
to manually `PutEvent` from your backend application.

For instance, you could pay attention to when the user updates their email address and update it in your third-party
engagement platform:

```json
{
  "detail-type": "DatabaseEvent",
  "resources": ["monolith_database"],
  "source": "com.benlimmer.Database",
  "detail": {
    "txnid": 234567891,
    "timestamp": "2021-05-01T17:01:22.131231+00:00",
    "schema": "public",
    "table": "users",
    "operation": "update",
    "newValues": {
      "id": {
        "type": "integer",
        "value": 1
      },
      "first_name": {
        "type": "string",
        "value": "Ben"
      },
      "last_name": {
        "type": "string",
        "value": "Limmer"
      },
      "email": {
        "type": "string",
        "value": "ben_new@example.com"
      }
    },
    "oldValues": {
      "id": {
        "type": "integer",
        "value": 1
      },
      "first_name": {
        "type": "string",
        "value": "Ben"
      },
      "last_name": {
        "type": "string",
        "value": "Limmer"
      },
      "email": {
        "type": "string",
        "value": "ben@example.com"
      }
    },
    "changedValues": ["email"]
  }
}
```

Or if a user requests deletion, say, under a "Right to Be Forgotten" request, you can trigger deletion in your
engagement platform:

```json
{
  "detail-type": "DatabaseEvent",
  "resources": ["monolith_database"],
  "source": "com.benlimmer.Database",
  "detail": {
    "txnid": 345678912,
    "timestamp": "2021-05-02T01:01:22.131231+00:00",
    "schema": "public",
    "table": "users",
    "operation": "delete",
    "oldValues": {
      "id": {
        "type": "integer",
        "value": 1
      },
      "first_name": {
        "type": "string",
        "value": "Ben"
      },
      "last_name": {
        "type": "string",
        "value": "Limmer"
      },
      "email": {
        "type": "string",
        "value": "ben_new@example.com"
      }
    },
    "changedValues": ["id", "first_name", "last_name", "email"]
  }
}
```

As you can see, these auto-generated events provide lots of information without spending time writing and triggering
specific events for each action.

With this solution, every row of every table is automatically captured and published to EventBridge. So when migrations
occur, the system automatically picks up the change and starts publishing without requiring additional code or
deployment. So your developers write migrations as they usually do and can start listening for events immediately
afterward.

## Case Study

In 2020, I set up this system for a client with a monolithic backend and a new
[Event-Driven Architecture powered by AWS EventBridge](/portfolio/freelance/event-driven-architecture). As a team
of fewer than ten developers, they wanted to move quickly with a primarily monolithic application while breaking out
third-party communications to separate Lambda functions.

By leveraging these automatically-generated database events, they quickly created several microservices communicating
with third parties like Quickbooks, Salesforce, PandaDoc, SendGrid, and more. These microservices provided simple
decoupling while keeping most business-case logic in their monolithic application.

Developers found the "paved road" experience of creating a new handler delightful. A [`hygen`](https://www.hygen.io/)
generator asked questions to create the Infrastructure-as-Code, including an EventBridge Rule to trigger a TypeScript
lambda, all predefined and configured.

<div class='center mt-4 mb-4'>
  <img src="{{ site.base_url }}/{% ministamp _images/portfolio/freelance/serverless-postgres-cdc/hygen-create-handler.png assets/images/pages/portfolio/freelance/serverless-postgres-cdc/hygen-create-handler.png %}" alt='A hygen code generator walking the user through creating a new EventBridge target'>
</div>

This system allowed this small team to be agile, producing decoupled integration code with minimal overhead or
boilerplate. Furthermore, as the team grows, having this logic already decoupled will allow separate teams to own
integrations without the other operational overhead of traditional microservices environments.

## Want to Try It Out?

Does this approach sound interesting? I can help implement this pattern at your organization. Learn more about my
[freelance services](/freelance) and [reach out](/freelance/contact).
