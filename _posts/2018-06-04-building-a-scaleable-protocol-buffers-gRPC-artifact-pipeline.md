---
layout: post
title: Building a Scaleable Protocol Buffers/gRPC Artifact Pipeline
tags:
- gRPC
- protocol buffers
- protobuf
- ci/cd pipline
- artifact pipeline

description: "This article describes the problems Ibotta faced an initial pipeline and how our new implementation significantly decreased time to ship Protocol Buffers & gRPC artifacts to production."
---

Ibotta uses gRPC and Protocol Buffers to rapidly innovate in our microservice-driven environment. gRPC provides low-latency, bi-directional binary streaming via HTTP/2. gRPC also relies on reusable, validateable, language-agnostic Protocol Buffers messages.

Because of these advantages, many of our new services are using gRPC for their inter-service communication. We’re also using Protocol Buffers outside of gRPC for predictable serialization/deserialization of messages on streams and queues.

However, our initial implementation for packaging Protocol Buffers messages and gRPC services could not handle the influx of new **technologist** (engineers, data scientists and analysts) interest. This article describes the problems we faced with the initial implementation and how our new pipeline significantly decreased time to ship Protocol Buffers & gRPC artifacts to production.

## [Read the full article on "Building Ibotta" >](https://medium.com/building-ibotta/building-a-scaleable-protocol-buffers-grpc-artifact-pipeline-5265c5118c9d)
