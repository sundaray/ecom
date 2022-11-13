---
title: "Declarative vs Imperative Programming"
date: "2021-07-21"
excerpt: "Understand the difference between two important programming paradigms."
categories: ["Programming"]
---

```toc

```

### Declarative programming - what to do

In declarative programming, you describe the desired result you want without explicitly listing all the steps that must be performed.

### Imperative programming - how to do

In imperative programming, you describe each of the steps that must be performed to get the desired result.

### Real life analogy

The concept of declarative and imperative programming is easy to understand with an analogy from real life.

Let’s say we meet on the street and you ask me the address of the nearest Domino's Pizza.

I have two options:

- **(a)** I can say, the address of Dominos Pizza is: shop no. 102, first floor, Millennium mall. I just give you the address and you have to figure out how to get there.
- **(b)** Or, I can say: go straight for 500 meters, take the first right, go for another 200 meters and you will see the Millenium mall on the left hand side. Enter the mall and you will find Domino's Pizza on the first floor. Here, I give you step-by-step instructions on how you can get to Domino’s pizza.

Above, option ~~a~~ would be the declarative approach, and option ~~b~~ would be the imperative approach.

Let’s consider another example:

Let’s write two programs that identify elements that are greater than 10 from an array and then return an array with those elements.

### Program-1

```js {numberLines}
const nums = [5, 25, 100, 300]

const greaterThanTen = () => {
  const array = []

  for (const number of nums) {
    if (number > 10) {
      array.push(number)
    }
  }

  return array
}

console.log(greaterThanTen(nums))
// [25, 100, 300]
```

### Program-2

```js {numberLines}
const nums = [5, 25, 100, 300]

const filteredArray = nums.filter(number => number > 10)

console.log(filteredArray)
// [25, 100, 300]
```

As you can see, in program 1, we have explicitly given a set of instructions (_a set of of control flow statements_) to get the desired result. This is an example of imperative programming where we instruct our program **how to do** something.

On the contrary, in program-2, we achieved the desired result in just one line of code using the built-in ~~Array.filter()~~ method. This is an example of declarative programming, where we instruct our program **what to do** - we don’t bother ourselves with step-by-step instructions. The steps are abstracted away from us.
