---
layout: page
title: AWS Cloud Development Kit (aws-cdk) Consulting
description:
  "Ben Limmer is an expert in the AWS Cloud Development Kit community and provides AWS CDK consulting services."
---

{% include tldr.html content='I\'m an expert in the <a href="https://aws.amazon.com/cdk/">AWS CDK</a> ecosystem, with a breadth
of experience working with new and existing applications.' %}

Infrastructure as Code (IaC) tools aren't new, having appeared on
the [ThoughtWorks Radar as early as 2011](https://www.thoughtworks.com/radar/techniques/infrastructure-as-code).
However, [AWS Cloud Development Kit (aws-cdk)](https://aws.amazon.com/cdk/) represents a significant upgrade to existing
tools like CloudFormation, Terraform, Chef, Ansible, etc.

## Why AWS CDK?

Instead of directly using a terse configuration language like Hashicorp's HCL, YAML, or JSON, AWS CDK uses real
programming languages like TypeScript, Python, Java, DotNet, and Go. These higher-level languages are then transpiled to
the target configuration language, like JSON/YAML or HCL for CloudFormation or Terraform, respectively. Using real
programming languages, developers can jump in without learning a new configuration language.

Additionally, AWS CDK
provides [first-class constructs](https://docs.aws.amazon.com/cdk/v2/guide/constructs.html#constructs_using) following
best practices. For instance, I can create a VPC, ECS Cluster, and Application Load Balanced ECS Fargate service with
eight lines of code!

```typescript
export class MyEcsConstructStack extends Stack {
  constructor(scope: App, id: string) {
    super(scope, id);

    const vpc = new Vpc(this, "MyVpc");
    const cluster = new Cluster(this, "MyCluster", {
      vpc,
    });

    new ApplicationLoadBalancedFargateService(this, "MyFargateService", {
      cluster,
      taskImageOptions: {
        image: ContainerImage.fromRegistry("amazon/amazon-ecs-sample"),
      },
    });
  }
}
```

This code produces 615 lines of CloudFormation YAML, but, as a developer, I know I'm starting with reasonable defaults
from these AWS-supplied constructs
([`Vpc`](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_ec2-readme.html#vpc),
[`Cluster`](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_ecs-readme.html#clusters),
[`ApplicationLoadBalancedFargateService`](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_ecs_patterns-readme.html#application-load-balanced-services)).
Furthermore, every property exposed via CloudFormation is also configurable via aws-cdk. So, if the defaults don't suit
you, they're easily changed.

## Developer Enablement Teams and AWS CDK

Working with AWS CDK is also a delight for [Developer Enablement](/freelance) and DevOps teams. They can write reusable
constructs once in TypeScript and create packages for TypeScript, Python, Go, DotNet, and Java without repeating
themselves.

So, your enablement team can write a single TypeScript construct, `AcmeCorpService`, and teams using Node, Python, Go,
DotNet and Java can all easily instantiate an `AcmeCorpService` in their infrastructure as code. This way, all the teams
across your organization can leverage the same best practices.

## Beyond CloudFormation

AWS CDK supports [CloudFormation](https://aws.amazon.com/cloudformation/) as its primary transpilation target. However,
it's designed to be completely framework agnostic. For instance, [cdktf](https://www.terraform.io/cdktf) (CDK for
Terraform) allows you to use any Terraform provider without needing to learn or write HCL. Additionally,
[cdk8s](https://cdk8s.io/) (CDK for Kubernetes) lets you define Kubernetes applications. So, AWS CDK is often a good
choice regardless of your preferred infrastructure provisioner!

## AWS CDK Consulting

Are you thinking about adopting AWS CDK at your company? Do you have a basic CDK setup you're looking to improve? I can
help 🙂

I have been using aws-cdk since early 2020 and have implemented lots of different solutions for various clients,
including:

- Large monorepos, including shared CDK libraries
- Construct libraries, including transpiling to all supported CDK languages
- Continuous Deployment via CDK Pipelines
- Custom Continuous Deployment via a reusable CircleCI orb

I'm also involved with the CDK project on GitHub. Check out the
[issues](https://github.com/aws/aws-cdk/issues?q=is%3Aissue+author%3Ablimmer+sort%3Aupdated-desc+) and
[PRs](https://github.com/aws/aws-cdk/pulls?q=is%3Apr+author%3Ablimmer) I've worked with. My deep knowledge of the
project's inner workings will ensure you're using the current best practices in the ecosystem.

Sound interesting? Learn more about [my freelance services](/freelance) and [get in touch](/freelance/contact) today!
