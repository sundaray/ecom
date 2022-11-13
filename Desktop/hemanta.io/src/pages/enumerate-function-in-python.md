---
title: "enumerate() function in Python"
date: "2021-08-23"
excerpt: "Keep a counter with the help of the enumerate() function while iterating over an iterable."
categories: ["Python"]
---

~~enumerate()~~ is a built-in function in Python that takes an iterable and returns an iterable series of pairs, each pair being a tuple. The first element of each pair is the index of the current item; the second element of each pair is the item itself.

**Example:**

```py {numberLines}
denim_brands = ['Carharrt', 'APC', 'Calvin Klein']

result = enumerate(denim_brands)

print(result)
# <enumerate object at 0x00000137864740C0>

print(type(result))
# <class 'enumerate'>

# Convert the enumerate object into a list
print(list(result))
# [(0, 'Carharrt'), (1, 'APC'), (2, 'Calvin Klein')]
```

```py {numberLines}
fast_fashion = ['Zara', 'H&M', 'Uniqlo']

for index, value in enumerate(fast_fashion):
    print(f"index = {index}, value={value}")


# index = 0, value=Zara
# index = 1, value=H&M
# index = 2, value=Uniqlo
```
