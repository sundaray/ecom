---
title: "If...Else Statements in JavaScript"
date: "2022-04-28"
excerpt: "Conditional statements in JavaScript."
categories: ["JavaScript"]
---

We can perform tasks based on conditions using ~~if...else~~ statements. They allow us to automate solutions to yes-or-no questions, also known as binary decisions.

In an ~~if...else~~ statement the ~~if~~ statement is used to decide whether or not to run a block of code. The ~~else~~ statement is used to run a block of code when the condition evaluates to ~~false~~.

An ~~else~~ statement must be paired with an ~~if~~ statement, and together they are referred to as an ~~if...else~~ statement.

**Example**

```js {numberLines}
let unsubscribed = true

if (unsubscribed) {
  console.log("We are sad to see you go!")
} else {
  console.log("Hope you are enjoying Codecademy!")
}

// We are sad to see you go!
```
