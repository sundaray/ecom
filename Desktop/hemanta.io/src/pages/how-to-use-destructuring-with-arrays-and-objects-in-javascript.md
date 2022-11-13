---
title: "How to Use Destructuring With Arrays & Objects in JavaScript?"
date: "2021-05-21"
excerpt: "Learn to unpack values from arrays & properties from objects into distinct variables using the destructuring assignment syntax. "
categories: ["JavaScript"]
---

```toc

```

Destructuring, introduced in ES6 (_6th edition of the ECMAScript standard_) helps extract values from arrays or properties from objects into distinct variables.

### Destructuring with arrays

Let’s start with an example:

```js {numberLines}
const name = ["hemanta", "kumar", "sundaray"]
```

We have an array saved to the ~~name~~ variable. We know that each element in an array has an ordered position known as its index and if we want to access, let’s say, the first and second element in the name array, we can do so using the bracket notation and the index numbers of those elements as shown below:

```js {numberLines}
// Arrays are zero-indexed: the position of the elements starts from zero.
console.log(name[0]) // hemanta

console.log(name[1]) // kumar
```

With destructuring however we have a much more concise syntax.

```js {numberLines}
const [firstName, middleName] = name

console.log(firstName) // hemanta

console.log(middleName) // kumar
```

We save the elements we want to access with variable names inside square brackets. The variable names are up to us. As you can see, we don’t have to declare multiple variables and we have to use the name variable only once.

Let’s say that we don’t want to access the second element in the array. Instead, we only need the first and the last element. In such a case, all we need to do is to place a comma in place of the second element as shown in the code below:

```js {numberLines}
// place a comma in place of the second element
const [firstName, , lastName] = name;

console.log(firstName lastName); // hemanta sundaray
```

### Destructuring with Objects

Let's start with an example.

```js {numberLines}
const motorcycle = {
  brand: "ducati",
  model: "multistrada",
  type: "tourer",
}
```

If we want to access the ~~brand~~ and ~~model~~ properties of the ~~motorcycle~~ object, we can do so using the dot notation.

```js {numberLines}
console.log(motorcycle.brand) // ducati

console.log(motorcycle.model) // multistrada
```

With the use of destructuring, we have to use the following syntax.

```js {numberLines}
const { brand, model } = motorcycle

console.log(brand) // ducati

console.log(model) // multistrada
```

With destructuring with arrays, we use square brackets; however, with objects we use curly braces. The properties you need to extract from the object go inside the curly braces. And more importantly, the names of the properties inside the curly braces must exactly match the property names defined inside the object. Otherwise, you get ~~undefined~~.

If we use, for example, a variable name called ~~company~~ to access the ~~brand~~ property , we will get ~~undefined~~ as the result. Take a look at the code snippet below:

```js
const {company, model} = motorcycle;

console.log(company model);  // undefined multistrada
```

Another point to note is that while unpacking property names from an object, we don’t need to maintain the order of the properties inside the object. So, we can access the type property first, the model property last inside the curly braces and we will get the results without any error.

```js {numberLines}
const {type, brand, model} = motorcycle;

console.log(type brand model); // tourer ducati multistrada
```

#### Renaming a key

We can also rename an unpacked property as shown below:

```js {numberLines}
const { brand: marque } = motorcycle
```

Above, we have renamed the ~~brand~~ property to ~~marque~~. And when we console log ~~marque~~, we get ~~ducati~~.

### Destructuring of objects within functions

```js {numberLines, 6}
const aboutBike = bike => {
  const { brand, model, type } = bike
  console.log(`I am a ${brand} ${model} ${type}`)
}

aboutBike(motorcycle) // I am a Ducati multistrada  tourer
```

Above, we have an arrow function which takes in a ~~bike~~ object as its parameter. And then inside the function, we have used destructuring to extract the ~~brand~~, ~~model~~ and ~~type~~ properties from the ~~bike~~ object.

On line 6, we have invoked/called the ~~aboutBike~~ function with ~~motorcycle~~ object as the argument and we get ~~I am a Ducati multistrada tourer~~. The code works fine. No problem at all.

However, we can write the above function in a more compact way as shown below:

```js {numberLines}
const aboutBike = {brand, model, type}  => {
  console.log(`I am a ${brand} ${model} ${type}`);
}

 aboutBike(motorcycle); // I am a Ducati multistrada tourer
```

Here we have destructured the ~~motorcycle~~ object in place of the ~~bike~~ parameter and clearly it’s more concise than the previous syntax.
