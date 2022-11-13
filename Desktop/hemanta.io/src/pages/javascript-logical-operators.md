---
title: "JavaScript Logical Operators"
date: "2021-05-27"
excerpt: "Understand the usage of AND(&&) & OR(||) operators."
categories: ["JavaScript"]
---

```toc

```

In this post, we will cover only two logical operators - ~~AND(&&)~~ and ~~OR(||)~~.

First, we need to understand the concept of truthy and falsy in JavaScript.

Any value that, when converted into a Boolean, becomes ~~true~~ is truthy, while any value that becomes ~~false~~ is falsy.

A Boolean is a logical data type that can only have the values: ~~true~~ or ~~false~~.

```js
console.log(Boolean(" ")) //false

console.log(Boolean(0)) //false

console.log(Boolean(false)) //false

console.log(Boolean(undefined)) // false

const name = "Mac"

console.log(Boolean(name)) //true
```

### The AND operator - (&&)

The ~~AND~~ operator is represented with two ampersands.

In a chain of &&s, each value will be evaluated from left to right. If any of these values happen to be falsy, that value will be returned and the chain will not continue. If the chain doesn’t break before reaching the end, the last value in the chain will be returned.

**In other words, ~~AND~~ returns the first falsy value or the last value if none were found**.

```js
console.log(`Hemanta` && `Kumar` && `Sundaray`) //Sundaray

console.log(1 && false && 3) //false
```

### The OR operator - ||

The ~~OR~~ operator is written with two pipes.

The ~~||~~ operator behaves exactly like the ~~&&~~ does, only in reverse! While a chain of &&s will break if a falsy value is found, a chain of ||s will break when it finds a truthy value. And just like with the &&s, if there are no truthy values and the end of the chain is reached, the last value in that chain is reached.

**In other words, a chain of ~~OR~~ returns the first truthy value or the last one if no truthy value is found**.

```js
console.log(false || 0 || `text`) //text

console.log(false || false || false) //false
```
