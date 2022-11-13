---
title: "Sort the Items in a Python List"
date: "2021-09-06"
excerpt: "Using sort() & sorted()"
categories: ["Python"]
---

```toc

```

Python provides two functions for sorting the items in a list.

### sort()

The sort method sorts the items in the list _in place_.

If the items in the list are numeric, they are sorted in ascending order by default. If they are strings, they are sorted in alphabetical order.

We can reverse the default sort order to _descending_ by providing the argument ~~reverse=True~~.

```py {numberLines}
models = ['Ninja', 'Panigale', 'Africa Twin']

models.sort()

print(models)
# ['Africa Twin', 'Ninja', 'Panigale']

digits = [9, 7, 1, 8, 12, 8, 6]

digits.sort()

print(digits)
# [1, 6, 7, 8, 8, 9, 12]
```

### sorted()

The ~~sorted()~~ function returns a sorted _copy_ of the list.

```py {numberLines}
models = ['Ninja', 'Panigale', 'Africa Twin']

models_sorted = sorted(models) # sorted() creates a copy

print(models_sorted)
# ['Africa Twin', 'Ninja', 'Panigale']

print(models)
# ['Ninja', 'Panigale', 'Africa Twin']
```
