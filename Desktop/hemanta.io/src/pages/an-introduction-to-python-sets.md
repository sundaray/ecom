---
title: "An Introduction to Python Sets"
date: "2021-08-22"
excerpt: "Learn about the Python set data structure."
categories: ["Python"]
---

```toc

```

In Python, a _set_ is an unordered collection with **no duplicate elements**.

We can create a set either using curly braces (~~{}~~) or the ~~set()~~ function.

> **Note:** If we need to create an empty set, we need to use the ~~set()~~ function, not ~~{}~~, because using curly braces will create a dictionary instead.

### Creating sets

We can create a set from a list, string, tuple or dictionary, discarding any duplicate values.

**A set from a string:**

```py {numberLines}
name = set("hemanta")

print(name)
# {'m', 'e', 't', 'h', 'n', 'a'}
```

Notice that there are two occurrences of the character ~~a~~ in the string ~~hemanta~~. However there is only one ~~a~~ in the set. This is because a set can’t contain duplicate elements.

**A set from a list:**

```py {numberLines}
js = ["React", "Node"]

js_set = set(js)

print(js_set)
# {'React', 'Node'}
```

**A set from a tuple:**

```py {numberLines}
fashion_capital = ('Tokyo', 'Milan', 'London', 'Paris')

print(set(fashion_capital))
# {'Tokyo', 'London', 'Milan', 'Paris'}
```

**A set from a dictionary:**

```py {numberLines}
portfolio = {'Google' : 'Google Pixel', 'Microsoft' : 'Microsoft Surface'}

print(set(portfolio))
# {'Microsoft', 'Google'}
```

Notice that the set is created only from the keys of the dictionary.

### Counting items

We can count the number of items in a set using the ~~len()~~ function.

```py {numberLines}
furniture = {'Ikea', 'Wayfair', 'Sears'}

print(len(furniture))
# 3
```

### Adding items

We can add an item to a set using the ~~add()~~ method.

```py {numberLines}
models = {'Alcazar', 'Elantra', 'Kona'}

models_portfolio = models.add('Tucson')

print(models)
# {'Alcazar', 'Elantra', 'Tucson', 'Kona'}
```

### Deleting items

We can delete an item from a set using the ~~remove()~~ method.

```py {numberLines}
models = {'Apple', 'Lenovo', 'Dell'}

models.remove('Dell')

print(models)
# {'Apple', 'Lenovo'}
```

### Iterating over a set

We can iterate over all items in a set using a ~~for...in~~ loop.

```py {numberLines}
models = {'Apple', 'OnePlus', 'Samsung'}

for brand in models:
    print(brand.upper(), end = " ")

# SAMSUNG APPLE ONEPLUS
```

### Testing for a value

We can test whether an item is present in a set or not using the ~~in~~ operator.

```py {numberLines}
models = {'MongoDB', 'Firebase', 'MySQL'}

print('PostGreSQL' in models)
# False
```

###### Learn about Python dictionaries & tuples in my blog post [here](https://hemanta.io/a-comprehensive-guide-to-python-dictionaries/) & [here](https://hemanta.io/a-beginners-guide-to-python-tuples/) respectively.
