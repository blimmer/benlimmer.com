---
layout: post
title: Make pino Log Messages Appear with the Correct Status in Datadog
tags:
  - pino
  - datadog
description:
  "How to correctly display the log level (status) in Datadog when using the pino logger. By default all messages are
  marked as 'info'-level."
---

If you're using [pino](https://github.com/pinojs/pino) with
[Datadog's Log Management product](https://docs.datadoghq.com/logs/), you might notice that all of your logs are
reported at the `info` level, regardless of what log level you're using in your code.

<div class="center mb-2">
  <img src="{{ site.base_url }}/{% ministamp _images/posts/2020/10/dd-logs-info-level.png assets/images/posts/2020/10/dd-logs-info-level.png %}" alt="screenshot of the datadog log UI showing all info-level messages" />
</div>

Having all logs categorized as `info`-level messages makes it challenging to find what you're looking for.

## The Problem

By default, `pino` uses a numerical serialization to represent the `level` of the message.

For example, this code produces the following output:

```ts
import pino from "pino";

const logger = pino();
logger.info("info message");
logger.warn("warn message");
```

```js
{"level":30,"msg":"info message","time":1603492511716,"pid":66621,"hostname":"71b5c8be.local"}
{"level":40,"msg":"warn message","time":1603492511716,"pid":66621,"hostname":"71b5c8be.local"}
```

Datadog's default Status Mapper does not understand how to convert these numbers over to their string representation
(like `info`, `warn`.)

## The Fix

Luckily, there's a pretty easy fix for this problem. According to the
[Status Remapper docs](https://docs.datadoghq.com/logs/processing/processors/?tab=ui#log-status-remapper), we need to
report the log `level` as a string representation of the level vs. the
[numbered defaults](https://github.com/pinojs/pino/blob/master/lib/levels.js) used by `pino`.

You'll need to configure this in two places:

1. [Pino Configuration](#pino-configuration)
1. [Datadog Pipeline](#datadog-pipeline)

### Pino Configuration

When creating your logger, use the
[`formatters` configuration](https://github.com/pinojs/pino/blob/8786e3acbb0f50eeed13d4d599b4f25b0fa43730/docs/api.md#formatters-object)
to override the default `level` serialization. This will produce string output instead of the numerical representation.

Here's the same code from before, with a `level` formatter.

```ts
import pino from "pino";

const logger = pino({
  formatters: {
    level(level) {
      return { level };
    },
  },
});

logger.info("info message");
logger.warn("warn message");
```

```js
{"level":"info","msg":"info message","time":1603492741115,"pid":66835,"hostname":"71b5c8be.local"}
{"level":"warn","msg":"warn message","time":1603492741115,"pid":66835,"hostname":"71b5c8be.local"}
```

Datadog will be able to understand these new string representations of the log level after we configure the pipeline.

### Datadog Pipeline

Next, we'll set up a [Log Pipeline](https://docs.datadoghq.com/logs/processing/pipelines/) with a
[Status Remapper Processor](https://docs.datadoghq.com/logs/processing/processors/?tab=ui#log-status-remapper) in your
Datadog configuration.

1. [View your Log Pipelines in Datadog](https://app.datadoghq.com/logs/pipelines)
1. Create a new pipeline for the service that uses Pino. You can skip this step if there's already a pipeline created
   for your service.
   ![screenshot of the datadog UI creating a new log pipeline](/assets/images/posts/2020/10/dd-logs-new-pipeline.png)
1. Add a Status Remapper processor on the `level` attribute.
   ![screenshot of the datadog UI creating a new processor](/assets/images/posts/2020/10/dd-logs-new-processor.png)

Now, new messages should appear with the proper status identified in the Datadog UI. Happy log spelunking!

<div class="center mb-2">
  <img src="{{ site.base_url }}/{% ministamp _images/posts/2020/10/dd-logs-multiple-levels.png assets/images/posts/2020/10/dd-logs-multiple-levels.png %}" alt="screenshot of the datadog log UI showing the proper log-levels being reported" />
</div>
