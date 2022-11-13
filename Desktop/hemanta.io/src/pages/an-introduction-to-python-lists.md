---
title: "An Introduction to Python Lists"
date: "2022-01-09"
excerpt: "Learn how to work with a collection of data in sequential order."
categories: ["Python"]
---

```toc

```

A _list_ is one of the many built-in data structures that allows us to work with a collection of data in sequential order.

We can store the list of top three mountains by height in a list as shown below:

```py {numberLines}
mountains = ["Mauna Kea", "Mt. Everest", "K2"]
```

Notice that:

- A list begins and ends with square brackets (~~[~~ & ~~]~~).
- And each item is separated by a comma (~~,~~).

We can combine multiple data types in one list. For example, the following list contains both a string and an integer:

```py {numberLines}
mixed_list = ["Hemanta", 12]
```

Lists can contain any data type in Python! For example, this list contains a string, integer, boolean and float.

```py {numberLines}
mixed_list = ["Hemanta", 12, True, 24.8]
```

### Empty Lists

We can create an empty list as shown below:

```py {numberLines}
empty_list = [ ]
```

### Fill up An Empty List

#### append()

We can use the popular list method ~~.append()~~ to add an element to the end of a list.

```py {numberLines}
name = ["Hemanta", "Kumar"]

name.append("Sundaray")

print(name)

# ['Hemanta', 'Kumar', 'Sundaray']
```

#### List Concatenation

When we want to add multiple items to a list, we can use ~~+~~ to combine two lists.

> Note that we can only use ~~+~~ with other lists.

```py {numberLines}
first_name = ["Hemanta"]

last_name = ["Sundaray"]

full_name = first_name + last_name

print(full_name)

# ['Hemanta', 'Sundaray']
```

### Accessing List Elements

We can select a single element from a list by using square brackets (~~[]~~) and the index of the list item.

Consider the list below:

```py {numberLines}
energy_drinks = ["Red Bull", "Monster", "Bang"]
```

If we want to access the third element of the list above, we would use ~~print(energy_drinks[2])~~.

```py {numberLines}
energy_drinks = ["Red Bull”, “Monster”, “Bang”]

print(energy_drinks[2])

# Bang
```

#### Negative Index

We can use the index ~~-1~~ to select the last item of a list, even when we don’t know how many items are there in the list.

Consider the following list with 5 items:

```py {numberLines}
chocolate = ["Nestle”, “Milka”, “Ghirardelli”, “Cadbury”, “Godiva”]
```

If we select the ~~-1~~ index, we get the final element"

```py {numberLines}
print(chocolate[-1])

# Godiva
```

### Modifying List Elements

We can change a value in a list by reassigning the value using the specific index.

Consider the following list:

```py {numberLines}
candies = ["Wrigley”, “Ferrero”, “Mondelez”, “Meizi”, “Hershey”]
```

We can change the value of the third item (index 2) as shown below:

```py {numberLines}
candies[2] = "Lindt"

print(candies)

# ['Wrigley', 'Ferrero', 'Lindt', 'Meizi', 'Hershey']
```

### Removing Items From a List

We can remove elements in a list using the ~~remove()~~ Python method.

Below, we have a list of the top three car brands in Korea:

```py {numberLines}
brands = ["Hyundai", "Kia", "GM"]
```

We can remove ~~Kia~~ by using the ~~remove()~~ method:

```py {numberLines}
brands = ["Hyundai", "Kia", "GM"]

brands.remove("Kia")

print(brands)

# ['Hyundai', 'GM']
```

We can also use ~~.remove()~~ on a list that has duplicate elements:

Only the first instance of the matching element is removed:

```py {numberLines}
brands = ["Hyundai", "Kia", "Kia", "GM"]

brands.remove("Kia")

print(brands)

# ['Hyundai', 'Kia', 'GM']
```

### Two-Dimensional (2D) Lists

Lists can contain other lists! We will commonly refer to these as two-dimensional lists.

```py {numberLines}
country_capital = [["India", "New Delhi"], ["China", "Beijing"], ["South Korea", "Seoul"], ["Japan", "Tokyo"]]
```

#### Accessing 2-D Lists

Two-dimensional lists can be accessed similar to their one-dimensional counterparts. Instead of providing a single pair of brackets, we will use an additional set for each dimension past the first.

If we wanted to access China’s capital:

```py {numberLines}
# Access the sublist at index 1, and then access the 1st index of that sublist.

china_capital = country_capital[1][1]

print(china_capital)

# Beijing
```

#### Modifying 2D Lists

The following list stores the floor numbers of different clothing lines:

```py {numberLines}
floor_line = [["First", "Menswear"], ["Second", "Womenswear"], ["Third", "Kidswear"]]
```

To change a value in a two-dimensional list, reassign the value using the specific index.

```py {numberLines}
floor_line[0][1] = "Accessories"

print(floor_line)

# [['First', 'Accessories'], ['Second', 'Womenswear'], ['Third', 'Kidswear']]
```
