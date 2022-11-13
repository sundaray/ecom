---
title: "Learn TypeScript - Types"
date: "2021-06-19"
excerpt: ""
categories: ["TypeScript"]
---

```toc

```

TypeScript is a programming language that adds types to JavaScript.

It allows us to write JavaScript with a set of tools called a type system that helps us understand more about our code, and particularly, discover bugs.

The type system refers to TypeScript’s understanding of what data types should be stored under your variables.

We write TypeScript code in files with extension ~~.ts~~.

Next, we run our code through the TypeScript transcompiler which will check that the code adheres to TypeScript’s standards, and will display errors when it doesn’t. If the TypeScript code can be converted into working JavaScript, the transcompiler will output a JavaScript version of the file (~~.js~~).

Given this TypeScript code as input:

```ts
let firstName = "Hemanta"
```

The TypeScript transcompiler would output this JavaScript code:

```js
let firstName = "Hemanta"
```

TypeScript code looks roughly the same as the equivalent JavaScript.

### Type Inferences

JavaScript allows us to assign any value to any variable.

In TypeScript, when we declare a variable with an initial value, the variable can never be reassigned a value of a different data type. This is an example of type inference: everywhere in our program, TypeScript expects the data type of the variable to match the type of the value assigned to it at declaration.

TypeScript recognizes JavaScript’s built-in “primitive” data types:

- boolean
- number
- null
- string
- undefined

If we try to reassign a variable to a value of a different data type, TypeScript will surface an error.

```ts
let number: number = 10

number = "ten"

//Type 'string' is not assignable to type 'number'.
```

### Type shapes

Because TypeScript knows what types our objects are, it also knows what shapes our objects adhere to. An object’s shape describes, among other things, what properties and methods it does or doesn’t contain.

Through this knowledge of type shapes, TypeScript helps us quickly locate bugs in our code.

### Any

There are some places where TypeScript will not try to infer what type something is - generally when a variable is declared without being assigned an initial value. In situations, where it is not able to infer a type, TypeScript will consider a variable to be of type ~~any~~.

Variables of type ~~any~~ can be assigned to _any_ value and TypeScript won’t give _any_ error if they are assigned to a different type later on.

```ts {numberLines}
let framework;

framework = “Express”;

farmework = true;
```

Above, we declared the ~~framework~~ variable without an initial value. TypeScript considers it to be of type ~~any~~, and therefore, doesn’t produce an error when we change the variable’s assignment from a string value to a boolean value.

### Variable type annotations

In some situations, we’d like to declare a variable without an initial value while still ensuring that it will only ever be assigned values of a certain type. If left as ~~any~~, TypeScript won’t be able to protect us from accidentally assigning a variable to an incorrect type that could break our code.

We can tell TypeScript what type something is or will be by using a _type annotation_.
Variables can have _type annotations_ (also known as type declarations) added just after their names. We provide a type annotation by appending a variable with a colon (~~:~~) and the type (e.g., ~~number~~, ~~string~~, or ~~any~~).

```ts {numberLines}
let language: string

language = "English"

language = 1234

// Type 'number' is not assignable to type 'string'.
```

In the code above, we explicitly declare ~~language~~ to be of type ~~string~~ without assigning it an initial value. This enables us to assign it the value ~~English~~ without complaint, but when we later attempt to assign it a numerical value, TypeScript will give us an error message telling us that a number is being improperly assigned to a variable of type ~~string~~.

Note that _type annotations_ get automatically removed when compiled to JavaScript.

---

Go to [Learn TypeScript - Functions](https://hemanta.io/learn-typescript-functions/)
