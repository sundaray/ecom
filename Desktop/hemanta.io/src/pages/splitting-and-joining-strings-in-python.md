---
title: "Splitting & Joining Strings in Python"
date: "2021-08-29"
excerpt: "split(), partition() & join()"
categories: ["Python"]
---

```toc

```

### split()

We can use the ~~split()~~ method to split a string into a list of smaller strings based on some delimiter.

If we don’t pass any delimiter argument to the ~~string()~~ method, it will use any sequence of white space characters - newlines, spaces and tabs - to split the string.

```py {numberLines}
data = "Python Flask Django"

print(data.split())
# ['Python', 'Flask', 'Django']
```

Passing a delimiter to the ~~split()~~ method:

```py {numberLines}
data = "Python-Flask-Django"

print(data.split("-"))
# ['Python', 'Flask', 'Django']
```

### partition()

We can split a string based on a separator string using the ~~partition()~~ method, which returns a tuple with three elements: the substring before the first instance of the separator string, the separator string itself and the substring after the separator string.

```py {numberLines}
name = "Hemanta kumar sundaray"

print(name.partition('kumar'))
# ('Hemanta ', 'kumar', ' sundaray')
```

### join()

We can join a list of strings into a single string using the ~~join()~~ method.

First, we specify the string that will glue the strings together and then call the ~~join()~~ method, passing it the list of strings _that we want to join together_ as the argument.

```py {numberLines}
empire = ['Python', 'Flask', 'Django']

print(", ".join(empire))
# Python, Flask, Django
```

###### Learn how to find and replace substrings in Python in my blog post [here](https://hemanta.io/finding-and-replacing-substrings-in-python/).
