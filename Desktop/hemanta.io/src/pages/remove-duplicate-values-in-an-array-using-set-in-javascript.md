---
title: "Remove Duplicate Values in an Array Using Set in JavaScript"
date: "2021-06-14"
excerpt: "Learn to use JavaScript Set objects."
categories: ["JavaScript"]
---

In JavaScript, ~~Set~~ objects store unique values of any type: primitive values or object references.

Each value in the ~~Set~~ has to be unique, Meaning, a value in the ~~Set~~ occurs only once.

We can create ~~Set~~ objects using the ~~Set~~ constructor.

### Syntax

```sh
new Set

new Set(iterable)
```

Passing an iterable is optional. If you don't specify it, the new ~~Set~~ is empty.

We can use ~~Set~~ objects to remove duplicates from an array.

```js {numberLines}
const tech = ["React", "Vue", "Angular", "React", "Vue"]

const techDuplicatesRemoved = [...new Set(tech)]

console.log(techDuplicatesRemoved)

// ["React", "Vue", "Angular"]
```
