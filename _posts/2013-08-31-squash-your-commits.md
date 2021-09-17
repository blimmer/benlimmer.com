---
layout: post
title: Squash Your Commits
tags:
  - git
description: "Why you should squash your in-between development commits in Git before pushing them to main"
---

There's been quite a shakeup around the ReadyTalk offices lately, and I've been switched to a new team and project.
Exciting stuff, huh?

Along with this, I’ve had a ton more keyboard time working in our large Java codebase. It has been great having more
time to focus on software development, but it’s quite a change heading back over to a non-greenfield project in a more
“heavyweight” language like Java.

One thing I’ve noticed as I’ve moved back into a codebase with a different set of developers is that not many folks
squash their git commits, so I end up seeing lots of less-meaningful commits in the main branch:

    commit 4b8995a9afe261f6a2ce55be00a565da29f78718
    Author: Bob Loblaw
    Date: Sat Jul 13 16:08:31 2013 -0600

    The stuffs are working now!

    commit f2f3e29e3f92abe483d75599e9259232ee73fd26
    Author: Bob Loblaw
    Date: Sat Jul 13 15:57:11 2013 -0600

    Getting closer...

    commit 3e45e745f40245cb5bacff300c858a38b9d3f0b3
    Author: Bob Loblaw
    Date: Sat Jul 13 15:02:49 2013 -0600

    Some updates.

Yuck!

Don't get me wrong, I’m a big fan of utilizing your source control to save work as you go, but your colleagues don’t
need to see 40 “progress” check-ins. I’m becoming religious about using `git rebase` on my feature branches before they
hit main. I can pollute the heck out of my feature branch, including any changes from mistakes discovered by QA, then
use rebase to have one nice, tidy commit containing all of the changes needed to satisfy a user story.

There, of course, are always exceptions to this rule. Sometimes it’s nice to have multiple components implemented as
part of one user story split into separate commits. However, this could indicate that your user stories might be written
a touch large (that’s another topic). Either way, it’s part of our jobs as developers to keep main clean and tidy. We
all talk about the Boy Scout rule of “leave it better than you found it” as it relates to your codebase, but I argue
that your main branch deserves the same treatment.

In case this topic piqued your interest, there are lots of good articles on how to employ this technique. Check out the
post by [GitHub](https://help.github.com/en/github/using-git/about-git-rebase) and
[Stack Overflow](http://stackoverflow.com/questions/5189560/how-can-i-squash-my-last-x-commits-together-using-git) for
more info.
