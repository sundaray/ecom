---
title: "Scope, Scope Chain, Lexical Scoping and Closure in JavaScript"
date: "2021-05-15"
excerpt: "Understand the confusing parts of JavaScript"
categories: ["JavaScript"]
---

```toc

```

### Scope

The location where a variable is declared affects the location from where the variable can be accessed. This accessibility or visibility of variables inside a program is known as scope.

### Global scope

A variable declared outside of a function is known as a global variable. A global variable has global scope and therefore can be accessed from anywhere in the program. Consider the following:

```js {numberLines}
const name = "Hemanta" // name is a global variable

function greeting() {
  console.log(`Hello ${name}`)
}

function myName() {
  console.log(`My name is ${name}`)
}

greeting() // Hello Hemanta

myName() // My name is Hemanta

console.log(name) // Hemanta
```

Here, the name variable is declared outside of the ~~greeting()~~ & ~~myName()~~ function. Therefore it is a global variable and can be accessed within both the functions.

### Block scope

The word ~~block~~ simply refers to the code inside the curly braces of a function. A variable declared inside a function is a local variable and can only be accessed by the code within the function block. Consider the following:

```js {numberLines}
function greet() {
  const name = "Hemanta" // name is a local variable created by greet
  console.log(`Hello ${name}`)
}

greet() // Hello Hemanta

console.log(name) // Reference error: name is not defined
```

~~console.log(name)~~ throws a reference error because ~~name~~ is a local variable, which is accessible only within the ~~greet()~~ function block (_the code inside the curly braces_) where it is defined. The ~~name~~ variable is erased from memory after execution of the ~~greet()~~ function.

### Lexical scoping

Lexical scoping refers to how variables names are resolved when functions are nested. Consider the following:

```js {numberLines}
function greet() {
  const name = "Hemanta"
  function greetMe() {
    console.log(`Hello ${name}. Nice to meet you.`)
  }
  greetMe()
}
greet() // Hello Hemanta. Nice to meet you.
```

~~greet()~~ function creates a local variable called ~~name~~ and a function called ~~greetMe()~~. ~~greetMe()~~ is a nested function inside ~~greet()~~ function body. Note that the ~~greetMe()~~ function has no local variables of its own. Because nested functions have access to the variables declared in the outer scope, ~~greetMe()~~ function can access the name variable declared in the ~~greet()~~ function.

Let’s consider another example:

```js {numberLines}
const firstName = "Hemanta"

function greet() {
  const lastName = "Sundaray"
  function greetMe() {
    console.log(`Hello ${firstName} ${lastName}`)
  }
  greetMe()
}

greet() // Hello Hemanta Sundaray
```

Above, ~~firstName~~ is a global variable because it is declared outside of the ~~greet()~~ function. During the execution of the ~~greet()~~ function, JavaScript doesn’t find the ~~firstName~~ variable inside the ~~greetMe()~~ function scope. Therefore, it goes up the scope chain and looks for the variable in the outer scope of the ~~greetMe()~~ function. The outer scope of the ~~greetMe()~~ function is the ~~greet()~~ function scope. Javascript doesn’t find the ~~firstName~~ variable even there. JavaScript again goes up the scope chain and looks for the variable in the outer scope of the ~~greet()~~ function. The outer scope of the ~~greet()~~ function is the global scope, where JavaScript finds the variable. This is how JavaScript looks up in the scope chain to resolve variable names.

Now, we know that inner functions have access to the variables declared in the outer function. However, outer functions don't have access to the variables declared inside inner functions.

Consider the following example:

```js {numberLines}
const firstName = "Hemanta"

function greet() {
  const lastName = "Sundaray"
  function greetMe() {
    const title = "Mr"
    console.log(`Hello ${firstName} ${lastName}`)
  }
  greetMe()
  console.log(`Hello ${title} ${lastName}`)
}

greet() // Hello Hemanta Sundaray

// ReferenceError: title is not defined
```

~~console.log(\`Hello ${title} ${lastName}`)~~ returns a reference error because ~~greet()~~ function tried to access the ~~title~~ variable declared inside ~~greetMe()~~ function (_which is nested inside the ~~greet()~~ function_), and we know that an outer function does not have access to the variables defined within its nested function.

### Closure

```js {numberLines}
function greet() {
  const name = "Hemanta"
  function greetMe() {
    console.log(`Hello ${name}. Nice to meet you.`)
  }
  // Note that greetMe() function is not executed below.(No parentheses after the name of the function)
  return greetMe
}

greet()() // Hello Hemanta. Nice to meet you.
```

In JavaScript, a function can return another function. (_A function that returns another function is called a higher-order function_.) In the example above, the ~~greet()~~ function returns the ~~greetMe()~~ function. It is very important to note that the ~~greetMe()~~ function is only returned, not executed (_no parentheses after the name of the function_).

Next, you may ask why are there double pair of parentheses in ~~greet()()~~; on the last line? Shouldn't there be only one pair of parentheses like ~~greet()~~?

Let me explain. ~~greet()~~(_with single pair of parentheses_) will execute the ~~greet()~~ function. The execution of the ~~greet()~~ function returns the ~~greetMe()~~ function. Note that the ~~greet()~~ function only returns the ~~greetMe()~~ function. ~~greetMe()~~ function has not been executed yet. Therefore, we need to add another pair of parentheses after ~~greet()~~ in order to execute the ~~greetMe()~~ function.

By the way, you can also write the above code snippet in the following way:

```js {numberLines}
function greet() {
  const name = "Hemanta"
  function greetMe() {
    console.log(`Hello ${name}. Nice to meet you.`)
  }
  return greetMe
}

const result = greet()

result() // Hello Hemanta. Nice to meet you.
```

Here, we have saved the return value of ~~greet()~~ function in a variable. And then we add parentheses and semicolon after the name of the variable to execute the retuned value(_which is the ~~greetMe()~~ function in our case._).

We also know that when a function finishes its execution, the local variables are erased from memory. They remain no longer available for use. So, it is reasonable to expect that when we execute the ~~greet()~~ function, the ~~name~~ variable ceases to exist. Therefore, when we execute ~~greetMe()~~ function (_which is returned by the ~~greet()~~ function_) by adding another pair of parentheses after ~~greet()~~, we should get an error. Because ~~greetMe()~~ function requires the ~~name~~ variable which is no longer available for use.

Yet, the code above executes without any error. How come? This is where the concept of closure comes into picture.

**The concept of closure says that a function maintains reference to variables that were within scope during the declaration of the function**.

From mozilla.org:

> A "closure" is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created.

We know that inner functions have access to the variables declared in the outer scope. Therefore, ~~greetMe()~~ function maintains reference to the ~~name~~ variable even after the execution of the ~~greet()~~ function and therefore executes without any error.

### Scope pollution

Scope pollution occurs when you have too many variables in the global scope or when you reuse variables across different scopes. Let's understand the concept using an example:

```js {numberLines}
let name = "Hemanta"

function greet() {
  name = "Theo"
  console.log(name)
}

greet() // Theo

console.log(name) // Theo
```

Inside the ~~greet()~~ function block, we forgot the word ~~let~~ before the ~~name~~ variable. As a result, we accidentally assigned a new name to the ~~name~~ variable present in the global scope instead of declaring a new ~~name~~ variable. This is the reason why ~~console.log(name)~~ returned ~~Theo~~ instead of ~~Hemanta~~.

As you can see, reusing variables across different scopes can result in unexpected code output. Therefore, you must exercise caution and follow the best practice.

### Best practice

It is best practice not to define variables in the global scope. Always scope your variables as tightly as possible using block scope. This will help you easily keep track of variables. Also, your code will remain modular, more understandable and easier to maintain.

### Reference

<http://www-lia.deis.unibo.it/materiale/JS/developer.mozilla.org/en-US/docs/Web/JavaScript/Closures.html>

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures>
