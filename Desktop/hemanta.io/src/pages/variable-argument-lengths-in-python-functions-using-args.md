---
title: "Variable Argument Lengths in Python Functions Using *args"
date: "2022-01-06"
excerpt: "Using the unpacking operator"
categories: ["Python"]
---

In Python, there is an operator called the **unpacking operator** (\*). The unpacking operator allows us to give our functions a variable number of arguments by performing what’s known as _positional argument unpacking_.

Below, we have a function that utilizes the unpacking operator:

```py {numberLines}
def order(*args):
    print(args)
```

Notice that in our ~~print()~~ call, we simply use the name of ~~args~~ with the unpacking operator omitted. And the name of ~~args~~ is completely arbitrary.

If we called this function with random arguments:

```py {numberLines}
print(order('Tomato Mozarella Sandwich', 'Cold Coffee'))
```

Our output would show us what is inside of ~~\*args~~.

```sh {numberLines}
('Tomato Mozzarella Sandwich', 'Cold Coffee')
```

**Whatever name follows the unpacking operator will store the arguments passed into the function in the form of a tuple**. This allows our functions to accept any number of arguments.
