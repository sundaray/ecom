---
title: "JavaScript Objects - Destructured Assignment"
date: "2022-05-04"
excerpt: "Destructured assignment"
categories: ["JavaScript"]
---

We often want to extract key-value pairs from objects and save them as variables.
Consider the following object for example:

```js {numberLines}
const area52 = {
  classified: true,
  location: "Nevada",
}
```

If we wanted to extract the ~~location~~ property as a variable, we could use the following code:

```js {numberLines}
const location = area52.location

console.log(location)
// Nevada
```

However, we can also take advantage of a destructuring technique called **destructured assignment**.

In destructured assignment, we create a variable with the name of an object’s key wrapped in curly braces ~~{ }~~ and assign to it the object.

Take a look at the example below:

```js {numberLines}
const { location } = area52

console.log(location)
// Nevada
```

In the example above, we declare a new variable ~~location~~ that extracts the value of the ~~location~~ property of ~~area52~~. When we log the value of ~~location~~ to console, ~~Nevada~~ is printed.
