---
title: "Solving the Classic FizzBuzz Problem in JavaScript"
date: "2021-07-15"
excerpt: "Using for loop."
categories: ["JavaScript-Data Structures & Algorithms"]
---

### Problem statement

Write a program that console logs numbers from 1 to n. But the program should print ~~fizz~~ if a number is divisible by 3, ~~buzz~~ if divisible by 5 and ~~fizzbuzz~~ if divisible by both 3 & 5.

### Solution

The only knowledge you need to solve this problem is the knowledge of the JavaScript [remainder](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder) operator.

```js {numberLines}
const fizzbuzz = num => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz")
    } else if (i % 3 === 0) {
      console.log("fizz")
    } else if (i % 5 === 0) {
      console.log("buzz")
    } else {
      console.log(i)
    }
  }
}

fizzbuzz(15)
// 1
2
fizz
4
buzz
fizz
7
8
fizz
buzz
11
fizz
13
14
fizzbuzz
```
