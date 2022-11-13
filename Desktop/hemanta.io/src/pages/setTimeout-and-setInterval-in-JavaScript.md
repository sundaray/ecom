---
title: "setTimeout & setInterval in JavaScript"
date: "2021-07-31"
excerpt: "JavaScript browser APIs"
categories: ["JavaScript"]
---

```toc

```

> ~~setTimeout()~~ and ~~setTimeInterval()~~ are not part of the JavaScript language itself. They are browser APIs that sit on top of the JavaScript language.

### setTimeout()

Executes a specified block of code _once_ after a set period of time.

~~setTimeout~~ takes the following parameters:

- A function to run or a reference to a function defined elsewhere.

- A number representing the time (in milliseconds) to wait before executing the code. If you specify a value of 0, the function runs as soon as possible.

> **Note:** The callback is run as soon as possible, not immediately, because it has to wait for the stack on the main thread to be empty before it can run.

- Zero or more values that represent any parameters you want to pass to the function when it is run.

#### Examples:

Using an anonymous function;

```js {numberLines}
// Anonymous function
setTimeout(function () {
  console.log(`Hello World!`)
}, 2000)
```

Using a named function:

```js {numberLines}
setTimeout(function greeting() {
  console.log(`Hello World!`)
}, 2000)
```

Below, we pass a reference to the ~~greeting()~~ function as the first argument of ~~setTimeout~~.

```js {numberLines}
function greeting() {
  console.log(`Hello World!`)
}

setTimeout(greeting, 2000)
```

Passing parameters to the function:

```js {numberLines}
function greeting(name) {
  console.log(`Hello ${name}`)
}

setTimeout(greeting, 2000, "hemanta")
```

### setInterval()

Executes a specified block of code at regular interval.

~~setInterval()~~ works in a very similar way to ~~setTimeout( )~~ except the function you pass as the first parameter **is executed repeatedly** at the time interval specified by the second parameter.

#### Example:

```js {numberLines}
function greeting(name) {
  console.log(`Hello ${name}`)
}

setInterval(greeting, 2000, "hemanta")
```
