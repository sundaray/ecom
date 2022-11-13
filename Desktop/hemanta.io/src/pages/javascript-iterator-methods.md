---
title: "JavaScript Array Iterator Methods"
date: "2021-05-15"
excerpt: "A list of frequently used JavaScript array iterator methods including examples of their usage."
categories: ["JavaScript"]
---

```toc

```

JavaScript array iterator methods accept a function as their first argument and invoke that function once for each element (_or some elements_) of the array.

### Predicate Function

In this post you will come across a term called **predicate function**, which is defined as a function that either returns true or false.

### forEach

- ~~forEach()~~ method modifies the original array.
- The function you pass as the argument to ~~forEach()~~ method takes in three arguments: **value of the array element**, the **index of the array element** and **the array itself**. Most often, you will need only one argument - the value of the array element.

```js {numberLines}
let nums = [1, 2, 3, 4],
  sum = 0

nums.forEach(num => (sum += num))

console.log(sum) // 10
```

```js {numberLines}
let nums = [1, 2, 3, 4],

nums.forEach((v, i, a) => a[i] = v + 1);

console.log(nums) // [2, 3, 4, 5]
```

### map

- The ~~map~~ method does not modify the original array it is invoked on; it returns a new array.

```js {numberLines}
let nums = [1, 2, 3, 4]

const newNums = nums.map(num => num * num)

console.log(newNums) // [1, 4, 9, 16]
```

The callback also takes an optional index (_the index of the current element being processed in the array_) argument.

```js {numberLines}
let nums = [1, 2, 3, 4]

const newNums = nums.map((num, index) => num * index)

console.log(newNums) // [0, 2, 6, 12]
```

### filter

- The ~~filter()~~ method returns an array containing a subset of the elements of the array on which it is invoked.
- The function passed to a ~~filter()~~ method should return true or false.

```js {numberLines}
let nums = [1, 2, 3, 4]

const newNums = nums.filter(num => num < 3)

console.log(newNums) // [1, 2]
```

### every & some

- The ~~every()~~ and ~~some()~~ methods apply a specified predicate function to the elements of the array, then return true or false.
- The ~~every()~~ method returns true if and only if the predicate function returns true for all elements in the array.
- The ~~some()~~ method returns true if there exists at least one element in the array for which the predicate returns true and returns false if and only if the predicate returns false for all elements of the array.

```js {numberLines}
let nums = [1, 2, 3, 4]

const newNums = nums.every(num => num < 10)

console.log(newNums) // true
```

```js {numberLines}
let nums = [1, 2, 3, 4]

const newNums = nums.some(num => num > 10)

console.log(newNums) // false
```

### find & findIndex

- The ~~find()~~ and ~~findIndex()~~ methods stop iterating the first time the predicate finds an element. When that happens, ~~find()~~ returns the matching element, and ~~findIndex()~~ returns the index of the matching element.
- If no matching element is found, ~~find()~~ returns undefined and ~~findIndex()~~ returns -1.

```js {numberLines}
let name = ["keith", "lemon", "keith", "lemon"]

const nameIndex = name.findIndex(name => name === "lemon")

console.log(nameIndex) // 1
```

```js {numberLines}
let name = ["keith", "lemon", "keith", "lemon"]

const nameFound = name.find(name => name.length === 5)

console.log(nameFound) // keith
```

### reduce

- ~~reduce()~~ combines the elements of an array to produce a single value, using a specified function.
- ~~reduce()~~ takes two arguments. The first is the callback function that takes two parameters (**accumulator**, **currentValue**) as arguments.
- On each iteration, **accumulator** is the value returned by the last iteration, and the **currentValue** is the current element. The second argument (_optional_) is an initial value passed to the function.

```js {numberLines}
let nums = [1, 2, 3, 4, 5]

const newNums = nums.reduce((x, y) => x + y)

console.log(newNums) // 15
```

```js {numberLines}
let nums = [1, 2, 3, 4, 5]
// The second argument is 100.
const newNums = nums.reduce((x, y) => x + y, 100)

console.log(newNums) // 115
```
