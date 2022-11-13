---
title: "Var vs Let vs Const in JavaScript"
date: "2021-05-28"
excerpt: "Find out the differences among var, let and const."
categories: ["JavaScript"]
---

Using ~~var~~ keyword was the only way we could declare variables pre-ES6. With the introduction of ES6, we now have two new keywords - ~~const~~ & ~~let~~ - for variable declaration.

Let’s find out the major differences among ~~var~~, ~~let~~ & ~~const~~.

### var is function scoped

Consider the following code snippet:

```js {numberLines}
function urban() {
  if (true) {
    var city = "Paris"
    console.log(city) // Paris
  }
  console.log(city) // Paris
}

urban()
```

We have declared the ~~city~~ variable using the ~~var~~ keyword inside the if statement, which is inside the ~~urban()~~ function. Because a variable declared using the ~~var~~ keyword is function scoped, on line 6, we can access the ~~city~~ variable and we have ~~Paris~~ in the console.

### let and const are block scoped

The code inside a pair of curly braces is called **block** or **code block**.

Below, we have two code snippets. They both are exactly the same with only one difference. In the first code snippet, we have declared the ~~city~~ variable using the ~~let~~ keyword. And in the second code snippet, we have declared the ~~city~~ variable using the ~~const~~ keyword.

```js {numberLines}
function urban() {
  if (true) {
    let city = "Paris"
    console.log(city) // Paris
  }
  console.log(city) // ReferenceError: city is not defined
}

urban()
```

```js {numberLines}
function urban() {
  if (true) {
    const city = "Paris"
    console.log(city) // Paris
  }
  console.log(city) // ReferenceError: city is not defined
}

urban()
```

We get ReferenceError on line 6 in both the code snippets, because a variable declared using ~~let~~ & ~~const~~ keywords is only accessible by the code inside of the code block (_the code inside curly braces_). As a result, we can access the ~~city~~ variable on line 4 but not on line 6, which is outside the if statement code block.

**A variable declared in the global scope using ~~const~~ or ~~let~~ keyword doesn’t create properties on the global ~~window~~ object. However, a variable declared in the global scope using the ~~var~~ keyword does create properties on the global ~~window~~ object**.
