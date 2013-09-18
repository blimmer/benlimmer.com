---
layout: page
title: "LaunchPad"
description: "A writeup about the launchpad app from CU Boulder"
---
{% include JB/setup %}

For a final project in our [Object Oriented Analysis and Design](http://www.cs.colorado.edu/~kena/classes/5448/s11/) course at CU, [Zac Clark](http://www.zacclark.com) and I created a [Ruby on Rails](http://rubyonrails.org/) web application to be a one-stop dashboard for the data you care about.

Since the project was done for a class focusing on object oriented design and implementation, we made the system easy to maintain and add functionality to. Here's a [visual representation](/assets/attachments/pages/portfolio/LaunchpadClassDiagram.pdf) of how we decided to implement the project. LaunchPad interacts with the [Wunderground API](http://wiki.wunderground.com/index.php/API_-_XML), [Google Calendar API](http://code.google.com/apis/calendar/) and [RTD Denver](http://www.rtd-denver.com) to provide up-to-date, personalized information.

Here are a few screenshots of the bus and calendar widgets from the final application.

<div class='center'>
	<img src='/assets/images/pages/portfolio/LaunchpadBus.png' width="159" height="300" alt="Screenshots of iPhone with LaunchPad Bus Schedule" />
	<img src='/assets/images/pages/portfolio/LaunchpadCalendar.png' width="159" height="300" alt="Screenshots of iPhone with LaunchPad Calendar" />
</div>

Like what you see? Check out our code, hosted on [GitHub](https://github.com/spyyddir/launchpad).