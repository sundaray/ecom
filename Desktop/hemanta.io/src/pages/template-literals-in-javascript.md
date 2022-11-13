---
title: "Template Literals in JavaScript"
date: "2021-06-10"
excerpt: "Learn how to use template literals in JavaScript"
categories: ["JavaScript"]
---

```toc

```

Template literals were called template strings in the prior edition of the ES2015 specification.

They allow embedded expressions.

We can also use multi-line strings and string interpolation features with them.

## Synatx

```sh
`string text`

`string text line 1
string text line 2`

`string text ${expression} string text`
```

Template literals are enclosed by the backtick character.

The placeholders inside template literals are indicated by the dollar sign and curly braces - ~~${expression}~~.

## Multi-line strings

In order to get multi-line strings using normal strings, you would have to use the following syntax.

```js {numberLines}
console.log(“Hemanta  \n” + “Sundaray”);

// output
Hemanta
Sundaray
```

With template literals, it's much more concise.

```js {numberLines}
console.log(`Hemanta
Sundaray`)

// output
Hemanta
Sundaray
```

## Embedding expressions

We can embed expressions inside normal strings using the following syntax.

```js {numberLines}
const nationality = “French”

console.log(`Theo is  a ${nationality} citizen.`)

// output
Theo is a French citizen.
```
