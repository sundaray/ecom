---
title: "Learn TypeScript - Functions"
date: "2021-06-21"
excerpt: ""
categories: ["TypeScript"]
---

```toc

```

In TypeScript, we can add type annotations to function parameters with the same syntax as variable declarations - a colon ~~:~~ next to the name of the parameter. The type annotations ensure that the parameters are of correct type:

```ts {numberLines}
function occupation(title: string) {
  console.log(`I am a ${title}`)
}

occupation(10)
// Argument of type 'number' is not assignable to parameter of type 'string'.
```

By placing ~~: string~~ after the ~~title~~ parameter, we are declaring that ~~title~~ is of type ~~string~~. Any invocation of ~~occupation()~~ should pass a value of type ~~string~~ as the first argument, or else an error will be thrown.

Parameters that we don’t provide type annotations are assumed to be of type ~~any~~ - the same way variables are.

```ts {numberLines}
function personDetail(name: string, age) {
  console.log(`My name is ${name} & I am ${age} years old.`)
}

personDetail("Josh", "twenty")
// no error

personDetail("Chris", 26)
// no error
```

### Optional Parameters

We can indicate that a parameter is optional by adding a ~~?~~ after its name. This tells TypeScript that the parameter is allowed to be ~~undefined~~ and doesn’t always have to be provided.

```ts {numberLines}
function greeting(name? : string) {
console.log(`Hello ${name || “stranger”}`);
}

greeting();
// Hello stranger
```

We can also make a parameter optional by assigning it a default value. With default parameters, TypeScript will infer the variable type to be the same as the default value’s type.

```ts {numberLines}
function greet(name = "Anonymous") {
console.log(`Hello ${name}`)
};

greet();
Hello Anonymous
```

The function ~~greet()~~ can receive a ~~string~~ or ~~undefined~~ as its ~~name~~ parameter. If any other type is provided, TypeScript will consider that as a type error.

### Inferring return types

TypeScript can also infer the types of values returned by functions. It does this by looking at the types of the values after a function’s ~~return~~ statements.

```ts {numberLines}
function welcome(name: string) {
  return `Namaste, ${name}!`
}

welcome("George")
```

Here’s how TypeScript can infer the value returned by the ~~welcome()~~ function to be of type ~~string~~:

- ~~welcome()~~’s ~~return~~ statement is followed by a ~~string~~ variable, so ~~welcome()~~ is inferred to return ~~string~~.
- ~~welcome('George')~~ therefore must result in a value of type ~~string~~.

Let’s see how this can help us fix bugs:

```ts {numberLines}
function inchToCms(inch: number) {
  return `${inch * 2.54} cms`
}

const result: number = inchToCms(3)
// Type 'string' is not assignable to type 'number'.
```

Here, TypeScript was able to infer that ~~result~~ was being assigned a value of type ~~string~~, despite it being declared as a variable of type ~~number~~. This correctly results in an error being surfaced.

### Explicit return types

If we’d like to be explicit about what type a function returns, we can add an explicit type annotation after its closing parenthesis. Here, we use the same syntax as other type annotations - a colon (~~:~~) followed by the type. TypeScript will produce an error for any return statement in that function that doesn’t return the right type of value.

```ts {numberLines}
function greeting(name?: string): string {
  if (name) {
    return `Hello, ${name}!`
  }

  return undefined
  //Typescript Error: Type 'undefined' is not assignable to type 'string'.
}
```

We can also explicitly state return types for arrow functions. We’ll see the same kinds of error messages for both function types.

```ts {numberLines}
const arrowGreeting = (name?: string): string => {
  if (name) {
    return `Hello, ${name}!`
  }

  return undefined
  // Typescript Error: Type 'undefined' is not assignable to type 'string'.
}
```

### Void return type

Sometimes, functions don’t return anything. We might write a function just to log the value of something in the console. In such scenarios, we must treat the return type as void.

A proper type annotation for a function that doesn’t return anything would look like this:

```ts {numberLines}
function tripled(number = 10): void {
  console.log(`${number} * 3`)
}

tripled()
```

### Documenting functions

TypeScript recognizes JavaScript comment syntax:

```sh
// This is a single line comment.

/*
This is a
multiline
comment
*/
```

But it’s common in TypeScript to see a third comment style: documentation comments. A documentation comment is denoted with the first line /\*\* and a final line \*/. It’s common for each line within the comment to start with an asterisk (\*).

```sh
/**
* This is a documentation comment
*/
```

Documentation comments are especially useful for documenting functions. We place a function’s documentation comment in the code directly above the function declaration. We can use special tags within the comment to highlight certain aspects of the function. We can use ~~@param~~ to describe each of the function’s parameters, and we can use ~~@returns~~ to describe what the function returns:

```sh {numberLines}
  /**
   * Returns the sum of two numbers.
   *
   * @param num1 - The first input number
   * @param num2 - The second input number
   * @returns The sum of `num1` and `num2`
   *
   */
  function sum(num1: number, num2: number): number {
    return num1 + num2;
  }
}
```

Many text editors will helpfully display documentation comments, for example, when hovering over a function name.
