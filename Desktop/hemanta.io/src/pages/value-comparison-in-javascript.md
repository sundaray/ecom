---
title: "Value Comparison in JavaScript"
date: "2021-07-20"
excerpt: "Using Object.is(a, b), strict equality comparison (===) & loose equality comparison(==)."
categories: ["JavaScript"]
---

```toc

```

For comparing values, JavaScript provides three operations:

- **Object.is(a, b)**
- **Strict equality comparison (===)** &
- **Loose equality comparison (==)**

### Object.is(a, b)

~~Object.is(a, b)~~ tells us if ~~a~~ & ~~b~~ are the same value:

```js {numberLines}
console.log(Object.is(2, 2)) // true

console.log(Object.is({}, {})) // false
```

> ~~Object.is()~~ is not specific to objects. It can compare any two values.

> ~~{}~~ always means **create a new object value**.

### Strict equality (===)

Triple equals comparison (~~===~~) has the same behavior as ~~Object.is()~~ except the following two special cases:

#### First special case

> ~~Nan === NaN~~ is ~~false~~, although they are the same value.

The reason ~~NaN === NaN~~ being ~~false~~ is largely historical.

#### Second special case

> ~~-0 === 0~~ & ~~0 === -0~~ are ~~true~~, although they are different values.

Floating point zero is either positively or negatively signed. This is useful in representing certain mathematical solutions, but as most situations don’t care about the difference between ~~-0~~ & ~~+0~~, strict equality treats them as the same value.

### Loose equality (==)

Loose equality compares two values for equality after converting both values to a common type. After conversion, (_one or both sides may undergo conversions_), the final equality comparison is performed exactly as ~~===~~ performs it.

However, in most cases, using loose equality is discouraged. The result of a comparison using strict equality is easier to predict and may evaluate more quickly due to lack of type coercion.
