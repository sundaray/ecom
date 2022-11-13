---
title: "An Introduction to Python Functions"
date: "2021-08-18"
excerpt: "Learn to define a function, pass default parameter values and arbitrary number of arguments and unpack a list"
categories: ["Python"]

---

```toc

```

### Function definition

We define a function with the keyword ~~def~~, followed by the name of the function.

If the function accepts any parameters, the name of the function must be followed by a parameter or a list of parameters enclosed in parentheses.

The parenthesized list of parameters is followed by a colon (~~:~~).

The statements that make up the body of the function start in the next line.

**Examples:**

```py {numberLines}
def greeting ():
    print(f"Hello world!")

greeting()
# Hello world!
```

```py {numberLines}
def greeting (name):
    print(f"Hello {name}")


greeting("World!")
# Hello World!
```

###### Learn what _f_-strings are in my blog post [here](https://hemanta.io/python-data-types-strings/).

### Default Parameter Values

We can assign default values to function parameters by following the name of the parameter with an equal sign (~~=~~) followed by a value.

In the code example below, we have assigned the default value of ~~Stranger~~ to the ~~name~~ parameter. So, when we call the ~~greeting~~ function without passing in any argument (_which we have done on line 4_), the default value ~~Stranger~~ is used.

```py {numberLines}
def greeting (name = "Stranger"):
    print(f"Hello {name}")

greeting()
# Hello Stranger
```

### Arbitrary Argument List

Below, we have a function named ~~add~~ that receives two numbers as arguments and returns their sum.

```py {numberLines}
def add (numOne, numTwo):
    return numOne + numTwo


print(add(10, 20))
# 30
```

What if we want the ~~add~~ function to have the capability to add an arbitrary number of arguments that we pass to it?

We can do so by prepending the name of the parameter with an asterisk (~~\*~~) as shown below. By convention, the parameter name is ~~args~~.

Note that the arguments will be wrapped up in a tuple.

```py {numberLines}
def add (*args):
    return sum(args)

print(add(10, 20, 30, 25, 50))
# 135
```

On line 2, we use the built-in ~~sum~~ function in Python to add all our arguments.

### Unpacking a list

Consider the following scenario:

```py {numberLines}
numbers = [10, 20, 30, 40, 20]

def add (*args):
    return sum(args)
```

The numbers that we want to pass as arguments to the ~~add~~ function are in a list named ~~numbers~~.

In order to pass these numbers to the ~~add~~ function call, we must unpack them from the list. We can do so by writing the function call with the ~~\*~~ operator as shown below:

```py {numberLines}
numbers = [10, 20, 30, 40, 20]

def add (*args):
    return sum(args)


print(add(*numbers))
# 120
```
