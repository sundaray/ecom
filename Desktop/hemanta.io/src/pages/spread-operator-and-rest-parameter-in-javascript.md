---
title: "Spread Operator & Rest Parameter in JavaScript"
date: "2021-05-15"
excerpt: "Learn to use the spread operator and the rest parameter."
categories: ["JavaScript"]
---

```toc

```

The spread operator was introduced in ES6. We are going to understand the benefits of this operator by analyzing a few use cases.

Before we straightaway start with examples, we need to be aware of the following JavaScript concepts:

- In JavaScript, all data types, except the primitive data types are objects. Therefore, an array is also an object.
- Objects are copied by reference. In other words, when an object variable is copied, the object itself is not copied; only the reference to that object is copied.

Now, let's get started.

### Copying an array

```js {numberLines, 3}
const carBrand = ["kia", "toyota’, ‘hyundai"]

const carBrandCopy = carBrand

console.log(carBrand) // ["kia", "toyota", "hyundai"]

console.log(carBrandCopy) // ["kia", "toyota", "hyundai"]
```

On line 3, we have created a copy of the ~~carBrand~~ array. The problem in creating a copy of an array with this approach is that any changes made to the original array will reflect in the copy of the array as well. This is because objects in JavaScript are copied by reference.

Let’s prove this by pushing a new element to the ~~carBrand~~ array.

```js {numberLines}
const carBrand = ["kia", "toyota", "hyundai"]

const carBrandCopy = carBrand

carBrand.push("honda")

console.log(carBrand) // ["kia", "toyota", "hyundai", "honda"]

console.log(carBrandCopy) // ["kia", "toyota", "hyundai", "honda"]
```

As you can see above, we have the ~~honda~~ element in both ~~carBrand~~ and ~~carBrandCopy~~ arrays.

Creating a copy with spread operator however solves this problem. Let’s take a look at an example.

```js {numberLines, 3}
const carBrand = ["kia", "toyota", "hyundai"]

const carBrandCopy = [...carBrand]

carBrand.push("honda")

console.log(carBrand) // ["kia", "toyota", "hyundai", "honda"]

console.log(carBrandCopy) // ["kia", "toyota", "hyundai"]
```

On line 3, we have used the spread operator syntax: three dots followed by the name of the array we want to extract the elements from.

### Combining arrays

We can combine two arrays by concatenating them to an empty array. Take a look at the code snippet below:

```js {numberLines}
const modelsOne = ["corolla", "yaris", "camry"]

const modelsTwo = ["vellfire", "glanza"]

const modelsCombined = [].concat(modelsOne, modelsTwo)

console.log(modelsCombined) // ["corolla", "yaris", "camry", "vellfire", "glanza"];
```

Now If we need to insert new elements at the start, end or in between the arrays then we will have to use the ~~push~~ method. Take a look at the code sample below:

```js {numberLines}
const modelsOne = ["corolla", "yaris", "camry"]

const modelsTwo = ["vellfire", "glanza"]

modelsOne.push("crysta")

const modelsCombined = [].concat(modelsOne, modelsTwo)

console.log(modelsCombined) // ["corolla", "yaris", "camry", "crysta", "vellfire", "glanza"];
```

With spread operator, we can combine arrays with a more concise syntax though. Take a look:

```js {numberLines}
const modelsOne = ["corolla", "yaris", "camry"]

const modelsTwo = ["vellfire", "glanza"]

const modelsCombined = [...modelsOne, ...modelsTwo]

console.log(modelsCombined) // ["corolla", "yaris", "camry", "vellfire", "glanza"];
```

We can also easily add new elements at the start, at the end or in between the arrays we are combining by simply adding the elements in the desired position and adding a comma after them. Consider the following:

```js {numberLines}
const modelsOne = ["corolla", "yaris", "camry"]

const modelsTwo = ["vellfire", "glanza"]

const modelsCombined = ["innova", ...modelsOne, "crysta", ...modelsTwo]

console.log(modelsCombined) // ["innova", "corolla", "yaris", "camry", "crysta", "vellfire", "glanza"];
```

Above, we have added ~~innova~~ and ~~crysta~~ elements to the array without much hassle.

### Passing an array as an argument to a function

```js {numberLines}
function sum(x, y, z) {
  const sum = x + y + z
  console.log(sum)
}
```

Above, we have a function named sum that takes in three numbers as parameters and logs their sum to the console.

```js {numberLines}
const nums = [12, 34, 68]
```

Above we have three numbers in the ~~nums~~ array. If we need to pass these numbers as arguments to the ~~sum~~ function, then we will have to pass each number using the bracket notation and its respective index number like the following:

```js {numberLines}
const result = sum(nums[0], nums[1], nums[2])

console.log(result) //114
```

As you can see, it’s cumbersome and not at all efficient. With spread operatior, things become much more easier. All we need is three dots and the name of the array inside the parentheses.

```js {numberLines}
const result = sum(...nums)

console.log(result) //114
```

~~...nums~~ will extract the elements from the ~~nums~~ array into the parentheses as function arguments.

### Rest parameter

The rest parameter syntax allows functions to accept an indefinite number of arguments as an array.

The ~~...restParam~~ bundles all the extra parameters into a single array.

A function definition can have only one ~~...restParam~~.

The rest parameter must be the last parameter in the function definition.

```js {numberLines}
function rest(a, b, ...moreArgs) {
  console.log(‘a:’, a);
  console.log(‘b:’, b);
  console.log(‘moreArgs:’, moreArgs);
}

rest(1, 2, 3, 4, 5);

// Console output:
// a: 1
// b: 2
// moreArgs: [3, 4, 5]
```
