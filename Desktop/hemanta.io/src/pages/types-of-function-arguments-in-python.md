---
title: "Types of Function Arguments in Python"
date: "2022-01-12"
excerpt: "Positional arguments, keyword arguments & default arguments"
categories: ["Python"]
---

```toc

```

### Positional Arguments

Arguments that are called by their position in the function definition.

```py {numberLines}
def full_name(first_name, last_name):
    print(first_name, last_name)

print(full_name("Hemanta", "Sundaray"))
# Hemanta Sundaray
```

Here, ~~first_name~~ will be mapped to ~~Hemanta~~ while ~~last_name~~ will be mapped to ~~Sundaray~~ due to the position of the arguments when calling the function.

### Keyword Arguments

Arguments that are called by their name.

```py {numberLines}
def full_name(first_name, last_name):
    print(first_name, last_name)

print(full_name(last_name = "Sundaray", first_name = "Hemanta"))
# Hemanta Sundaray
```

Here, we are using the parameter names ~~first_name~~ and ~~last_name~~ as keyword arguments in the function call. Notice the order of the arguments does not matter since they are assigned a specific name.

### Default Arguments

Arguments that are given default values.

```py {numberLines}
def full_name(first_name = "Hemanta", last_name = "Sundaray"):
    print(first_name, last_name)

print(full_name())
# Hemanta Sundaray
```

Here, in the function definition, we assign default values to the parameters. This means we can call our function without providing any arguments because they will have a value to fall back onto.
