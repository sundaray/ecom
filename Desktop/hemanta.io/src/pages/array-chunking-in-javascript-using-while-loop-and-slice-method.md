---
title: "Array Chunking in JavaScript Using While Loop & Array.slice() Method."
date: "2021-07-15"
excerpt: "Given an array and chunk size, divide the array into as many subarrays as possible where each subarray is of the length chunk size."
categories: ["JavaScript-Data Structures & Algorithms"]
---

### Problem statement

Given an array and chunk size, divide an array into as many subarrays as possible where each subarray is of the length chunk size.

### Solution

```js {numberLines}
const arrayChunk = (array, size) => {
  const chunkedArray = []
  let index = 0

  while (index < array.length) {
    chunkedArray.push(array.slice(index, index + size))
    index += size
  }

  return chunkedArray
}

console.log(arrayChunk([1, 2, 3, 4, 5, 6], 2))
// [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]

console.log(arrayChunk([1, 2, 3, 4, 5, 6], 4))
// [ [ 1, 2, 3, 4 ], [ 5, 6 ] ]
```

### JavaScript while loop

```sh
while (condition)
      statement
```

The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true.

```js {numberLines}
let n = 5;
const nums = [];

while (n < 10) {
  nums.push("a");
  n++;
}

console.log(nums);

``

###### Find out more about Array.slice() in my blog post [here](https://hemanta.io/javascript-subarrays-with-slice-and-splice/)
```
