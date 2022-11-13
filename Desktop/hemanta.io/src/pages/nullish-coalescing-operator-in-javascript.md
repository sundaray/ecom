---
title: "Nullish Coalescing Operator in JavaScript"
date: "2021-07-11"
excerpt: "Understand how to use the JavaScript nullish coalescing logical operator."
modules: [JavaScript]
---

When we want to assign a default value to a variable, a common pattern is to use the logical OR opeartor (~~||~~):

###### Find out more about the JavaScript logical OR (||) operator in my blog post [here](https://hemanta.io/javascript-logical-operators/).

```js {numberLines}
let count = 0

let qty = count || 20

console.log(qty)
// 20
```

~~count~~ when converted to a boolean is falsy, so ~~count~~ is falsy. So, the value of ~~qty~~ becomes 20.

This behavior can be problematic if we consider 0 as a valid value for ~~qty~~.

We can avoid this pitfall by using the nullish coalescing operator, which returns the second operand when the first one evaluates to either ~~null~~ or ~~undefined~~.

### Syntax

```sh
leftExp ?? rightExp
```

> The nullish coalescing operator (~~??~~) is a logical operator that returns its right-hand side operand when its left-hand side operand is ~~null~~ or ~~undefined~~, and otherwise returns its left-hand side operand.

So, we can rewrite the above example using the nullish coalescing operator. This time, ~~console.log(qty)~~ returns 0.

```js {numberLines}
let count = 0

let qty = count ?? 20

console.log(qty)
// 0
```
