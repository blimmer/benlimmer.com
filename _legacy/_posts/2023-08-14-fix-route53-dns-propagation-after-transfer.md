---
layout: post
title: Fix Route53 DNS Propagation Errors After Domain Transfer
tags:
  - aws
  - dns
description: "Mismatched DNSSEC settings after a domain transfer to Route53 can cause DNS propagation issues."
---

{% include tldr.html content='DNS propagation errors for transferred domains might be caused by mismatched DNSSEC settings. The domain might have DNSSEC enabled, while the Route53 hosted zone does not. Ensure DNSSEC is configured properly (or disabled) for the domain and the hosted zone.' %}

## Background

My friend recently had a strange DNS issue we couldn't figure out. Once he transferred his domain from the existing
registrar to AWS, DNS records were failing to resolve for some users. This resulted in email deliverabilty and website
availability issues.

We verified that some DNS servers had no information about the domain via
[this DNS propagation checker](https://www.whatsmydns.net). We also verified the issue by connecting to a few different
VPN endpoints (e.g., from a European location) and seeing that the site was inaccessible.

After lots of Googling, we were stumped. Luckily, AWS Support helped us figure this out.

## The Problem

It turns out that a step was missed during the domain transfer process. From the
[Transferring registration for a domain to Amazon Route 53 documentation](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-to-route-53.html#domain-transfer-to-route-53-change-registrar-settings),
Step #3 states that you must "Disable DNSSEC for the domain" before the transfer.

<div class='center mt-3 mb-3'>
  <img src="{{ site.base_url }}/{% ministamp _images/posts/2023/08/disable-dnssec.png assets/images/posts/2023/08/disable-dnssec.png %}" alt='AWS documentation with "Disable DNSSEC for the domain" highlighted in the domain transfer instructions'>
</div>

Because this step was missed, the DNSSEC settings transferred from the old registrar, but were not configured on the
Route53 Hosted Zone. This mismatch caused non-authoritative DNS servers to fail to resolve the domain from AWS Name
Servers.

## Checking DNSSEC Settings

There are two places to look: on the _registered domain_ and the _hosted zone_.

1. Check the DNSSEC settings on the
   [_registered domain_ in AWS Console](https://us-east-1.console.aws.amazon.com/route53/domains/home/). Once you choose
   you domain from the list, you'll see a "DNSSEC Status" section. Note the current status ("Configured" or "Not
   Configured").

      <div class='center mt-3 mb-3'>
        <img src="{{ site.base_url }}/{% ministamp _images/posts/2023/08/domain-dnssec-settings.png assets/images/posts/2023/08/domain-dnssec-settings.png %}" alt='AWS Console viewing "Registered Domains" with the "DNSSEC Status" section highlighted'>
      </div>

1. Check the DNSSEC settings on the
   [_hosted zone_ in the AWS Console](https://us-east-1.console.aws.amazon.com/route53/v2/hostedzones/). Once you choose
   your domain's hosted zone from the list, you'll see a "DNSSEC signing" tab. Note the current status ("Signing" or
   "Not Signing").

      <div class='center mt-3 mb-3'>
        <img src="{{ site.base_url }}/{% ministamp _images/posts/2023/08/hosted-zone-dnssec-settings.png assets/images/posts/2023/08/hosted-zone-dnssec-settings.png %}" alt='AWS Console viewing "Hosted Zones" with the "DNSSEC Signing Status" section highlighted'>
      </div>

If, as in the screenshots, the domain is configured for DNSSEC, but the hosted zone is not, you'll experience DNS
problems with your domain.

## Fixing the Problem

To fix the problem, match up the DNSSEC settings on the domain and the hosted zone. You can either
[disable DNSSEC on the registered domain](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-configuring-dnssec-disable.html)
or [properly configure DNSSEC](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-configuring-dnssec.html).

Either way, the settings need to match up between the domain and the hosted zone (enabled or disabled for both
resources).

## Conclusion

I'll leave you with one of my favorite haiku:

<div class='center mt-3 mb-3'>
  <img src="{{ site.base_url }}/{% ministamp _images/posts/2023/08/dns-haiku.png assets/images/posts/2023/08/dns-haiku.png %}" alt="It's not DNS; There's no way it's DNS; It was DNS.">
</div>
