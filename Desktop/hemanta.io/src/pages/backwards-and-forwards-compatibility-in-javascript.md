---
title: "Backwards & Forwards Compatibility in JavaScript"
date: "2021-07-26"
excerpt: "Transpiler & Polyfill"
categories: ["JavaScript"]
---

```toc

```

###### These are my notes from the first book - **Get Started** - of the **You don’t know JS Yet** book series by Kyle Simpson.

### Backwards Compatibility

JavaScript is backwards-compatible. This means that once something is accepted as valid JS, there will not be a future change to the language that causes that code to become invalid JS. JS code written in 1995 - however primitive or limited - should still work now.

The idea is that JS developers can write code with confidence that their code wouldn’t stop working unpredictably because a browser update is released.

### Forwards Compatibility

JS is not forwards-compatible. This means that including a new addition to the language in a program would cause that program to break if it were run in an older JS engine. So if you run a program that uses an ES2019 feature in an engine from 2016, the program will very likely break and crash.

### Transpiler

Typically forwards-compatibility problems related to syntax are solved by using a transpiler to convert from a newer JS syntax to an equivalent older version. The most common transpiler being used is Babel, which is mainly used to convert ECMASCRIPT-2015+ code into backwards compatible version of JavaScript in current and older browsers or environments.

### Polyfill

If the forwards-compatibility issue is not related to new syntax, but rather to a missing API method that was only recently added, the most common solution is to provide a definition for that missing API method that stands in and acts as if the older environment had already had it natively defined. This pattern is called a **polyfill** (aka "shim").

###### Check out all of my JavaScript related blog posts [here](https://hemanta.io/categories/java-script/).
