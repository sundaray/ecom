---
title: "How to Reverse An Integer In JavaScript?"
date: "2021-07-14"
excerpt: "Using the methods: Math.sign() & Number.parseInt()"
categories: ["JavaScript-Data Structures & Algorithms"]
---

```toc

```

```js {numberLines}
const reverseInt = int => {
  // convert the number to a string
  const toStr = int.toString()

  // reverse the string
  const strReversed = toStr.split("").reverse().join("")

  // convert the reversed string to a number
  const intReversed = Number.parseInt(strReversed, 10)

  // If int is positive, then return the number; otherwise, return the number multiplied by -1
  return intReversed * Math.sign(int)
}

console.log(reverseInt(514))
// 415

console.log(reverseInt(-500))
// -5
```

### Number.parseInt()

```sh
Number.parseInt(string, radix)
```

The ~~Number.parseInt()~~ method parses a string argument and returns an integer of the specified radix (base).

#### radix

Any number system with radix (or base), ~~r~~ consists of ~~0~~ to ~~r-1~~ symbol to represent any number. For example, decimal number system having radix, ~~r-10~~, uses ~~0~~ to ~~9~~ numbers.

If radix is undefined or ~~0~~, it is assumed to be ~~10~~.

```js {numberLines}
// radix is assumed to be 10
const num = Number.parseInt("340")

console.log(num)
// 340

console.log(typeof num)
// number
```

### Math.sign()

The ~~Math.sign()~~ function returns ~~1~~ if the argument is positive, ~~-1~~ if the argument is negative, ~~0~~ if the argument is positive zero, ~~-0~~ if the argument is negative zero, ~~NaN~~ if otherwise.

```js {numberLines}
console.log(Math.sign(2))
//  1

console.log(Math.sign(-5))
//  -1

console.log(Math.sign(0))
//  0

console.log(Math.sign(-0))
//  -0
```

###### Learn how to reverse a string in my blog post [here](https://hemanta.io/3-ways-to-reverse-a-string-in-javascript/).
