---
title: "TypeScript - The Type System"
date: "2021-09-15"
excerpt: "Let TypeScript infer as many types for you as possible, keeping explicitly typed code to the minimum."
categories: ["TypeScript"]
---

###### The following blog post is a summary of **chapter 2. TypeScript: A 10_000 Foot View**, from the book **Programming Typescript** by Boris Cherny

A type system is a set of rules that a type checker uses to assign types to your program. (a type checker is a special program that verifies that our code is type safe.)

There are generally two kinds of type systems:

The first type is one in which we have to tell the compiler which type everything is with explicit syntax. We use annotations for this:

```js {numberLines}
let a: number = 12 // a is a number

let language: string = "TypeScript" // language is a string

let c: boolean[] = [true, false] // c is an array of booleans
```

The second type of type system automatically infers the type of things for us. In this case, we leave off the annotations.

```js {numberLines}
let a = 12 // a is a number

let language = "TypeScript" // language is a string

let c = [true, false] // c is an array of booleans
```

> **Note:** It is a good style to let TypeScript infer as many types as possible for us, keeping explicitly typed code to a minimum.
