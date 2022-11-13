---
title: "JavaScript - Looping Through Objects"
date: "2022-04-23"
excerpt: "With the for...in syntax."
categories: ["JavaScript"]
---

We can iterate through objects with the ~~for...in~~ syntax.

~~for...in~~ will execute a given block of code for each property in an object.

```js {numberLines}
const india = {
  continent: "Asia",
  capital: "New Delhi",
  currency: "INR",
}

for (const property in india) {
  console.log(`${property}: ${india[property]}`)
}

// continent: Asia
// capital: New Delhi
// currency: INR
```
