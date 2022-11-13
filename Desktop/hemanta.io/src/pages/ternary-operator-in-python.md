---
title: "Ternary Operator in Python"
date: "2021-08-19"
excerpt: "Conditionally assign a value based on the result of an expression."
categories: ["Python"]
---

In python, conditional expressions (_aka ternary operator_) help us conditionally assign a value based on the result of an expression.

**Syntax**

```sh {numberLines}
x if condition else y
```

If ~~condition~~ is true, ~~x~~ is evaluated and its value is returned; else ~~y~~ is evaluated and its value is returned.

**Example:**

```py {numberLines}
country = "France"

greeting = "Bonjour" if country == "France" else "Good Morning"

print(greeting)
# Bonjour
```
