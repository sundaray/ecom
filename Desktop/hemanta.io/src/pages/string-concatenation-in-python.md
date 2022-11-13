---
title: "String Concatenation in Python"
date: "2021-09-06"
excerpt: "Using the + operator."
categories: ["Python"]
---

In Python, we can combine literal strings or string variables using the ~~+~~ operator.

```py {numberLines}
firstName = "Hemanta"

lastName = "Sundaray"

print(firstName + " " + lastName)
# Hemanta Sundaray

print("Hemanta " + "Sundaray")
# Hemanta Sundaray
```

We can also combine _literal strings_ (not string variables) just by having one after the other:

```py {numberLines}
print("Hemanta " "Sundaray")
# Hemanta Sundaray
```

If we are trying to ~~print()~~ a numeric variable, we can use commas to pass it as a different argument rather than converting it to a string.

```py {numberLines}
age_string_one = "I am"

age = 32

age_string_two = "years old."

print(age_string_one, age, age_string_two)
# I am 32 years old.
```
