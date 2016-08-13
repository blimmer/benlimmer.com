---
layout: page
title: "ReadyTalk: Video Conferencing"
description: "A description of Ben Limmer's invovlement in developing the ReadyTalk Video Conferencing Product"
---

<div class="center">
	<img src="/assets/images/pages/portfolio/rt/VCiMacComp.png" height="169" width="425" alt="ReadyTalk Video Conferencing on an iMac" />
</div>
After completing my first small project at ReadyTalk, [QuickLauncher](/portfolio/rt/quicklauncher), I was excited to be chosen to work on the company's highest priority project, Video Conferencing.

In the collaboration Conferencing space, a high-quality Video Conferencing product is hugely important. Because of the incredibly competitive market space, my team was tasked with getting out a high-quality, home-grown Video Conferencing product to be delivered to a GA audience within a year.

Needless to say, we hit the ground running!

## Technology Stack
Working within the existing ReadyTalk ecosystem, we had to choose frameworks that were Open Source and would play nicely both in the downloaded rich client and also within the Adobe Flash based participant experience.

### Server-Side
<div class="center">
	<img src="/assets/images/pages/portfolio/rt/Red5.png" height="169" width="425" alt="Red5 logo"/>
</div>

To avoid the insane licensing cost and closed-source nature of Adobe Media Server, we opted for [Red5](http://www.red5.org/), a powerful Open Source Media Server that supports [RTMP](http://en.wikipedia.org/wiki/Real_Time_Messaging_Protocol) and similar protocols (RTMPT, RTMPS, RTMPTS).

This was also nice because we got support for [H.263](http://en.wikipedia.org/wiki/H.263) and [H.264](http://en.wikipedia.org/wiki/H.263) (mostly) out-of-the-box. We also got to kick back some improvements to the Red5 community as we went. Hooray for [OSS](http://en.wikipedia.org/wiki/Open-source_software)!

### Client-Side
On the client side, we decided on an ActionScript library where the meat of our code could be shared between the rich-client and the download-free Adobe Flash participant. This allowed us to rapidly prototype and push changes to our beta customer on both the Chairperson and Participant experience.

## Response
We've seen a huge boost in sales at ReadyTalk because of the Video Conferencing feature. We got the product out within the constraints of our deadline, so the ROI has been huge.

For more information on this project, check out the [ReadyTalk Video Conferencing Product Info](http://www.readytalk.com/products-services/video) page.
