---
title: "Logical Operators in JavaScript"
date: "2022-04-30"
excerpt: "The && operator, the || operator & the ! operator"
categories: ["JavaScript"]
---

```toc

```

We can add additional layers of logic in our conditional statements using logical operators.

There are three logical operators:

- The _and_ operator (~~&&~~)
- The _or_ operator (~~||~~)
- The _not_ operator, otherwise known as the bang (~~!~~) operator

### The and operator

When we use the ~~&&~~ operator, we are checking that two things are ~~true~~.

```js {numberLines}
let age = 18
let drunk = false

if (age >= 18 && !drunk) {
  console.log("You can drive.")
} else {
  console.log("You can not drive.")
}
```

When using the ~~&&~~ operator, both conditions must evaluate to ~~true~~ for the entire condition to evaluate to ~~true~~ and execute.

### The or operator

If we only care about either condition being ~~true~~, we can use the ~~||~~ operator.

```js {numberLines}
let day = "Saturday"

if (day === "Saturday" || day === "Sunday") {
  console.log("Time to party!")
} else {
  console.log("Time to work!")
}

// Time to party!
```

When using the ~~||~~ operator, only one of the conditions must evaluate to ~~true~~ for the overall statement to evaluate to ~~true~~.

### The bang operator

The ~~!~~ operator reverses or negates, the value of a boolean.

```js {numberLines}
let drunk = true

console.log(!drunk) // Prints false

let tipsy = false
console.log(!tipsy) // Prints true
```

Essentially, the ~~!~~ operator will either take a ~~true~~ value and pass back ~~false~~, or it will take a ~~false~~ value and pass back ~~true~~.
