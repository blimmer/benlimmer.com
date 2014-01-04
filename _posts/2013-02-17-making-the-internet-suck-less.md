---
layout: post
title: Making the Internet Suck Less
tags:
- side projects
description: "A write-up of Ben Limmer's hosts project to block pop-ups, banner ads, tracking cookies, spyware and more. Available on Ben Limmer's GitHub page."
---
Let's face it - sometimes the Internet sucks.
Pop ups, pop unders, banner-ads, tracking cookies, spyware, drive-by attacks... they all drive us to drink.  

We've all experienced it - look at something on Amazon and see advertisements for that product on every website you visit for the next six months. I was a long-time user of [AdBlock Plus](http://adblockplus.org/), but I started seeing my browser's footprint getting larger and larger so I started trimming the fat by ridding them of browser extensions. I knew there had to be a [better way](http://www.reddit.com/r/wheredidthesodago) to make browsing the Internet not suck.

A few months ago, I stumbled upon the [Dan Pollock's](http://someonewhocares.org) [hosts file project ](http://someonewhocares.org/hosts/). It's an interesting idea on how to manage ads, tracking cookies, [shock sites](http://en.wikipedia.org/wiki/Shock_site) and other stuff that makes the Internet suck. It takes routes unwanted DNS requests to localhost to speed up browsing and make it safer. Here are a few example entries out of his project (I've changed the domains so you don't accidentally navigate to these sites):

	127.0.0.1 aalbc.advertserve.fake #ads
	127.0.0.1 goatse.fake            #shock sites
	127.0.0.1 www.pacificpoker.fake  #[AdWare.Win32.Casino.m]

As you can see, it takes requests to resolve the IP addresses for these sites and reroutes them to localhost. It's a really great, fast way to make browsing the Internet faster, safer and more enjoyable. I was using his hosts file wholesale for quite some time, but the only way to find out when there are updates was to subscribe to his [RSS feed](feed://someonewhocares.org/hosts/rss.xml). Maybe I'm living in the stone-age, but I never bought into the whole RSS Feed thing. My OCD around inbox 0 would easily translate over to an RSS feed, so I never went there.

It had been a few months since I updated my hosts file, so I went on over to Github to see if anyone had already figured out a good resolution to this problem of keeping third-party hosts projects up-to-date. I stumbled upon [Steven Black](https://github.com/StevenBlack)'s [hosts project](https://github.com/StevenBlack/hosts). It was an interesting project concatenating several third party hosts files, including Dan Pollock's, into one. Unfortunately, there wasn't anything provided in his repository to keep these files up-to-date. I think our Canuck friend, Steven, was either manually concatenating all of these hosts files in a text editor, or was keeping his script secret.

In either case, I [forked](https://github.com/l1m5/hosts) his project and added a handy [Python script](https://github.com/l1m5/hosts/blob/master/updateHostsFile.py) to concatenate all of the sources into one file and remove duplicates. I added the ability to automatically go out to the sources and download their most up-to-date source files to keep things current. It also has the ability to leave out certain domains that you want to still be able to access. I added this functionality because, as a Hulu Plus subscriber, I noticed the hosts files blocked access to Hulu ads which prevented video from streaming.

All in all, it's a very cool project inspired by one of our neighbors to the North. I submitted a pull request in to Steven and hopefully the script will end up in his mainline repository soon. In the meantime, if you want to make the Internet suck less, you can clone my project and get yourself a shiny new hosts file. Here's how to do it:

	git clone https://github.com/l1m5/hosts.git
	python updateHostsFile.py
	Do you want to update all data sources? [Y/n] y
	Updating source malwaredomainlist.com from http://www.malwaredomainlist.com/hostslist/hosts.txt
	Updating source mvps.org from http://winhelp2002.mvps.org/hosts.txt
	Updating source someonewhocares.org from http://someonewhocares.org/hosts/hosts
	Updating source StevenBlack from https://raw.github.com/StevenBlack/hosts/master/data/StevenBlack/hosts
	Do you want to exclude any domains?
	For example, hulu.com video streaming must be able to access its tracking and ad servers in order to play video. [Y/n] y
	Do you want to exclude the domain hulu.com ? [Y/n] y
	Do you want to exclude any other domains? [Y/n] n
	Removed 2138 duplicates from the merged file
	Success! Your shiny new hosts file has been prepared.

This places your new hosts file in the directory you checked out the project in. Then all you need to do is move it into place. Here's how you do it on Mac OS X.

	sudo cp hosts /etc/hosts
	dscacheutil -flushcache

The dscacheutil command flushes your DNS cache so you can start enjoying your new hosts file right away. For instructions on where to move the file and how to flush DNS on other platforms, check out the [README](https://github.com/l1m5/hosts/blob/master/readme.md). Happy browsing!

**UPDATE:**
I've had a couple of questions on Facebook and Twitter about what all this means. Here's the (not-so) quick answer to what this all means. When you type in a web address into your browser, you computer does what's called a "DNS lookup" to figure out where that content is hosted. Think of it like making a phone call. When you first meet someone, they give your their 10 digit phone number and you add that into your phone book. From then on, your phone knows when you want to call John Doe, that his number is 303-555-5555 for example. Think of the mapping of John Doe as the domain and his phone number as his IP address. Now you don't have to remember John's number, you just know that you want to "call John".

So, when you type in a web address, say google.com, it does a DNS lookup to figure out what IP address (think phone number) to connect you to. For instance, when I type in google.com, my computer is really doing a lookup and connecting to 74.125.228.97. That IP address is way too hard to remember! It's way easier for me to remember google.com than 74.125.228.97. When you computer goes out to do a lookup, it first checks your hosts file to see if it contains the entry for the site you're trying to access. If so, no need to go ask someone else (an external [DNS server](http://www.howstuffworks.com/dns.htm)) what the IP address is for the requested website.

What this project does it short-circuits requests to unwanted websites. For instance, when you load up a page with an advertisement, your computer (in the background) does a lookup for the advertisers IP address. Since we've blocked it in our hosts file, nothing gets loaded and you can happily view your page without that ad.

Hopefully that helps explain what I'm talking about a bit better :-)	lly that helps explain what I'm talking about a bit better :-)
