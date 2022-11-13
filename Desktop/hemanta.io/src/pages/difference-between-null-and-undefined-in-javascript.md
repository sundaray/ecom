---
title: "Difference Between Null & Undefined in JavaScript"
date: "2021-07-12"
excerpt: "null vs undefined"
categories: ["JavaScript"]
---

### null

~~null~~ is a primitive data type in JavaScript. **It indicates that a variable points to no object**.

```js
// count exists, but it has no type or value
let count = null

console.log(null)
// null
```

### undefined

~~undefined~~ is a primitive data type in JavaScript. **It indicates that a variable has not been assigned any value**.

```js
// count has been defined, but not initialized
let count

console.log(count)
// undefined
```

Another way to think about ~~null~~ & ~~undefined~~ is as follows:

> **undefined**: Used for unintentionally missing values
>
> **null**: Used for intentionally missing values
