---
title: "JavaScript Subarrays With Slice & Splice"
date: "2021-05-21"
excerpt: "Learn to use slice and splice"
categories: ["JavaScript"]
---

### Slice

- Returns an array that contains the element specified by the first argument & all subsequent elements up to, **but not including**, the element specified by the second argument.
- **Doesn’t modify** the array on which it is invoked.

```js {numberLines}
let nums = [1, 4, 16, 64, 256]

let subNums = nums.slice(1, 3)

console.log(subNums) // =>  [4, 16]
```

### Splice

- Deletes, inserts or does both operations at the same time.
- **Modifies** the array on which it is invoked.
- Returns an empty array if no elements were deleted.
- The first argument specifies the position in the array where the insertion and/or deletion is to begin. The second argument specifies the number of elements that should be deleted from the array.
- If the second argument is omitted, all elements starting from the start element to the end of the array are deleted.
- The first two arguments may be followed by any number of additional arguments that specify elements to be inserted into the array, starting at the position specified by the first argument.

```js {numberLines}
let nums = [1, 4, 16, 64, 256]

let subNums = nums.splice(1, 2)

console.log(nums) // => [1, 64, 256]

console.log(subNums) // => [4, 16]
```

```js {numberLines}
let tech = ["html", "css", "JavaScript", "python"]

// the 3rd argument will be inserted into the array
let subTech = tech.splice(3, 1, "React")

console.log(tech) // => ['html', 'css', 'JavaScript', 'React];

console.log(subTech) // => ['python'];
```
