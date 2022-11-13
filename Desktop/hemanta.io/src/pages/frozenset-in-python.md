---
title: "frozenset() in Python"
date: "2021-08-22"
excerpt: "Learn to create an immutable set using the frozenset() function."
categories: ["Python"]
---

###### Learn about the Python set data structure in my blog post [here](https://hemanta.io/an-introduction-to-python-sets/).

We can create an immutable set (_a set that can’t be changed_) using the ~~frozenset()~~ function and passing it any iterable argument.

If we will try to add an item to a set created using the ~~frozenset()~~ function, we will receive an ~~AttributeError~~, as shown below:

```py {numberLines}
states = frozenset(['Washington', 'Texas', 'Florida'])

states.add('California')
# AttributeError: 'frozenset' object has no attribute 'add'
```
