---
title: "Dictionary Merge & Update Operations in Python Using the bitwise OR Operator"
date: "2021-08-27"
excerpt: "Learn how to merge and update Python dictionaries."
categories: ["Python"]
---

```toc

```

###### Get a comprehensive introduction to Python dictionaries in my blog post [here](https://hemanta.io/a-comprehensive-guide-to-python-dictionaries/).

### update()

The simplest way to update an existing dictionary with the contents of another dictionary is to use the ~~update()~~ method.

```py {numberLines}
doses_finance = {'Alice': 0, 'John': 1}

doses_marketing = {'Rick': 2}

doses_finance.update(doses_marketing)

print(doses_finance)
# {'Alice': 0, 'John': 1, 'Rick': 2}
```

Note that the ~~update()~~ method modifies the existing dictionary in place and returns no value.

### bitwise OR

Starting with Python 3.9, we can use the ~~|~~ (bitwise OR) and ~~|=~~ (in-place bitwise OR) operators to perform _dictionary_ merge and update operations.

The resulting dictionary will be a completely new object that will have the keys from the source dictionaries.

```py {numberLines}
doses_finance = {'Alice': 0, 'John': 1}

doses_marketing = {'Rick': 2}

doses_finance_marketing = doses_finance | doses_marketing

print(doses_finance_marketing)
# {'Alice': 0, 'John': 1, 'Rick': 2}
```

### in-place bitwise OR

We can update a dictionary with the keys coming from a different dictionary using the in-place bitwise OR (~~|=~~) operator.

```py {numberLines}
doses_finance = {'Alice': 0, 'John': 1}

doses_finance |= {'Rick': 2}

print(doses_finance)
# {'Alice': 0, 'John': 1, 'Rick': 2}
```
