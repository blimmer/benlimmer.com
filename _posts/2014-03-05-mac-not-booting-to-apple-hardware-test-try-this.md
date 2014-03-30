---
layout: post
title: Mac Not Booting to Apple Hardware Test (AHT)? Try this.
tags:
- apple
- troubleshooting
description: "Having problems getting your Mac (iMac, Macbook Pro, Macbook Air) to boot into Apple Hardware Test (AHT)? If your Mac won't boot into the hardware test, there's a simple solution you might not have thought of."
---

I recently had a problem with the battery in my Macbook Air. I was following [the instructions](http://support.apple.com/kb/ht1509) provided by Apple, but when pressing the D key upon startup, I was still being booted into Mac OS X instead of the hardware diagnostics.  

The knowledge base had no solution for me but, after some looking around, I found the problem.  

Your Mac will not boot into diagnostics if you have a firmware password set. In order to run the Apple Hardware Test, you'll need to temporarily disable your firmware password. Here's how you do it.  

# Checking to see if you have a firmware password
Are you not sure if this is what's causing the problem? Luckily, this is easy to check.

1. Shut down your Mac (Apple -> Shut Down...)
2. Locate the Option key on your keyboard
3. Press the Power button and then immediately press and hold the Option key

You will now either see a screen with two hard disk images (your disk and a recovery disk), or a large lock icon with a password entry. If you see the password entry, this is issue preventing you from loading the Apple Hardware Test.

# Disabling the firmware password
Since you've determined that you have a firmware password, we'll need to temporarily disable it.

1. Follow the steps above (Shut Down, Hold Option until you see the password entry)
2. Enter the firmware password
3. Select the recovery disk using the arrow keys and enter
4. Click Utilities -> Firmware Password Utility
5. Click "Turn off firmware password"
6. Enter the previous firmware password
7. Shut down your Mac (Apple -> Shut Down...)

# Running Apple Hardware Test (AHT)
Now you should be good-to-go! Follow [the instructions](http://support.apple.com/kb/ht1509) provided by Apple and run the tests. Remember to reset your firmware password when you're done.
