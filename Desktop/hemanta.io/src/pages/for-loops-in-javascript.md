---
title: "For Loops in JavaScript"
date: "2021-06-02"
excerpt: "for, for...of, for...in"
categories: ["JavaScript"]
---

```toc

```

## for

A for loop repeats until a specified condition evaluates to false.

### Syntax

```sh
for ([initialization]; [condition]; [final-expression]) {
    statement
}
```

**Initialization**: Typically used to initialize a counter variable.

**Condition**: An expression to be evaluated before each loop iteration.

**Final-expression**: Generally used to increment the counter variable.

```js {numberLines}
for (let i = 0; i < 5; i++) {
  console.log(i)
}
```

```sh
// output
0
1
2
3
4
```

## for...each

The ~~for...each~~ method executes a provided function once for each array element.

### Syntax

```sh
// Arrow function

forEach((element) => { ... } )

forEach((element, index) => { ... } )

forEach((element, index, array) => { ... } )
```

**element**: The current element being processed in the array

**index**(_optional_): The index of the element in the array.

**array**(_optional_): The array ~~for...each~~ was called upon.

```js {numberLines}
const team = ["Sam", "Alex", "Cathy"]

team.forEach(teamMember => console.log(`Hello ${teamMember}`))
```

```sh
// output

Hello Sam
Hello Alex
Hello Cathy
```

```js {numberLines}
const nums = ["10", "20", "30"]

nums.forEach((num, index, arr) => (arr[index] = num * 2))

console.log(nums)
```

```sh
// output

[ 20, 40, 60 ]
```

## for...in

Used to loop through the properties of an object.(_It iterates through the properties in an arbitrary order_.)

**Don’t use ~~for...in~~ loop to iterate over an Array where the index order is important**.

### Syntax

```sh
for (variable in object) {
   statement
}
```

```js {numberLines}
const object = {
  firstName: "Hemanta",
  lastName: "Sundaray",
}

for (key in object) {
  console.log(`${object[key]}`)
}
```

```sh
// output

Hemanta
Sundaray
```

## for...of

Used to loop over iterable objects. (Arrays, strings, Maps, Sets etc.).

### Syntax

```sh
for (variable of iterable) {
   statement
}
```

### Iterating over an array

```js {numberLines}
const numbers = [10, 20, 30]

for (const number of numbers) {
  console.log(number * 2)
}
```

```sh
//outout

20
40
50
```

### Iterating over a string

```js {numberLines}
const lastName = "sundaray"

let fullName = "Hemanta "

for (letter of lastName) {
  fullName += letter
}

console.log(fullName)
```

```sh
//output

Hemanta Sundaray
```
