---
title: "Continuation Character in Python"
date: "2021-08-28"
excerpt: "The backslash character"
categories: ["Python"]
---

The readability of your program will suffer if you have code lines that are more than, let’s say 80 characters long.

In such cases, you can use the continuation character (the **_backslash_** character) at the end of a line and Python will act as though you are still on the same line.

**Example:**

```py {numberLines}
addition = 1 + \
           2 + \
           3

print(addition)
# 6
```
