---
title: "Default Parameter Values in Python Functions"
date: "2021-08-20"
excerpt: "Learn why we should never pass mutable data structures as default parameter values in Python functions."
categories: ["Python"]
---

There is a gotcha we should be aware of while passing default parameter values to a Python function.

Consider the following code example:

```py {numberLines}
def problematic(num, result = []):
    result.append(num)
    return result

print(problematic(4))
# [4]

print(problematic(5))
# [4, 5]
```

We have passed an empty list to the ~~result~~ parameter as its default value. We would expect this default value to be an empty list on each function call. Clearly, that is not the case. The second time we called the ~~problematic()~~ function on line 8, the list ~~result~~ already had the number 4 from the previous function call (on line 5).

**This is because the default values we provide for parameters are only created once, and used for each subsequent call of the function.**

We could fix the ~~problematic()~~ function like so:

```py {numberLines}
def problematic(num):
    result = []
    result.append(num)
    return result

print(problematic(4))
# [4]

print(problematic(5))
# [5]
```
