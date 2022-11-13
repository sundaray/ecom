---
title: "JavaScript Objects - Pass by Reference"
date: "2022-05-02"
excerpt: "Pass by reference"
categories: ["JavaScript"]
---

Objects are passed by _reference_.

This means when we pass a variable assigned to an object into a function as an argument, the computer interprets the parameter name as pointing to the space in memory holding that object.

As a result, functions which change object properties actually mutate the object permanently (even when the object is assigned to a ~~const~~ variable).

```js {numberLines}
const apple = {
  ceo: "Tim Cook",
  country: "USA",
  products: ["Macbook", "Iphone", "Ipad"],
  industry: "Consumer Electronics",
}

const changeCeo = obj => {
  obj.ceo = "Elon Musk"
}

changeCeo(apple)

console.log(apple)

// {
//  ceo: 'Elon Musk',
//  country: 'USA',
//  products: [ 'Macbook', 'Iphone', 'Ipad' ],
//  industry: 'Consumer Electronics'
// }
```

Our function ~~changeCeo()~~ permanently changed the ceo of our ~~apple~~ object.

However, reassignment of the ~~apple~~ variable wouldn’t work in the same way.

```js {numberLines}
const apple = {
  ceo: "Tim Cook",
  country: "USA",
  products: ["Macbook", "Iphone", "Ipad"],
  industry: "Consumer Electronics",
}

const appleReassign = obj => {
  obj = {
    headquarter: "Cupertino",
    founder: "Steve Jobs",
  }
}

appleReassign(apple) //The attempt at reassignment does not work.

console.log(apple)

// {
//  ceo: 'Elon Musk',
//  country: 'USA',
//  products: [ 'Macbook', 'Iphone', 'Ipad' ],
//  industry: 'Consumer Electronics'
// }
```

We can see that our ~~appleReassign()~~ function was unsuccessful in its attempt to reassign the ~~apple~~ object to a new object.

Let’s understand why:

When we passed ~~apple~~ into the ~~appleReassign()~~ function, ~~obj~~ became a reference to the memory location of the ~~apple~~ object, but _not_ to the ~~apple~~ variable.

The ~~obj~~ parameter of the ~~appleReassign()~~ function is a variable in its own right, and the body of the ~~appleReassign()~~ function has no knowledge of the ~~apple~~ variable at all!
