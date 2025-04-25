---
layout: post
title: Creating a macOS Sierra 10.12.4 VirtualBox Guest
tags:
  - virtualbox
  - macos
  - macos sierra

description:
  "Instructions to create a macOS Sierra 10.12.4 VirtualBox guest. Includes information about the gIOScreenLockState
  freeze and how to work around it."
---

Having a fresh macOS Sierra install is really handy when testing automated setups, like my
[ansible mac-dev playbook](https://github.com/blimmer/mac-dev-playbook).

## The Problem

I recently got a fresh computer and ran into a problem following the
[same instructions](https://github.com/geerlingguy/macos-virtualbox-vm) I always follow. I got stuck on the boot screen
with this message:

<div class='center'>
  <img alt="gIOScreenLockState error" src="{{ site.base_url }}/{% ministamp _images/posts/2017/04/gIOScreenLockState.png assets/images/posts/2017/04/gIOScreenLockState.png %}" />
</div>
<br />

The install hangs on this error indefinitely:

    IOConsoleUsers: gIOScreenLockState 3, hs 0, bs 0, now 0, sm 0x0

## How to Fix It

This is more of a workaround than a fix. The information I can find about this error seems to indicate a change
[introduced with 10.12.4](https://github.com/timsutton/osx-vm-templates/commit/badde5c11d0a87a530625e6af26c1feebc2c1f37)
that still has not been fixed. There's also this exact issue filed on the
[VirtualBox bug tracker](https://www.virtualbox.org/ticket/16644) that has not been resolved yet.

So, for now, the solution is to build the VM from an older version of the macOS Sierra installer. Hopefully you, or
someone you know, still have an older version of the `Install macOS Sierra` application.

If not, there are also other ways to acquire this disk image. If you go this route, make sure to check the checksum
value before you use the image to produce a new VM. This
[GitHub repository](https://github.com/notpeter/apple-installer-checksums) has a list of checksums for all of the
installers you might find.

After you've got an older version of the installer, you can run the installation as normal and use the mac app store to
update to 10.12.4.
