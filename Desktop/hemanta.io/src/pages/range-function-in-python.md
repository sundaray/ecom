---
title: "range() Function in Python"
date: "2021-09-09"
excerpt: "Learn how to generate number sequences with the range() function."
categories: ["Python"]
---

The ~~range()~~ function returns a stream of numbers within a specified range without us having to first create and store a large data structure such as a _list_ or _tuple_. This allows us to create huge ranges without using all the memory in the computer.

**Syntax**

```sh
range(start, stop, step)
```

- If we omit ~~start~~, the range begins at 0.

- The only required value is ~~stop~~. The last value created will be the value just before ~~stop~~.

- The default value of ~~step~~ is 1. We can go backwards with -1.

~~range()~~ returns an iterable object. We can convert this iterable object to a sequence, like a _list_, using the ~~list()~~ function.

```py {numberLines}
for num in range(5):
    print(num, end=" ")

# output
# 0 1 2 3 4
```

```py {numberLines}
sequence = list(range(1, 10, 2))

print(sequence)
# [1, 3, 5, 7, 9]
```

###### Learn about the ~~end~~ keyword argument in the ~~print()~~ function in my blog post [here](https://hemanta.io/python-print-function-keyword-arguments/).
