---
title: "Nested Object Destructuring in JavaScript"
date: "2022-07-31"
excerpt: "Nested object destructuring."
categories: ["JavaScript"]
---

Here we have a JavaScript object:

```js {numberLines}
const data = {
  categories: {
    group: [
      { id: 1, brand: "Ford" },
      { id: 2, brand: "GM" },
    ],
  },
}
```

We can unpack the ~~group~~ property from the ~~data~~ object, as shown below:

```js {numberLines}
const {
  categories: { group },
} = data

console.log(group)
// [ { id: 1, brand: 'Ford' }, { id: 2, brand: 'GM' } ]
```

We can also unpack the ~~group~~ property from the ~~data~~ object and assign it to a variable with a different name:

```js {numberLines}
const {
  categories: { group: brands },
} = data

console.log(brands)
// [ { id: 1, brand: 'Ford' }, { id: 2, brand: 'GM' } ]
```
