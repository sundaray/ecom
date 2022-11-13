---
title: "Reference Equality in Python"
date: "2021-08-24"
excerpt: "Check for reference equality using the is operator in Python."
categories: ["Python"]
---

We can test whether two references refer to the exact same object using the ~~is~~ operator.

```py {numberLines}
numbers = [12, 24, 36]

integers = [12, 24, 36]

print(numbers is integers)
# False

digits = numbers

print(digits is numbers)
# True
```

Even though ~~numbers~~ and ~~integers~~ contain the same values, they refer to two different objects in memory.
