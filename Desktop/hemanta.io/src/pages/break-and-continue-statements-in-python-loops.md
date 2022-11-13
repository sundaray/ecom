---
title: "break & continue Statements in Python"
date: "2021-08-28"
excerpt: "break & continue inside for and while loops."
categories: ["Python"]
---

```toc

```

We can use ~~break~~ and ~~continue~~ statements in both ~~for~~ and ~~while~~ loops.

### break

The ~~break~~ statement breaks out of the loop entirely.

```py {numberLines}
for number in range(10):
    if number == 6 :
        break
    print(number, end = " ")

# output
# 0 1 2 3 4 5
```

### continue

The ~~continue~~ statement skips the remainder of the current loop and goes to the next iteration.

Below, we use the ~~continue~~ statement to print a string of _even_ numbers.

```py {numberLines}
for number in range(10):
    if number % 2 == 0:
        continue
    print(number, end = " ")

# output
# 1 3 5 7 9
```
