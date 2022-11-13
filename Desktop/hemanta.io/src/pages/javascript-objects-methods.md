---
title: "JavaScript Objects - Methods"
date: "2022-04-21"
excerpt: "Object Methods"
categories: ["JavaScript"]
---

When the data stored on an object is a function, we call that a method. A property is what an object has, while a method is what an object does.

We can include methods in our object literals by creating comma-separated key-value pairs. The key serves as our method’s name, while the value is an anonymous function expression.

```js {numberLines}
const specialOps = {
  attack: function () {
    console.log("Our objective is to denazify Kyiv.")
  },
}
```

With the new method syntax introduced in ES6, we can omit the colon and the ~~function~~ keyword.

```js {numberLines}
const specialOps = {
  attack() {
    console.log("Our objective is to denazify Kyiv.")
  },
}
```

Object methods are invoked by appending the object’s name with the dot operator followed by the method name and parentheses.

```js {numberLines}
specialOps.attack()

// Our objective is to denazify Kyiv.
```
