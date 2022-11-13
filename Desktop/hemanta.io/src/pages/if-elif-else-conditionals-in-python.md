---
title: "if-elif-else conditionals in Python"
date: "2021-09-07"
excerpt: "Learn to execute different blocks of code conditionally based on user-defined logic."
categories: ["Python"]
---

Using ~~if-elif-else~~, we can execute different blocks of code conditionally based on some user-defined logic.

The general syntax is as follows:

```py {numberLines}
if <conditional check 1 is True>: # the if conditional is mandatory
	<code block 1> # executed only when check 1 evaluates to True
elif <conditional check 2 is True>: # the elif conditional is optional
	<code block 2> # executed only when check 1 is False and check 2 is True.
else:
	<code block 3> # executed only when check 1 & check 2 are False.
```

> Note that only the ~~if~~ statement is mandatory. ~~elif~~ and ~~else~~ statements are conditional.

**Example:**

```py {numberLines}
score = 90

if score > 90:
    print("Grade A")
elif score > 80 and score <=90:
    print("Grade B")
else:
    print("Grade C")

# Output
# Grade B
```
