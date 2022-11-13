---
title: "Define Python Functions With Unlimited Keyword Arguments Using **kwargs"
date: "2022-02-06"
excerpt: "kwargs is a shorthand for keyword arguments."
categories: ["Python"]
---

In my blog post [here](https://hemanta.io/variable-argument-lengths-in-python-functions-using-args/), we learnt how to define Python functions that accept unlimited positional arguments using ~~\*args~~.

In this post,we will learn to define functions that accept unlimited _keyword_ arguments using ~~\*\*kwargs~~, which is a shorthand for keyword arguments.

```py {numberLines}
def unlimited_keyword_args(**kwargs):
    print(type(kwargs))
    print(kwargs)
    print(kwargs.get('lunch'))


print(unlimited_keyword_args(breakfast="Oatmeal", lunch="Steak"))

# <class 'dict'>
# {'breakfast': 'Oatmeal', 'lunch': 'Steak'}
# Steak
```

We can see that ~~\*\*~~ **generates a standard dictionary**, the values of which we can extract using the ~~values()~~ function.

```py {numberLines}
def unlimited_keyword_args(**kwargs):
    for arg in kwargs.values():
        print(arg)

print(unlimited_keyword_args(breakfast="Oatmeal", lunch="Steak"))

# Oatmeal
# Steak
```
