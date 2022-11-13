---
title: "Center an Input Form Element Using CSS"
date: "2022-07-28"
excerpt: "Using the CSS declaration display:block"
categories: ["CSS"]
---

I was trying to center an ~~input~~ element on a page using ~~margin: 0 auto~~.

```css {numberLines, 9-9}
input {
  width: 30rem;
  height: 3rem;
  border: 0.2rem solid darkgray;
  outline: none;
  border-radius: 1rem;
  background-color: lightgray;
  padding: 0rem 1rem;
  margin: 0rem auto;
}
```

I was unsuccessful.

After doing some research, I found out that ~~input~~ is an inline-level element.

Next, all I had to do was add the declaration ~~display:block~~

```css {numberLines, 10-10}
input {
  width: 30rem;
  height: 3rem;
  border: 0.2rem solid darkgray;
  outline: none;
  border-radius: 1rem;
  background-color: lightgray;
  padding: 0rem 1rem;
  margin: 0rem auto;
  display: block;
}
```
