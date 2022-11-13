---
title: "While Loop in JavaScript"
date: "2022-04-25"
excerpt: "The while loop in JavaScript."
categories: ["JavaScript"]
---

Below, we have an example of a ~~while~~ loop.

```js {numberLines}
let counter = 1

while (counter < 6) {
  console.log(counter)
  counter++
}

// 1
// 2
// 3
// 4
// 5
```

Let’s break down what’s happening with our ~~while~~ loop syntax:

- The ~~counter~~ variable is declared before the loop. We can access it inside our ~~while~~ loop since it’s in the global scope.
- We start our loop with the keyword ~~while~~ followed by our stopping condition. This will be evaluated before each round of the loop. While the condition evaluates to ~~true~~, the block will continue to run. Once it evaluates to ~~false~~ the loop will stop.
- Next, we have our loop’s code block which prints ~~counter~~ to the console and increments ~~counter~~.
