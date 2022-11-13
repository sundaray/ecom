---
title: "Useful Lodash Methods"
date: "2021-06-27"
excerpt: "range(), slice() & take()"
---

```toc

```

### Range

```sh
_.range(start, end, step)
```

Creates an array of numbers progressing from start **up to, but not including**, end.

#### Arguments

- **start** (number): The start of the range.

- **end** (number) : The end of the range

- **step** (number): The value to increment or decrement by.

#### Example

```js {numberLines}
_.range(5)

// [0, 1, 2, 3, 4]

_.range(1, 5)

// [1, 2, 3, 4]
```

### Slice

```sh
_.slice(array, start, end)
```

Creates a slice of array from start **up to, but not including**, end.

#### Arguments

- **array** (Array): The array to slice
- **start** (number) : The start position
- **end** (number): The end position

### Take

```sh
_.take(array, number);
```

Creates a slice of array with n elements taken from the beginning.

#### Arguments

- **array** (Array): The array to query
- **number** (number): The no. of elements to take

#### Example

```js {numberLines}
_.take([1, 2, 3])
// [1]

_.take([1, 2, 3], 2)
// [1, 2]
```
