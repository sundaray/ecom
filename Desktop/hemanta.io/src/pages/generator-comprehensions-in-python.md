---
title: "Generator Comprehensions in Python"
date: "2021-08-21"
excerpt: "Learn to create values on demand using generator comprehension."
categories: ["Python"]
---

```toc

```

A generator comprehension is a sequence creation object.

### List comprehension vs generator comprehension

If we were to create a list with 1 million elements using list comprehension, the list would be created immediately and stored in memory. However, if we create the same list using generator expression, it would produce values on the fly and hand them out one at a time through an iterator, significantly reducing the memory requirements for processing 1 million elements - thereby improving performance.

### Generator Function

We can create a large sequence using a generator function, which is a normal function but returns its value with a ~~yield~~ statement rather than ~~return~~.

```py {numberLines}
def sequence(start=0, end=10, step=1):
     number = start
     while number < end:
         yield number
         number += step

range = sequence(1, 8)

print(range)
# <generator object sequence at 0x0000019431779510>
```

The ~~sequence()~~ function returns a generator object and we can loop through this generator object.

```py {numberLines}
for num in range:
    print(num, end = " ")

# 1 2 3 4 5 6 7
```

> A generator can only be run once. If we try to iterate through the ~~range~~ generator object again, we will find that it’s tapped out.

### Generator comprehensions

Generator comprehensions are surrounded by parentheses instead of square or curly brackets.

A generator comprehension is a shorthand version of a generator function. It does the ~~yield~~ invisibly and returns a generator object.

```py {numberLines}
numbers = [2, 4, 6, 8, 10, 12]

range = (x**2 for x in numbers)

print(range)
# <generator object <genexpr> at 0x0000023917029510>
```

###### Learn what a list comprehension is in my blog post [here](https://hemanta.io/creating-python-lists-using-list-comprehension/).
