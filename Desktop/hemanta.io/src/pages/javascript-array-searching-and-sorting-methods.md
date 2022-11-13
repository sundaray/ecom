---
title: "JavaScript Array Searching & Sorting Methods"
date: "2021-05-15"
excerpt: "Learn to use indexOf, lastIndexOf, sort and reverse."
categories: ["JavaScript"]
---

```toc

```

### indexOf & lastIndexOf

- Search an array for the specified element & return the index of the first such element found.
- If no element is found, -1 is returned.
- Take an optional second argument that specifies the array index at which to begin the search. If the second argument is omitted, ~~indexOf()~~ searches the array from the beginning to the end & ~~lastIndexOf()~~ searches the array from the end to the beginning.

```js {numberLines}
let name = ["hemanta", "kumar", "sundaray", "kumar", "hemanta"]

console.log(name.indexOf("kumar")) // => 1

console.log(name.lastIndexOf("kumar")) // => 3
```

### sort

- Sorts the elements of an array in place and returns the sorted array.
- When no argument is passed, the method sorts the elements in alphabetical order.

```js {numberLines}
let alphabets = ["c", "b", "a"]

alphabets.sort()

console.log(alphabets) // => ["a", "b", "c"]
```

### reverse

- Reverses the order of the elements of an array in place and returns the reversed array.

```js {numberLines}
let name = ["hemanta", "kumar", "sundaray"]

name.reverse()

console.log(name) // => ["sundaray", "kumar", "hemanta"]
```
