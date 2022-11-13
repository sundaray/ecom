---
title: "Object & Array Equality in JavaScript"
date: "2021-07-04"
excerpt: "Understand how JavaScript compares arrays and objects."
categories: [JavaScript]
---

```toc

```

###### Find out the difference between **primitives** and **objects** in JavaScript in my blog post [here](https://hemanta.io/objects-vs-primitives-in-javascript/).

Let's start by comparing some arrays and objects.

```js {numberLines}
[] === []; //false

{} === {}; //false

["apple"] === ["apple"]; //false

{key: "value"} === {key: "value"}; //false
```

The results are ~~false~~ because we are comparing two different instances of arrays and objects.

> **Note**: writing ~~[]~~ is the same as creating a new instance of Array and writing ~~{}~~ is the same as creating a new instance of Object.

We can create a new array instance using ~~new Array()~~ and we can create a new object instance using ~~new Object()~~. So, even if we change the arrays and objects examples in the previous example to the new syntax, we get the same result.

```js {numberLines}
new Array() === new Array() //false

new Object() === new Object() //false
```

### Object assignment

```js {numberLines}
const nums_array_one = [1, 2, 3, 4]

// nums_array_two now points to nums_array_one
const nums_array_two = nums_array_one

console.log(nums_array_one === nums_array_two) //true
```

When we assigned the ~~nums_array_two~~ variable to ~~nums_array_one~~, we did not create a copy of ~~nums_array-one~~. ~~nums_array_two~~ simply created a reference to ~~nums_array_one~~. In other words, ~~nums_array_one~~ & ~~nums_array_two~~ point to the same location in memory.

This is why ~~nums_array_one === nums_array_two~~ is equal to ~~true~~ as we are comparing the same instance of the array.
