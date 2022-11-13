---
title: "Names & Namespaces in Python"
date: "2022-02-19"
excerpt: "Learn how Python differentiates between each distinct object that we define in our programs."
categories: ["Python"]
---

In Python, a name is an identifier for an object.

```py {numberLines}
breakfast = "Muesli"
```

In the example above, we assign ~~breakfast~~ as the name of the string ~~Muesli~~.

Python uses the system of names so that it can differentiate between each distinct object (such as a string or a function) that we define. And Python stores the names in something called a ~~namespace~~.

### Namespace

A namespace is a collection of names and the objects that they reference.

Python hosts a dictionary where the keys are the names that have been defined and the mapped values are the objects that they reference.

In the example above, the namespace Python creates would look something like this:

```py {numberLines}
{‘breakfast’ : ‘muesli’}
```

So, if we tried to print the variable ~~breakfast~~:

```py {numberLines}
print(breakfast)
```

Python would search the namespace defined above for a key named ~~breakfast~~, and provide the value to be run in our program. Thus, we would see the output of ~~Muesli~~.
