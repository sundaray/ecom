---
title: "A Beginner's Guide to Python Tuples"
date: "2021-08-18"
excerpt: "Tuple syntax, tuple unpacking, tuple() function, tuple concatenation & tuple iteration"
categories: ["Python"]
---

```toc

```

Like strings and lists, tuple is a sequence structure in Python.

A tuple is immutable. This simply means that we can’t insert or delete elements from a tuple.

**Syntax**

We can create a tuple with one or more elements simply by separating the elements with commas.

Let’s create a tuple with one element:

```py {numberLines}
name = 'hemanta',
```

The comma is very important. Without the comma, ~~name~~ is not a tuple.

The tuple syntax that you will frequently come across is where the elements are enclosed by parentheses.

```py {numberLines}
name = ('hemanta', 'kumar', 'sundaray')
```

### Tuple unpacking

We can unpack the elements of a tuple and store them in different variables as shown below:

```py {numberLines}
firstName, lastName = ('hemanta', 'sundaray')

print(firstName)
# hemanta

print(lastName)
# sundaray
```

### tuple() function

We can also create tuples from other sequence structures, for example lists, using the ~~tuple()~~ function.

```py {numberLines}
frameworks = ['React', 'Vue', 'Angular']

frameworks_tuple = tuple(frameworks)

print(frameworks_tuple)
# ('React', 'Vue', 'Angular')
```

### Tuple concatenation

We can combine tuples using the ~~+~~ operator.

```py {numberLines}
name = ('hemanta',) + ('kumar', 'sundaray')

print(name)
# ('hemanta', 'kumar', 'sundaray')
```

### Tuple iteration

We can iterate through the elements of a tuple using the _for….in_ loop.

```py {numberLines}
languages = ('JavaScript', 'Python', 'Java')

for lang in languages:
	print(lang)

# JavaScript
# Python
# Java
```
