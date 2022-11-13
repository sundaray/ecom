---
title: "GSAP Notes"
date: "2021-05-24"
excerpt: "Fundamentals of GSAP"
categories: ["GSAP"]
---

```toc

```

### Basic Tween

The basic syntax for a ~~to()~~ tween is as follows:

```js
// animates the element with a class of “box” to an x position of 400.
gsap.to(".box", { x: 400 })
```

### Duration

Duration is a special property because it does not get animated. It simply tells us for how long the animation is going to run.

```js
gsap.to(‘.box’, {x: 750, duration: 3})
```

Above, the animation will be completed in 3 seconds. Remember that there is no need to mention the letter ~~s~~ here or anything else. GSAP understands that the value entered is in seconds.

If you do not specify a duration, **gsap will use the default which is 0.5 seconds (500ms)**.

You can change the default duration using the ~~defaults~~ method of the gsap object.

```js
gsap.defaults({ duration: 1 })
```

Behind the scenes gsap changes the target’s inline style during the animation.

### Animating CSS values

For best performance animate CSS Transform values and opacity:

- x
- y
- rotation
- rotationX
- rotationY
- skewX and skewY
- scaleX, scaleY, or just scale

GSAP can animate any numeric property you throw at it.

- width and height
- backgroundColor (**hyphenated values need to be camelCase**)
- color
- padding
- left and top (_must set position to relative, absolute, or fixed_)
- vh and vw

Changing values that are not CSS Transforms or opacity can cause the browser to re-do its layout of the page which in extreme situations can hinder performance. For a few tweens, it’s not the end of the world as some purists make it out to be.

### from() to() and fromTo()

Gsap object has three main methods for creating animations - ~~gsap.from()~~, ~~gsap.to()~~ & ~~gsap.fromTo()~~.

~~gsap.from()~~ animates from the values you specify to the object’s natural values.

To animate from x and y values of 400, use:

```js
gsap.from(".box", { x: 400, y: 400 })
```

```js
gsap.to(‘.box’, {x: 750, duration: 3})
```

~~gsap.fromTo()~~ animates from the values you specify to the values you specify.

The 2 objects in the code below are the from vars and to vars.

```js
gsap.fromTo(".box", { x: 400, y: 400 }, { x: 200, y: 200 })
```

For best results make sure the from vars and to vars have the same properties.

### Delay and Repeat

Special properties define how the animation should run and what it should do. Special properties are not animated.

- **delay:** how much time should transpire before animation begins
- **repeat:** how many times the animation should repeat. **An animation will repeat indefinitely if you set repeat:-1**.
- **yoyo:** when set to true the animation will play back and forth. Yoyo works in conjunction with ~~repeat~~, where ~~repeat~~ controls how many many times the tween repeats and ~~yoyo~~ controls whether or not each repeat alternates direction.
- **repeatDelay:** how much time should transpire between each repeat

### Ease and Using the Ease Visualizer

Ease controls the acceleration and deceleration of your animation.

By default, gsap puts an ~~ease-out~~ ease on your animation. ~~Ease-out~~ means the animation will slow down towards the end. Because that’s what happens in nature. Things come to a stop because of the friction.

When you apply an ease of ~~linear~~, the rate of change is constant, so there is no acceleration or deceleration. Which is a bit boring.

In most cases you will want to use your own ease. ~~Expo.easeInOut~~ is my favorite ease. This is something you will come across in many of the cool websites out there.

An ease can be applied on the way out (default), on the way in, or both directions.

- ~~ease:”bounce”~~ will bounce on the way out.
- ~~ease:”bounce.in”~~ will bounce on the way in.
- ~~ease:”bounce.inOut”~~ will bounce on the way in and out.

All tweens have a efault ease of ~~power1~~.

### Reading ease curves

Steep curve = fast rate of change

Flat curve = slow rate of change

### Stagger

The stagger property allows you to offset the start time of multiple targets in a single tween.

```js
// each image will start 0.2 seconds after the previous one starts.
gsap.to("#team img", { y: -100, stagger: 0.2 })
```

A stagger object gives you greater control over where the staggers start from and how the timing is dispersed.

```js {numberLines}
gsap.to("#team img", {
  y: -50,
  stagger: {
    each: 0.2,
    from: "end",
  },
})
```

~~each:0.2~~ means there will be 0.2 seconds between the start of each animation. If instead you use ~~amount:0.2~~ then all animations will start within 0.2 seconds.

If we mention ~~amount: 1~~, it means that the start times of all the animation are going to be evenly dispersed over the course of 1 second.

The value of ~~from~~ can be ~~start~~, ~~end~~, ~~center~~, ~~edges~~.

### Tween Control

In order to control a tween you need have way to reference it. Below we set up a variable to reference our tween.

```js
const tween = gsap.to("#box", { x: 600 })
```

Tween’s have a number of methods for controlling playback.

```js
tween.play()

tween.pause()

tween.reverse()

// Take the playhead to a time of zero and play forward.
tween.restart()
```

To prevent a tween from playing automatically you can set its ~~paused~~ special property to true.

```js
var tween = gsap.to("#fred", { x: 600, paused: true })
```

To play that tween you can later call ~~tween.play();~~.

### GSAP timeline

A timeline is created with ~~gsap.timeline()~~.

All tweens in a timeline naturally play one after the other.

```js
gsap.timeline();
    .from("#demo", {opacity:0, duration:1});
    .from("#title", {opacity:0, scale:0});
    .from("#time", {xPercent: 100});
```

#### Position parameter

The position parameter allows you to offset the start time of tweens in a timeline.

```js {numberLines}
const tl = gsap.timeline()

tl.to(object, { y: 300 }, "+=1") // start 1 second after previous tween ends

tl.to(object, { x: 300 }, "-=1") // start 1 second before previous tween ends

tl.to(object, { rotation: 90 }, "<") // start when previous tween begins

tl.to(object, { opacity: 0.5 }, "<1") // start 1 second after previous tween begins

tl.to(object2, { x: 200 }, 1) // start exactly at a time of 1
```

~~<~~ - start at the same time as the previous tween.

#### Timeline controls & labels

Timelines have the exact same control methods as tween. Since you already know how to ~~play()~~ a tween you already know how to ~~play()~~ a timeline.

You must first create a reference to your timeline like

```js
var animation = gsap.timeline()
```

Later on you can do:

```js
animation.play()
animation.pause()
animation.restart()
animation.reverse()
```

Labels allow you mark a specific point in time in your timeline. You can add a label to a timeline using the ~~add()~~ method.

```js {numberLines}
const animation = gsap
  .timeline()
  .from("#team img", { y: 160, stagger: 0.5, duration: 0.8, ease: "back" })
  .add("test")
  .from("#time", { xPercent: 100, duration: 1, ease: "bounce" })

// Animation will jump to the last tween.
animation.play("test")
```

#### Nested timelines

```js {numberLines}
const master = gsap.timeline();


const yellowAnimation = gsap.timeline()
                            .to(yellow, {scale: 0.5})
                            .to(yellow, {rotation: 360})
const pinkAnimation = gsap.timeline()
                          .to(pink, {y: 50})
                          .to(pink, {rotation: 360})

const blueAnimation = gsap.timeline()
                          .to(blue, {y: 50})
                          .to(blue, {rotation: 360})


master.add(blueAnimation)
      //we can add position parameters.
      .add(pinkAnimation, “+=2”)
      .add(yellowAnimation)
```
