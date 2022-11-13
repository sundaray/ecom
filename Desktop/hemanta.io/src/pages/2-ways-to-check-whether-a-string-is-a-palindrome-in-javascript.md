---
title: "2 Ways to Check Whether a String is a Palindrome in JavaScript"
date: "2021-07-14"
excerpt: "Using Array.reduce() & another method that uses String.split(), Array.reverse() & Array.join()"
categories: ["JavaScript-Data Structures & Algorithms"]
---

```toc

```

### Palindrome

A word or sentence that reads the same backward or forward.

Example: radar, level, etc.

### Problem statement

Write a function that accepts a string as an argument and returns ~~true~~, if the string is a palindrome and returns ~~false~~, if otherwise.

### Solution-1

```js {numberLines, 2}
const palin = str => {
  const reversedStr = str.split("").reverse().join("")

  return str === reversedStr
}

console.log(palin("radar"))
//true
```

In the code snippet above, on line 2, we are reversing the string received as an argument.

###### Learn 3 different methods to reverse a string in my blog post [here](https://hemanta.io/3-ways-to-reverse-a-string-in-javascript/).

### Solution-2

```js {numberLines}
const palin = str => {
  const strArray = str.split("")

  return strArray.every((char, i) => {
    return char === strArray[strArray.length - i - 1]
  })
}

console.log(palin("radar"))
// true
```

###### Learn about the every() method in my blog post [here](https://hemanta.io/javascript-iterator-methods/)
