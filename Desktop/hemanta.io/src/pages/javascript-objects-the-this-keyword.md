---
title: "JavaScript Objects - The this Keyword"
date: "2022-05-03"
excerpt: "Learn how to access the calling object's properties using the this keyword."
categories: ["JavaScript"]
---

###### Learn about JavaScript object methods in my blog post [here](https://hemanta.io/javascript-objects-methods/).

Objects are collections of related data and functionality. We store that functionality in methods on our objects

Our ~~apple~~ object below has a method named ~~leadership()~~.

```js {numberLines, 10-10}
const apple = {
  industry: "Consumer Electronics",
  ceo: "Tim Cook",
  leadership() {
    console.log(`${ceo} is the CEO of Apple.`)
  },
}

console.log(apple.leadership())
// ReferenceError: ceo is not defined
```

Notice that calling the ~~leadership()~~ method on the ~~Apple~~ objects returns a ReferenceError.

Why?

That’s because inside the scope of the ~~leadership()~~ method, we don’t automatically have access to the ~~ceo~~ property of the ~~Apple~~ object.

Here’s where the ~~this~~ keyword comes to the rescue. If we change the ~~leadership()~~ method to use ~~this~~, the ~~leadership()~~ method works.

```js {numberLines}
const apple = {
  industry: "Consumer Electronics",
  ceo: "Tim Cook",
  leadership() {
    console.log(`${this.ceo} is the CEO of Apple.`)
  },
}

console.log(apple.leadership())
// Tim Cook is the CEO of Apple.
```

The ~~this~~ keyword references the _calling_ object which provides access to the calling object’s properties. In the example above, the calling object is ~~apple~~ and by using ~~this~~, we are accessing the ~~apple~~ object itself, and then the ~~ceo~~ property of ~~apple~~ by using property dot notation.
