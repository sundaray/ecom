---
title: "Ternary Operator in JavaScript"
date: "2022-03-16"
excerpt: "Learn how to simplify an if...else statement."
categories: ["JavaScript"]
---

We can simplify an ~~if...else~~ statement using a ternary operator.

Consider the following example:

```js {numberLines}
let batteryLevel = 0.02

if (batteryLevel < 0.01) {
  console.log("Activate battery saving mode.")
} else {
  console.log("Do not activate battery saving mode.")
}

// Do not activate battery saving mode.
```

We can use a _ternary operator_ to perform the same functionality:

```js {numberLines}
let batteryLevel = 0.02

batteryLevel < 0.01
  ? console.log("Activate the battery saving mode.")
  : console.log("Do not activate the battery saving mode.")

// Do not activate the battery saving mode.
```

In the example above:

- The condition ~~batteryLevel < 0.01~~ is provided before the ~~?~~.
- Two expressions follow the ~~?~~ and are separated by a colon ~~:~~.
- If the condition evaluates to ~~true~~, the first expression executes.
- If the condition evaluates to ~~false~~, the second expression executes.

Like ~~if...else~~ statements, ternary operators can be used for conditions which evaluate to ~~true~~ or ~~false~~.
