---
title: "Nested For Loops in JavaScript"
date: "2022-04-27"
excerpt: "Nested For loops."
categories: ["JavaScript"]
---

When we have a loop running inside another loop, we call that a _nested_ loop.

One use of a nested ~~for~~ loop is to compare the elements in two arrays. For each round of the outer ~~for~~ loop, the inner ~~for~~ loop will run completely.

Below, we have an example of a nested ~~for~~ loop.

```js {numberLines}
const listOne = ["1", "2", "3", "4"]

const listTwo = ["2", "3", "6", "8", "12"]

const mutualNums = []

for (let i = 0; i < listOne.length; i++) {
  for (let j = 0; j < listTwo.length; j++) {
    if (listOne[i] === listTwo[j]) {
      mutualNums.push(listOne[i])
    }
  }
}

console.log(mutualNums)
// ['2', '3']
```

In the example above, for each element in the outer loop array, ~~listOne~~, the inner loop will run in its entirety comparing the current element from the outer array, ~~listOne[i]~~, to each element in the inner array, ~~listTwo[j]~~. When it finds a match, it pushes the string to the ~~mutualNums~~ array.
