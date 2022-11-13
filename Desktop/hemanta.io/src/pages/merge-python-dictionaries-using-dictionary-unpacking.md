---
title: "Merging Python Dictionaries Using Dictionary Unpacking"
date: "2021-08-27"
excerpt: "Learn how to merge dictionaries using dictionary unpacking."
categories: ["Python"]
---

We can merge two or more Python dictionaries using a feature known as dictionary unpacking.

**Example:**

```py {numberLines}
inventory_formal = {'Suit': 100, 'Jacket': 75}

inventory_casual = {'Shirt': '200', 'Chino': 100}

inventory = {**inventory_formal, **inventory_casual}

print(inventory)
# {'Suit': 100, 'Jacket': 75, 'Shirt': '200', 'Chino': 100}
```

Starting from Python 3.9, we can merge and update Python dictionaries using the ~~|~~ (bitwise OR operator). Learn more in my blog post [here](https://hemanta.io/dictionary-merge_and-update-operations-in-python-using-the-bitwise-or-operator/).
