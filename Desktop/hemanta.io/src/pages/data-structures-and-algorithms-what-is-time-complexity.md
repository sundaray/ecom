---
title: "Data Structures & Algorithms: What is Time Complexity?"
date: "2021-07-17"
excerpt: "Measuring the performance of programs"
categories: ["JavaScript-Data Structures & Algorithms"]
---

```toc

```

### Data

Data is a broad term that refers to all types of information. The string ~~hemanta~~ is a piece of data. The number ~~26~~ is also a piece of data. In fact, most complex pieces of data are nothing but a combination of strings and numbers.

### Data structure

Data structure refers to how data (_information_) is organized.
Look at the code snippet below:

```js {numberLines}
const firstName = "hemanta"
const lastName = "sundaray"

console.log(`${firstName} ${lastName}`)
// hemanta sundaray
```

We have written a program that stores two pieces of data in two variables and outputs a single piece of data.
We can also choose to store the same data as elements of an array:

```js {numberLines}
const person = ["hemanta", "sundaray"]

console.log(`${person[0]} ${person[1]}`)
// hemanta sundaray
```

As you can see, data can be organized in various ways. The reason we must pay careful attention to data organization is because it can have a significant impact on how fast our program runs.

### Measuring fastness of programs

When we say ~~fast~~, we don’t refer to how fast a program runs in terms of pure time. Instead, we refer to how many steps a program takes.

**Why do we measure the performance of programs in terms of steps, not time?**

Because, time can vary depending on the hardware a program runs on. For example, a program that takes 2 seconds to run on a regular desktop computer can take a fraction of a millisecond on a supercomputer.

However, when we measure the performance of a program in terms of how many steps it takes, and we find out, for example, that program A takes 5 steps in comparison to another program B that takes 500 steps to find the solution, we can say that program A will always be faster than program B irrespective of the hardware.
This is the reason why we measure the performance of programs in terms of steps, not in terms of time.

### Time complexity

This measurement of performance of a piece of code is what is known as **time complexity**. You will also come across people using the term ~~runtime complexity~~. They both refer to the same thing – the number of steps a program or an operation takes.
