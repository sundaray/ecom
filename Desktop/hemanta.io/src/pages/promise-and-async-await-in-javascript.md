---
title: "Promise & Async/await in JavaScript"
date: "2021-05-15"
excerpt: "Learn how to create and consume promises and write asynchronous, promise-based behavior in a cleaner style using async and await keywords."
categories: ["JavaScript"]
---

```toc

```

### Asynchronous Operation

An operation we can wait on while moving on to other tasks.

Making a network request, querying a database, etc. are examples of asynchronous operations, which return Promise objects that represent the eventual outcome of an asynchronous operation.

### Non-blocking

Instead of stopping the execution of code while it awaits, JavaScript uses an event-loop, which allows it to efficiently execute other tasks while it awaits the completion of the asynchronous actions.

When a program is run, function calls are made and added to a stack. The functions that make requests that need to wait for servers to respond then get sent to a separate queue. Once the stack has cleared, then the functions in the queue are executed.

### Constructing a Promise object

```js {numberLines}
const executorFunction = (resolve, reject) => {
  if (someCondition) {
    resolve("I resolved!")
  } else {
    reject("I rejected!")
  }
}

const myFirstPromise = new Promise(executorFunction)
```

A ~~Promise~~ object is constructed using the ~~new~~ keyword and the ~~Promise~~ constructor method.

The ~~Promise~~ constructor method takes a function parameter (an **executor function**) which runs automatically when the constructor is called and dictates how the promise should be settled.

The executor function has two function parameters: ~~resolve~~ & ~~reject~~. ~~resolve~~ & ~~reject~~ are not defined by the programmer. When the ~~Promise~~ constructor runs, JavaScript passes its own ~~resolve~~ & ~~reject~~ functions into the executor function.

~~resolve~~ takes one argument, which is the resolved value of the promise. ~~reject~~ takes one argument, which is the reason (_error_) for the promise’s rejection.

In the example code above, ~~myFirstPromise~~ resolves or rejects based on a simple condition. In practice however, promises settle based on the results of asynchronous operations.

### Consuming Promises

Knowing how to consume/use the promise object returned from the execution of an asynchronous operation is very important.

```js {numberLines}
let prom = new Promise((resolve, reject) => {
  let num = Math.random()
  if (num < 0.5) {
    resolve("Done!")
  } else {
    reject("Error!")
  }
})
const handleSuccess = resolvedValue => {
  console.log(resolvedValue)
}
const handleFailure = rejectionReason => {
  console.log(rejectionReason)
}
prom.then(handleSuccess, handleFailure)
```

Promise objects come with a ~~then~~ method. ~~then~~ is a higher-order function which takes in two callback functions ( a **success handler** & a **failure handler**) as arguments. When the promise settles, the appropriate handler is invoked with the settled value.

### The catch method for handling rejection

```js {numberLines}
let prom = new Promise((resolve, reject) => {
  let num = Math.random()
  if (num < 0.5) {
    resolve("Done!")
  } else {
    reject("Error!")
  }
})

prom.then(resolvedValue => {
  console.log(resolvedValue)
})

prom.catch(rejectionReason => {
  console.log(rejectionReason)
})
```

The function passed as the second argument to a ~~then~~ method of a promise object is used when the promise is rejected. An alternative to this approach is to use the JavaScript ~~catch~~ method of the promise object. The information for the rejection is available to the handler supplied in the ~~catch~~ method.

### Async...await

~~Async…await~~ improves the readability of code and allows us to write asynchronous code that reads similarly to traditional synchronous code.

### Async function declaration

```js {numberLines}
async myFunction() {
  // function body here
};

myFunction();
```

### Async function expression

```js {numberLines}
const myFunction = async () => {
  // function body here
}
```

Async functions always return a promise.

#### The await operator

```js {numberLines}
let myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {resolve(‘I resolved’)}, 2000)});
}

async function await() {
  let value = await myPromise();
  console.log(value);
}

await(); // => I resolved
```

The ~~await~~ keyword halts the execution of the async function until a promise is no longer pending. It returns the resolved value of a promise.
