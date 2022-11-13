---
title: "Python Data Types - Strings"
date: "2021-08-07"
excerpt: "Learn what f-strings are."
categories: ["Python"]
---

A _string_ is a series of characters.

Python strings are immutable, which means they can’t be changed after they are created.

In Python, anything inside quotes is considered a string. We can use either single quotes or double quotes.

**Example:**

```py {numberLines}
name = "hemanta"

print(name)

hemanta
```

### Using variables in Strings

We can insert the value of a variable into a string by placing the letter ~~f~~ immediately before the opening quotation mark and enclosing the names of the variables with curly brackets. These strings are called f-strings.

**Example:**

```py {numberLines}
name = "Josh"
profession = "software engineer"

bio = f"{name} is a {profession}."

print(bio)
Josh is a software engineer.
```

> f-strings were first introduced in Python 3.6.
