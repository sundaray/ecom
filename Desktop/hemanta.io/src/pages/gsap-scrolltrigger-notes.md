---
title: "GSAP ScrollTrigger Notes"
date: "2021-05-25"
excerpt: "Fundamentals of GSAP ScrollTrigger"
categories: ["GSAP"]
---

```toc

```

ScrollTrigger is a powerful tool for creating scroll-based animations.

### Using ScrollTrigger with React

#### Installation

```sh
npm i gsap
```

```jsx {numberLines}
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
```

We can control animations when they enter and leave the viewport by adding a ~~scrollTrigger~~ property to the ~~vars~~ object (_the second argument passed to the ~~gsap.from()~~ method_ ).

Below, we start the animation when the box enters the viewport.

```js {numberLines, 5}
gsap.from(".box", {
  x: 300,
  duration: 1,
  ease: "linear",
  scrollTrigger: ".box",
})
```

**Note that the trigger can be any element; it doesn’t have to be the target element of the animation**.

### Customizing start & end properties

By default, ScrollTrigger activates the animation when the top of the trigger element enters the viewport.

```js {numberLines, 9, 11}
gsap.from(".box", {
  x: 300,
  duration: 1,
  ease: "linear",
  scrollTrigger: {
    trigger: ".box",
    markers: true,
    // start the animation when the top of the box reaches 75% of the viewport height.
    start: "top 75%",
    // end the animation when the top of the box reaches 25% of the viewport height.
    end: "bottom 25%",
  },
})
```

### Toggle actions

We can use the ~~toggleActions~~ property to configure what the animation does as it enters and leaves the viewport.

```js {numberLines, 13}
gsap.from(".box", {
  x: 300,
  duration: 1,
  ease: "linear",
  scrollTrigger: {
    trigger: ".box",
    // adds markers that are helpful during development/troubleshooting
    markers: true,
    // start the animation when the top of the box reaches 75% of the viewport height.
    start: "top 75%",
    end: "bottom 25%",
    //events: onEnter, onLeave, OnEnterBack, OnLeaveBack
    toggleActions: "restart pause reverse reset",
    // options: play, pause, resume, reset, restart, complete, reverse, none
  },
})
```

### Controlling a timeline with ScrollTrigger

We can add ScrollTrigger to an entire timeline by passing in a ~~scrollTrigger~~ object.

```js {numberLines, 2-8}
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    start: "top 50%",
    snd: "bottom top",
    markers: true,
    scrub: 1,
  },
})

tl.to(".box", { rotation: 360 }).from(".box", { scale: 0.3 })
```
