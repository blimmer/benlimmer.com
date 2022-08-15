---
layout: page
title: Event Driven Architecture via AWS EventBridge
description: "TODO"
is_about: true
---

Event-driven architectures are becoming increasingly popular, especially as more organizations move to loosely coupled
architectures (e.g., microservices).
[ThoughtWorks Decoder](https://www.thoughtworks.com/insights/decoder/e/event-driven-architecture) has an excellent
introduction if you're unfamiliar with event-driven architecture.

Over the last few years, I've successfully deployed serverless event buses via
[AWS EventBridge](https://aws.amazon.com/eventbridge/) to several clients. EventBridge is a
[highly available](https://aws.amazon.com/eventbridge/features/),
[scalable](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-quota.html#eb-putevents-limits), managed service
that
[integrates cleanly with many essential AWS services](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-targets.html).
The operational simplicity and scalability make it a great technology to choose for initial deployment and to scale with
you in the future.

## Starting Point: Single Event to Single Lambda Function

For most clients, I start with a single "paved-road" pattern: a single event type triggers a Lambda function each time
it's posted to the bus.

<div class='center mt-5 mb-5'>
  <img src="{{ site.base_url }}/{% ministamp _images/portfolio/freelance/2020/event-driven-architecture/eventbridge-diagram.png assets/images/pages/portfolio/freelance/2020/event-driven-architecture/eventbridge-diagram.png %}" alt='PutEvent posting to EventBridge, triggering an AWS lambda, with error handling via AWS SQS Dead Letter Queues'>
</div>

The flexible `PutEvent` API allows your existing services to fire events on the event bus.

Once an event is posted to the bus,
[an EventBridge rule](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-rules.html) determines the appropriate
target for that particular event. The rule syntax is flexible and allows inspecting the event content to determine which
Lambda target should be triggered. This flexible rule processing makes implementing one-event-to-one-lambda-target
workflows simple and allows for more complex rules in the future.

EventBridge supports the
[AWS Lambda Asynchronous Invocation API](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html), which
provides automatic retry and dead-letter queueing upon repeated failure. Layering this behavior in with CloudWatch
alarms and your existing alerting platform (e.g., [Datadog](/portfolio/freelance/2020/datadog-integration) or PagerDuty)
informs your engineers about problems processing events.

## Concrete Example

As a concrete example, imagine you want to notify your users when an unrecognized login occurs. Instead of writing this
logic into your monolith, you could fire an EventBridge event that looks something like this:

```json
{
  "detail-type": "Customer Notification",
  "source": "com.benlimmer.Monolith",
  "resources": ["user@example.com"],
  "detail": {
    "notification": "unrecognized-login",
    "ip-address": "1.2.3.4",
    "location": "Denver, Colorado, USA"
  }
}
```

Then, an EventBridge rule looking for `Customer Nofication` events triggers a Lambda function with logic to generate and
send the notification to the user.

```json
{
  "detail-type": ["Customer Notification"]
}
```

The Lambda function will receive the entire event, which provides the details (email address, IP address, location)
needed to create the message and send it to the user.

An event-driven system might seem overkill for a single notification, but it's a great way to start breaking up a
monolithic application. It also allows separate teams to own the notifications logic for a system and evolve it as they
see fit. They could swap out the templating system, email provider, programming language, etc., and the team working
with the monolith wouldn't know (or care!) about the changes.

## More Complex Targets

As mentioned above, AWS EventBridge rules
[can trigger many services](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-targets.html) other than AWS
Lambda.

A typical workflow I've implemented for clients is posting events to a
[Kinesis Steam](https://aws.amazon.com/kinesis/data-streams/) to allow batch triggering Lambda functions. Batching
requests helps reduce Lambda costs and avoid throttling from third-party services.

You can also trigger [AWS Batch](https://aws.amazon.com/batch/), [Glue](https://aws.amazon.com/glue/),
[SageMaker pipelines](https://aws.amazon.com/sagemaker/pipelines/), and other data analytics-oriented services. These
asynchronous data-oriented workflows are often great opportunities to decouple logic from your existing monolithic
service.

The possibilities are nearly endless between the natively supported targets and AWS Lambda.

## The Paved Road

[Developer Experience](/freelance) is hugely important, especially when introducing a new concept, like an Event Bus.
That's why I focus on "paving the road" for your engineers.

By leveraging code generation and Infrastructure-as-Code platforms, usually [`hygen`](https://www.hygen.io/) and
[AWS Cloud Development Kit](https://github.com/aws/aws-cdk), respectively, working with the Event-Driven Architecture is
delightful. Creating a new event handler is simple:

- Run a code generator.
- Provide details about the event.
- Write the logic and tests for your handler (usually in TypeScript, which I fully support out of the box with
  zero-config).
- Push the code to your remote source control.

Et voila! The event handler is live. Developers love how easy it is to create and work with existing handlers.

## Is AWS EventBridge Right for You?

Even if microservices aren't an element of your near-term plan, a scalable event bus can provide a simple way to
decouple asynchronous tasks from your [majestic monolith](https://m.signalvnoise.com/the-majestic-monolith/).

Sound interesting? I can help. Learn more about my [freelance services](/freelance) and [reach out](/freelance/contact).
