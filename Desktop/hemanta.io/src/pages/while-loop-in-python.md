---
title: "while Loop in Python"
date: "2021-08-24"
excerpt: "Learn to repeat a task multiple times."
categories: ["Python"]
---

We can repeat a task multiple times using a loop.

~~while~~ loop is one of the two looping mechanisms available in Python.

A ~~while~~ loop iterates until some condition is met.

The argument of the while loop is evaluated as a Boolean statement and the loop is executed until the statement evaluates to ~~False~~.

**Example:**

```py {numberLines}
counter = 0

while counter <=5:
    print(counter, end = " ")
    counter += 1

# 0 1 2 3 4 5
```

Note that a ~~while True~~ loop will loop forever unless we have a ~~break~~ statement.
