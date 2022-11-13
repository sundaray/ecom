---
title: "Array.from() in JavaScript"
date: "2021-06-02"
excerpt: "Learn the arrow.from() static method "
categories: ["JavaScript"]
---

~~Array.from()~~ lets you create arrays from:

- array like objects; or
- iterable objects (objects such as ~~Map~~ & ~~Set~~)

~~Array.from()~~ has an optional parameter ~~mapFn~~, which allows you to execute a ~~map()~~ function on each element of the array being created.

It returns a new Array instance.

```js
console.log(Array.from("Hemanta"))
```

```sh
// output
[
'H', 'e', 'm','a', 'n', 't', 'a'
]
```

```js
console.log(Array.from([10, 20, 30], num => num * 10))
```

```sh
// output
[ 100, 200, 300 ]
```
