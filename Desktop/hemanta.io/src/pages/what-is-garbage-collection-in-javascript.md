---
title: "What is Garbage Collection in JavaScript?"
date: "2021-07-16"
excerpt: "Understanding memory management in JavaScript"
categories: ["JavaScript"]
---

Let’s talk about memory management in JavaScript.

Regardless of the programming language, the memory life cycle can be understood in 3 steps:

- Allocate the memory you need
- Use (_read, write_) the allocated memory &
- Release the allocated memory when it is not needed anymore

### Allocating memory

JavaScript automatically allocates memory when values are declared initially.

#### Example:

```js {numberLines}
// allocates memory for a number
let num = 2604;

// allocates memory for a string
 let str = “hemanta”
```

### Using memory

We use memory when we read and write in allocated memory. This can be done, for example, by reading and writing the value of a variable or an object property or even passing an argument to a function.

### Releasing memory

At this stage, JavaScript utilizes a form of **automatic** memory management known as **garbage collection**. The purpose of a garbage collector is to monitor memory allocation and determine when a block of allocated memory is no longer needed and reclaim it.
