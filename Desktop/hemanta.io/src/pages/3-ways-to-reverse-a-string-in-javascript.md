---
title: "3 Ways to Reverse a String in JavaScript"
date: "2021-07-13"
excerpt: "Learn how to reverse a string in JavaScript"
categories: ["JavaScript-Data Structures & Algorithms"]
---

```toc

```

## Method-1

```js {numberLines}
const reversed = str => {
  return str.split("").reverse().join("")
}

console.log(reversed("hemanta"))

// atnameh
```

### String.split()

#### Syntax

```sh
split()

split(separator)
```

The ~~split()~~ method returns an array of strings, split at each point where the separator occurs in the given string. If the separator is an empty string (~~" "~~), str is converted to an array of its characters.

### Array.reverse()

The ~~reverse()~~ method reverses an array in place. The first array element becomes the last, and the last array element becomes the first. The ~~reverse()~~ method changes the original array.

```js {numberLines}
const person = ["hemanta", "kumar", "sundaray"]

console.log(person.reverse())

// ["sundaray", "kumar", "hemanta"]
```

### Array.join()

The ~~join()~~ method creates and returns a new string by concatentaing all of the elements in an array, separated by a specified separator string.

If the separator is an empty string, all elements are joined without any characters in between them.

## Method-2

Using for loop:

```js {numberLines}
const reversed = str => {
  let reversedString = " "

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i]
  }

  return reversedString
}

console.log(reversed("hemanta"))

// atnameh
```

###### Find more about different for loops in JavaScript in my blog post [here](https://hemanta.io/for-loops-in-javascript/).

## Method-3

Using the JavaScript ~~reducer~~ method:

```js {numberLines}
const reversed = str => {
  const strArray = str.split("")

  return strArray.reduce(
    (accumulator, currentCharacter) => currentCharacter + accumulator,
    " "
  )
}

console.log(reversed("hemanta"))

// atnameh
```

###### Find out more about JavaScript array iterator methods in my blog post [here](https://hemanta.io/javascript-iterator-methods/)
