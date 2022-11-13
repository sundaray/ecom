---
title: "For Loops in Python"
date: "2022-01-30"
excerpt: "For loops in Python"
categories: ["Python"]
---

The general structure of a for loop is as follows:

```sh {numberLines}
for <temporary variable> in <collection>
    <action>
```

Let’s break down each of these components:

- A ~~for~~ keyword indicates the start of a ~~for~~ loop.
- A ~~\<temporary variable>~~ that is used to represent the value of the element in the collection the loop is currently on.
- An ~~in~~ keyword separates the temporary variable from the collection used for variation.
- A ~~\<collection>~~ to loop over.
- An ~~\<action>~~ to do anything on each iteration of the loop.

The following ~~for~~ loop prints each brand in ~~brands~~.

```py {numberLines}
chocolate_brands = ["Ferrero", "Lotus", "Campco"]

for brand in chocolate_brands:
    print(brand)

# Ferrero
# Lotus
# Campco
```

**Indentation**

Notice that the ~~print~~ statement in the code example above is indented. Everything at the same level of indentation after the ~~for~~ loop declaration is included in the loop body and is run on every iteration of the loop.

If we ever forget to indent, we’ll get an ~~IndentationError~~ or unexpected behavior.

### For loops Using Range

For example, if we wanted to print out a ~~Hello World!~~ message six times using a ~~for~~ loop, we would follow this structure:

```sh {numberLines}
for <temporary variable> in <list of length 6>:
    print("Hello World!")
```

Notice that we need to iterate through a list of length 6, but we don’t necessarily care what is inside the list.

To create arbitrary collections of any length, we can pair our ~~for~~ loops with the Python built-in function [range()](https://hemanta.io/range-function-in-python/).

We can then use the ~~range()~~ function directly in our ~~for~~ loops as the collection to perform a six-step iteration:

```py {numberLines}
for temp in range(6):
    print("Hello World!")
```

Would output:

```sh {numberLines}
Hello World!
Hello World!
Hello World!
Hello World!
Hello World!
Hello World!
```
