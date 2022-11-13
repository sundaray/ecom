---
title: "Lambda Expressions in Python"
date: "2021-08-18"
excerpt: "Learn to create anonymous functions using the lambda keyword."
categories: ["Python"]
---

In Python, lambda expressions are used to create anonymous functions expressed as a single statement.

**Syntax**

```sh
lambda parameters : expression
```

A lambda has zero or more comma separated arguments followed by a colon and then the definition of the function.

The body of a lambda function can only be pure expressions. (_An expression always resolves to a value._)

Example:

```py {numberLines}
add = lambda a, b : a * b

print(add(10, 10))
# 100
```

~~lambda a, b : a \* b~~ returns the multiplication of its two arguments: ~~a~~ & ~~b~~.
