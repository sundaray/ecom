---
title: "Understanding Hoisting in JavaScript"
date: "2021-07-28"
excerpt: "Hoisting explained"
categories: ["JavaScript"]
---

```toc

```

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of the code.

> Note that variable and function declarations are not moved physically to the top of the code. They stay exactly where you typed them in your code. **It's the compiler that allocates memory for variable and function declarations prior to the execution of the code.**

Also note that **only declarations are hoisted**. Initializations are not hoisted.

### Initialization

Initialization is when we assign a value to a variable.

### var hoisting

Note that declarations made using the ~~var~~ keyword are initialized with a default value of ~~undefined~~.

Below, we are able to access the ~~profession~~ variable (_on line 1_) before its declaration (_on line 4_) because of hoisting.

```js {numberLines}
console.log(profession)
// undefined

var profession // variable declaration

var profession = "developer" // variable initialization
```

In the example below, we have not declared the ~~profession~~ variable. We have directly initialized it with the value ~~developer~~. Because initializations are _not_ hoisted, ~~console.log(profession)~~ results in ~~ReferenceError: profession is not defined~~

```js {numberLines}
console.log(profession)
// ReferenceError: profession is not defined

profession = "developer"
```

### let & const hoisting

Variables declared using ~~let~~ and ~~const~~ keywords are _not_ initialized with a default value of ~~undefined~~. Therefore, in the example below, ~~console.log(profession)~~ throws a reference error.

```js {numberLines}
console.log(profession)
// ReferenceError: cannot access'profession' before initialization

let profession

profession = "developer"
```

### Function hoisting

As already discussed, JavaScript puts function declarations into memory before it executes any code segment. This allows us to call a function before we have declared it.

Let’s see this in action using an example:

```js {numberLines}
greeting("World")
// Hello World

function greeting(name) {
  console.log(`Hello ${name}`)
}
```

### Function expression hoisting

Function expressions in JavaScript are _not_ hoisted. We can't use function expressions before we create them.

```js {numberLines}
greeting("World")
// ReferenceError: Cannot access 'greeting' before initialization

const greeting = name => {
  console.log(`Hello ${name}`)
}
```

The same is true for arrow function expressions. (_Arrow function expressions are compact alternatives to traditional function expressions_.)
