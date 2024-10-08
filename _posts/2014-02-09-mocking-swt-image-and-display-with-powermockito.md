---
layout: post
title: Mocking SWT Image and Display with PowerMockito
tags: 
- swt
- unit testing
- powermockito
description: "How to mock SWT Image and Display classes using JUnit and PowerMockito. Sometimes you need to mock out SWT Images or static calls on the SWT Display object. Cue JUnit and PowerMockito to the rescue!"
---

I've been working in [SWT](http://www.eclipse.org/swt/) quite a bit during my career at [ReadyTalk](http://www.readytalk.com). In many cases, I'll need to mock out two common SWT classes, [```Image```](http://help.eclipse.org/helios/ntopic/org.eclipse.platform.doc.isv/reference/api/org/eclipse/swt/graphics/Image.html) and [```Display```](http://help.eclipse.org/helios/index.jsp?topic=%2Forg.eclipse.platform.doc.isv%2Freference%2Fapi%2Forg%2Feclipse%2Fswt%2Fwidgets%2FDisplay.html). Unfortunately, mocking out these classes (or static calls to these classes) is a bit difficult. This is where [PowerMockito](https://code.google.com/p/powermock/wiki/MockitoUsage13) comes in handy.

A co-worker of mine, [David](https://twitter.com/waterprinciple), refers to PowerMock as the "circular saw in your kitchen". 99 times out of 100 you won't need to use it, but it does have its uses.

# Setup
Anytime you're utilizing PowerMockito, you're going to need a class level annotation telling JUnit that we're going to be doing some heavy lifting with PowerMock. Your test class should look something like this
{% highlight java %}
import org.junit.runner.RunWith;
import org.powermock.modules.junit4.PowerMockRunner;

@RunWith(PowerMockRunner.class)
public class SWTTestClass {
	...
}
{% endhighlight %}

If you don't specify the PowerMockRunner, you'll notice that all your other calls to mock out objects will not work. You get errors like  

	java.lang.IllegalArgumentException: Cannot subclass final class class org.eclipse.swt.graphics.Image
if you don't mark your test class with this annotation.

# Mocking SWT Image
Now that you have your class marked with the ```@PowerMockRunner``` annotation, you can mock the final class ```Image```.  

First, you need to tell PowerMock that we're going to mock the Image class. Use the ```@PrepareForTest``` class-level annotation for Image.

{% highlight java %}
import org.eclipse.swt.graphics.Image;
import org.junit.runner.RunWith;
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.powermock.modules.junit4.PowerMockRunner;

@RunWith(PowerMockRunner.class)
@PrepareForTest(Image.class)
public class SWTTestClass {
	...
}
{% endhighlight %}

Now you can mock calls in your tests. For instance, if you wanted to mock the ```Image.getBounds()``` call, you use the ```when``` pattern to return an SWT ```Rectangle```.

{% highlight java %}
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.graphics.Rectangle;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.powermock.api.mockito.PowerMockito;
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.powermock.modules.junit4.PowerMockRunner;

import static junit.framework.Assert.assertEquals;
import static org.mockito.Mockito.when;

@RunWith(PowerMockRunner.class)
@PrepareForTest(Image.class)
public class SWTTestClass {
  @Test
  public void imageMockReturnsDefinedRectangle() {
	Image image = PowerMockito.mock(Image.class);
	Rectangle rectangle = new Rectangle(0, 0, 10, 10);
 	when(image.getBounds()).thenReturn(rectangle);

    assertEquals(rectangle, image.getBounds());
  }
}
{% endhighlight %}

It's as easy as that. Rinse and repeat for mocking other calls to ```Image```.

# Mocking Static Calls to SWT Display
Mocking the SWT ```Display``` object with [Mockito](https://code.google.com/p/mockito/) is pretty straightforward. However, sometimes you'll want to mock out the return values from static calls to ```Display```, like ```Display.getDefault()``` or ```Display.getCurrent()```. Here's how you do it.  

Similar to what we did with ```Image```, we need to prepare the ```Display``` with the ```@PrepareForTest``` class-level annotation.

{% highlight java %}
import org.eclipse.swt.widgets.Display;
import org.junit.runner.RunWith;
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.powermock.modules.junit4.PowerMockRunner;

@RunWith(PowerMockRunner.class)
@PrepareForTest(Display.class)
public class SWTTestClass {
	...
}
{% endhighlight %}

Now, we can mock out the static calls to ```Display``` to return another mock object. For instance, you might want to make sure some method returns the current Display.

{% highlight java %}
import org.eclipse.swt.widgets.Display;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.powermock.api.mockito.PowerMockito;
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.powermock.modules.junit4.PowerMockRunner;

import static junit.framework.Assert.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@RunWith(PowerMockRunner.class)
@PrepareForTest(Display.class)
public class SWTTestClass {
  @Test
  public void getCurrentDisplayReturnsMockDisplay() {
  	Display mockDisplay = mock(Display.class);

  	PowerMockito.mockStatic(Display.class);
   	when(Display.getCurrent()).thenReturn(mockDisplay);

   	assertEquals(mockDisplay, Display.getCurrent());
  }
}
{% endhighlight %}

It's as simple as that. Happy testing!
