---
layout: post
title: AirPlay suddenly not working? Try this.
tags: 
- airplay
- restart airplay
description: "Airplay suddenly not working? If your Mac will suddenly not allow you to connect to your AirPlay speakers, try this. It always fixes the issue (in my experience) and does not require a restart."
---

I'll admit it, I've totally bought into the Apple ecosystem. Their ecosystem is great because it "just works" (except when it doesn't). 

I've noticed more and more on OS X Mavericks that the OS will not allow me to select my [Yahama receiver](http://www.amazon.com/Yamaha-RX-V675-Channel-Network-Receiver/dp/B00B981F1U), which appear on my network as AirPlay speakers. This issue is annoying, and used to require me to reboot my machine to get things working again.

After a little investigation, I found a quick way to kill the system coreaudio daemon. Doing this has fixed my issue 100% of the time. If you having this problem, give this trick a try.

# The Easy Way
Not everyone is comfortable doing things in Terminal. I get it, it's a scary world if you don't know what you're doing. If this sounds like you, grab this simple app I wrote to reset your audio and get AirPlay working again.

[Download](https://github.com/l1m5/fix-airplay/raw/master/FixAirplay.app.zip)

For Geeks: [The GitHub Project](https://github.com/l1m5/fix-airplay) for the simple AppleScript App above.

# The Terminal Way
Oh, you fancy, huh?

If you're comfortable working in a shell, simply open one up and run:  
        
    sudo kill `ps -ax | grep 'coreaudiod' | grep 'sbin' | awk '{print $1}'`

That should do it! You should up and running again, enjoying your tunes on your AirPlay speakers.