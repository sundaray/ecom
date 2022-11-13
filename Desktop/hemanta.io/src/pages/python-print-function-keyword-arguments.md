---
title: "Python print() Function - Keyword Arguments"
date: "2021-08-25"
excerpt: "end & sep"
categories: ["Python"]
---

```toc

```

### end

In Python, the ~~print()~~ function can take two optional parameters - ~~end~~ & ~~sep~~ - to specify what should be printed at the end of its arguments and between its arguments respectively.

If we execute the following code,

```py {numberLines}
print('JavaScript')
print('React')
```

we will get the following output:

```py {numberLines}
JavaScript
React
```

The outputs appear on separate lines because **the ~~print()~~ function by default adds a newline character to the end of the string passed to it as the argument**. However, we can use the ~~end~~ keyword argument to change the newline character to a different string value.

For example, if we pass an empty string to the ~~end~~ keyword argument, the newline character will not be printed. Instead an empty string will be printed and we will get both the outputs on the same line.

```py {numberLines}
print('JavaScript', end=" ")

print('React')

# Output
JavaScript React
```

### sep

Similarly, when we pass multiple string values to ~~print()~~, the function will automatically separate them with a single space.

```py {numberLines}
print('JavaScript', 'Python', 'C++')

#output
JavaScript Python C++
```

We can override the default separating string by passing a different string value to the ~~sep~~ keyword argument.

```py {numberLines}
print('JavaScript', 'Python', 'C++', sep=" # ")

# output
JavaScript # Python # C++
```
