---
title: "Increment & Decrement Operators in JavaScript"
date: "2021-09-18"
excerpt: "++ & --"
categories: ["JavaScript"]
---

In JavaScript, the ~~++~~ & ~~--~~ operators increment and decrement the value of a variable respectively and we can apply them either after or before a variable.

- ~~++x~~ (pre-increment): Increment x by 1, then use the new value of x in the expression in which x resides.
- ~~x++~~ (post-increment): Use the current value of x in the expression in which x resides, then increment x by 1.
- ~~--x~~ (pre-decrement): Decrement x by 1, then use the new value of x in the expression in which x resides.
- ~~x--~~ (post-decrement): Use the current value of x in the expression in which x resides, then decrement x by 1.

**Example:**

```js {numberLines}
let counter = 1

let riddle = counter++
console.log(riddle)
// 1

let mystery = ++counter
console.log(mystery)
// 3
```
