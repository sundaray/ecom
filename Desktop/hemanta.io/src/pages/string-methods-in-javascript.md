---
title: "String Methods in JavaScript"
date: "2021-09-21"
excerpt: "trim(), startsWith(), endsWith(), includes()"
categories: ["JavaScript"]
---

```toc

```

### trim()

The ~~trim()~~ method removes all leading (at the beginning) and trailing (at the end) space characters.

```js {numberLines}
const name = "Hemanta    "

console.log(name.trim())
// "Hemanta"
```

### startWith() & endsWith( )

The ~~.startsWith(substring)~~ method returns ~~true~~ when the substring is found at the beginning of the string, and ~~false~~ otherwise.

The ~~.endsWith(substring)~~ works the same but for the _end_ of the string.

```js {numberLines}
const greeting = "Hello World! I am learning React!"

console.log(greeting.startsWith("hello"))
// false

console.log(greeting.startsWith("Hello"))
// true

console.log(greeting.endsWith("!"))
// true

console.log(greeting.endsWith("Hello"))
// false
```

### includes()

The ~~.includes(substring)~~ method returns ~~true~~ when the substring can be found anywhere in the string, and ~~false~~ otherwise.

```js {numberLines}
const greeting = "Hello World! I am learning React!"

console.log(greeting.includes("Worl"))
// true

console.log(greeting.includes("!"))
// true

console.log(greeting.includes("Preact"))
// false
```

### split()

The ~~.split(separator)~~ method divides the string into an array by splitting it with the ~~separator~~ you provide. For example:

```js {numberLines}
const audio = "Sony, Sennheiser, AKG"

const audioArray = audio.split(",")

console.log(audioArray)
// [ 'Sony', ' Sennheiser', ' AKG' ]
```

> Note that the opposite of ~~String.split(separator)~~ is [Array.join(glue)](https://hemanta.io/array-join-in-javascript/) method.

### replace()

The ~~.replace(search, replace)~~ method returns a new string where the first occurence of the ~~search~~ parameter you provide is replaced by the ~~replace~~ parameter.

```js {numberLines}
const greeting = "Hello World! I am loving React!"

const newGreeting = greeting.replace("!", ".")

console.log(greeting)
// Hello World! I am loving React!

console.log(newGreeting)
// Hello World. I am loving React!
```

> Note that the ~~replace()~~ method only replaces the first match.
