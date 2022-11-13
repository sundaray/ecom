---
title: "How to Find out the Most Common Character in a String in JavaScript?"
date: "2021-07-14"
excerpt: "Using for...of & for...in loops."
categories: ["JavaScript-Data Structures & Algorithms"]
---

### Problem statement

Given a string, return the character that is most commonly used in the string.

We will solve this problem in two steps:

#### Step-1

We will create an object from the input string where the keys will be each character of the string and their values will be the no. of times respective characters appear in the string.

```js {numberLines, 5-5}
const maxChar = str => {
  const strObj = {}

  for (let char of str) {
    strObj[char] = strObj[char] + 1 || 1
  }

  return strObj
}

console.log(maxChar("hemanta"))
// { h: 1, e: 1, m: 1, a: 2, n: 1, t: 1 }
```

The code on line 5 is important understand.

Note that a character in a string can occur one time or multiple times. For example, in the string "Hemanta", the character "m" occurs only once, while the character "a" occurs twice.

While iterating over a string, if we come across a character that we have already iterated over, we add 1 to its value in the ~~strObj~~ object. And if we encounter the character for the first time, we add the character with a value of 1 inside the ~~strObj~~ object.

Once we have the object, the next step will be to identify the key with the highest value.

###### Learn about different for loops in JavaScript in my blog post [here](https://hemanta.io/for-loops-in-javascript/).

#### Step-2

We will keep track of two variables: ~~maxCount~~ & ~~maxChar~~. Then, we will loop through the object and compare the value of each key to ~~maxCount~~. If the value is greater than the value of ~~maxCount~~, then, we will assign that value to ~~maxCount~~ and the key to ~~maxChar~~. At the end of the loop, ~~maxChar~~ will be the most common character in the input string.

```js {numberLines, 3-4, 10-17}
const maxChar = str => {
  const strObj = {}
  let maxCount = 0
  let maxChar = ""

  for (let char of str) {
    strObj[char] = strObj[char] + 1 || 1
  }

  for (let key in strObj) {
    if (strObj[key] > maxCount) {
      maxCount = strObj[key]
      maxChar = key
    }
  }

  return maxChar
}

console.log(maxChar("hemanta"))
// a
```

###### Learning JavaScript Data Structures and Algorithms? Check out my blog posts [here](https://hemanta.io/categories/java-script-data-structures-algorithms/)
