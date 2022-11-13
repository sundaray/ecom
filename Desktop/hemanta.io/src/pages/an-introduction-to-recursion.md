---
title: "An Introduction to Recursion"
date: "2021-07-25"
excerpt: "Learn to write elegant code using recursion."
categories: ["JavaScript-Data Structures & Algorithms"]
---

Let’s write a function that takes a number as input and logs numbers to the console starting from the number taken as input down to 0.

```js {numberLines}
const countdown = num => {
  for (let i = num; i >= 0; i--) {
    console.log(i)
  }
}

countdown(5)
// 5
// 4
// 3
// 2
// 1
// 0
```

We use a for loop to implement the ~~countdown~~ function. Using recursion, we can write the ~~countdown~~ function as follows:

```js {numberLines}
const countdown = num => {
  console.log(num)

  num > 0 && countdown(num - 1)
}

countdown(5)
// 5
// 4
// 3
// 2
// 1
// 0
```

In the recursive implementation, the function ~~countdown~~ calls itself.

In order to stop the recursion from continuing forever, we execute the ~~countdown~~ function only when ~~num > 0~~.

### The Base Case

In recursion terminology, the case in which our function will not recurse is known as the base case. In our case, 0 is the base case for our ~~countdown~~ function.

> Every recursive function needs at least one base case to prevent it from calling itself indefinitely.
