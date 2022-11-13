---
title: "How to Capitalize the First Letter of Each Word in a Sentence in JavaScript?"
date: "2021-07-16"
excerpt: "Using String.split(), Array.join() & Array.map()"
categories: ["JavaScript-Data Structures & Algorithms"]
---

### Problem statement

Write a function that accepts a string, capitalizes the first letter of each word in the string and returns it.

#### Example:

```js {numberLines}
capitalize("my first sentence")
// My First Sentence

capitalize("hemanta sundaray")
// Hemanta Sundaray
```

### Solution

```js {numberLines}
const capitalize = str => {
  const strArray = str.split(" ")

  const strCapitalized = strArray.map(element => {
    const firstChar = element[0].toUpperCase()
    const remainingChars = element.slice(1)
    return `${firstChar}${remainingChars}`
  })

  return strCapitalized.join(" ")
}

console.log(capitalize("React query is cool"))
// React Query Is Cool
```

###### Learn about String.split() & Array.join() in my blog post [here](https://hemanta.io/3-ways-to-reverse-a-string-in-javascript/)

###### Learn about JavaScript iterator methods in my blog post [here](https://hemanta.io/javascript-iterator-methods/)

###### Learn about JavaScript subarrays with slice() & splice() in my blog post [here](https://hemanta.io/javascript-subarrays-with-slice-and-splice/)

###### Learn about template literals in my blog post [here](https://hemanta.io/template-literals-in-javascript/)
