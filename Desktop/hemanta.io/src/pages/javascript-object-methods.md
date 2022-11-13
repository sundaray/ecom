---
title: "JavaScript Object Methods"
date: "2021-07-02"
excerpt: "Object.keys(), Object.values() & Object.entries()"
categories: ["JavaScript"]
---

```toc

```

### Object.keys

Returns an array whose elements are strings corresponding to the enumerable properties of the object.

```js {numberLines}
const person = {
  firstName: "Hemanta",
  lastName: "Sundaray",
  occupation: "developer",
  location: "New Delhi",
}

console.log(Object.keys(person))
// [ 'firstName', 'lastName', 'occupation', 'location' ]
```

### Object.values

Returns an array whose elements are the enumerable property values found on the object.

```js {numberLines}
const person = {
  firstName: "Hemanta",
  lastName: "Sundaray",
  occupation: "developer",
  location: "New Delhi",
}

console.log(Object.values(person))
// [ 'Hemanta', 'Sundaray', 'developer', 'New Delhi' ]
```

### Object.entries

Returns an array whose elements are arrays corresponding to the enumerable ~~[key, value]~~ pairs found on the object.

```js {numberLines}
const person = {
  firstName: "Hemanta",
  lastName: "Sundaray",
  occupation: "developer",
  location: "New Delhi",
}

console.log(Object.entries(person))
// [
//   [ 'firstName', 'Hemanta' ],
//   [ 'lastName', 'Sundaray' ],
//   [ 'occupation', 'developer' ],
//   [ 'location', 'New Delhi' ]
// ]
```
