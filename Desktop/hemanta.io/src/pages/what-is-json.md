---
title: "What is JSON?"
date: "2021-05-21"
excerpt: "Learn to use JSON.stringify() & JSON.parse()"
---

### JSON

When exchanging data between client and server, **the data can only be text**.

JSON, which stands for JavaScript Object Notation is a data format suitable for transporting data to and from a server. JSON is text, written with JavaScript object notation.

A JSON object should be enclosed in curly braces. **JSON names require double quotes, while standard JavaScript objects don't**.

### JSON.stringify()

Converts a JavaScript object to a JSON string.

```js {numberLines}
const person = {
  name: "hemanta",
  age: 32,
}

const personText = JSON.stringify(person)

console.log(personText) // => {"name": "hemanta", "age": 32}

console.log(typeof personText) // => string
```

### JSON.parse()

Parses a JavaScript string and constructs the JavaScript object described by the string.

```js {numberLines}
const person = '{"name": "hemanta", "age": 32}'

const personText = JSON.parse(person)

console.log(personText) // => { name: 'hemanta', age: 32}

console.log(typeof personText) // => object
```
