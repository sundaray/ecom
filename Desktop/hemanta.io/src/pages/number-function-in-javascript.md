---
title: "Number Function in JavaScript"
date: "2022-07-26"
excerpt: "Learn how to convert a string or other value to the Number type"
modules: [JavaScript]
---

When used as a function, ~~Number(value)~~ converts a string or other value to the Number type. If the value can’t be converted, it returns ~~NaN~~.

Example:

```js {numberLines}
const result = Number("123")

console.log(typeof result) //number

console.log(Number("MacBook")) //NaN
console.log(Number(undefined)) //NaN
```
