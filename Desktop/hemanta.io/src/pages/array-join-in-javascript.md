---
title: "Array.join() in JavaScript"
date: "2021-09-21"
excerpt: "Concatenate the elements of an array with a specified separator string."
categories: ["JavaScript"]
---

When we render an array to a web page, the array gets automatically converted to a string. JavaScript automatically invokes the ~~toString()~~ method of the array which returns a string of the array elements separated by commas. Here is how it works:

```js {numberLines}
const frameworks = ["Angular", "React", "Vue"]

console.log(frameworks.toString())
// Angular,React,Vue
```

If we need to customize the separator string that gets inserted between the array elements, then we can use the ~~join()~~ method.

The ~~join()~~ method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.

```js {numberLines}
const frameworks = ["Angular", "React", "Vue"]

console.log(frameworks.join("-"))
// Angular-React-Vue

console.log(frameworks.join(">"))
// Angular>React>Vue
```
