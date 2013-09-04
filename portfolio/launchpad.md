---
layout: page
title: "LaunchPad"
description: "A writeup about the launchpad app from CU Boulder"
---
{% include JB/setup %}

For a final project in our [Object Oriented Analysis and Design](http://www.cs.colorado.edu/~kena/classes/5448/s11/) course at CU, [Zac Clark](http://www.zacclark.com) and I created a [Ruby on Rails](http://rubyonrails.org/) web application to be a one-stop dashboard for the data you care about.

Since the project was done for a class focusing on object oriented design and implementation, we made the system easy to maintain and add functionality to. Here's a [visual representation](http://www.l1m5.com/wp-content/uploads/2011/05/LaunchpadClassDiagram.pdf) of how we decided to implement the project. LaunchPad interacts with the [Wunderground API](http://wiki.wunderground.com/index.php/API_-_XML), [Google Calendar API](http://code.google.com/apis/calendar/) and [RTD Denver](http://www.rtd-denver.com) to provide up-to-date, personalized information.

Here are a few screenshots of the bus and calendar widgets from the final application.

<div class='center'>
<img src='http://www.l1m5.com/wp-content/uploads/2011/05/LaunchpadBus-159x300.png' alt="LaunchpadBus" />
<img src='http://www.l1m5.com/wp-content/uploads/2011/05/LaunchpadCalendar-159x300.png' alt="LaunchpadCalendar" />
</div>

Like what you see? Check out our code, hosted on [GitHub](https://github.com/spyyddir/launchpad).