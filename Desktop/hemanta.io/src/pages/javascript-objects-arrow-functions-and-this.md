---
title: "JavaScript Objects - Arrow Functions & this"
date: "2022-04-19"
excerpt: "Avoid using arrow functions in the method of an object."
categories: ["JavaScript"]
---

###### Learn how to access the calling object's properties using the this keyword in my blog post [here](https://hemanta.io/javascript-objects-the-this-keyword/).

We know that when we use the ~~this~~ keyword in a method, then the value of ~~this~~ is the calling object.

> The calling object is the object the method belongs to.

However, it becomes a bit more complicated when we start using arrow functions for methods.

```js {numberLines}
const rover = {
  name: "Perseverance",
  job: () => {
    console.log(`${this.name} will seek signs of ancient life on Mars.`)
  },
}

console.log(rover.job())
// undefined
```

In the example above, notice that we have defined the ~~job()~~ method using an arrow function.

###### Learn more about arrow functions in my blog post [here](https://hemanta.io/arrow-functions-explained/).

Also, notice that ~~console.log(rover.job())~~ logs ~~undefined~~.

What happened?

Arrow functions inherently bind, or tie, an already defined ~~this~~ value to the function itself that is NOT the calling object. In the code snippet above, the value of ~~this~~ is the _global object_, or an object that exists in the global scope, which doesn’t have a ~~name~~ property and therefore returns ~~undefined~~.

The key takeaway from the example above is to _avoid_ using arrow functions when using ~~this~~ in a method!
