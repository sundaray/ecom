---
title: "Advanced Array Destructuring in JavaScript"
date: "2021-06-30"
excerpt: "Learn how to destructure from a function that returns an array of elements."
categories: ["JavaScript"]
---

###### If you are new to the concept of array destructuring in JavaScript, check out my blog post [here](https://hemanta.io/how-to-use-destructuring-with-arrays-and-objects-in-javascript/).

Below, we have a function named ~~welcome~~.

```js {numberLines}
const welcome = () => {
  return `Welcome!`
}
```

We have another function named ~~user~~ **that returns an array** with two elements: the first element is the user id and the second element is the ~~welcome~~ function that we defined above.

```js {numberLines}
const user = () => {
  return [1, welcome]
}
```

Now, let's call the ~~user~~ function and save the returned result in a variable named ~~data~~.

```js {numberLines}
const data = user()

console.log(data)
// [1, welcome]
```

Can we destructure the data variable?

The answer is: yes, we can.

```js {numberLines}
const [id, greeting] = user()

console.log(id)
// 1

console.log(greeting())
// Welcome!
```

In React, when you use the ~~useState~~ hook, you would come across the array destructuring concept that we discussed above.

The ~~useState~~ hook returns an array with two elements: the current state and a function to update the state. In the example below, we use array destructuring to hold the state in a variable named ~~count~~ and the function to update the state in a variable named ~~setCounter~~.

```jsx {numberLines, 2}
const Counter = () => {
  const [count, setCount] = useState(0)

  return <p>The initial count is {count}.</p>
}
```
