---
title: "Python Logical Operators"
date: "2021-09-06"
excerpt: "and, or, not"
categories: ["Python"]
---

```toc

```

We use logical (_aka boolean_) operators - ~~and~~, ~~or~~ & ~~not~~ - in Python to make multiple comparisons at the same time.

### and

```py {numberLines}
revenue = 150

profit = 15

if revenue > 100 and profit > 10:
    print("You will get a bonus.")
else:
    print("You are not eligible for bonus.")

# Output
# You will get a bonus.
```

### or

```py {numberLines}
education = "BTech"

programming_experience = 1

if education == 'BTech' or programming_experience >= 2:
    print("You can apply to the advanced machine learning program.")

# Output
# You can apply to the advanced machine learning program.
```

### not

Unlike ~~and~~ and ~~or~~, the ~~not~~ operator operates only on one Boolean value or expression. The ~~not~~ operator simply evaluates to the opposite Boolean value.

```py {numberLines}
print(not False)
# True

print(not True)
# False
```
