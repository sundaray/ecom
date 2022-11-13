---
title: "Python 3 math Module Functions"
date: "2021-09-10"
excerpt: "math.ceil(), math.floor(), math.pow(), math.sqrt()"
categories: ["Python"]
---

```toc

```

###### Learn about the built-in Python functions for working with numbers in my blog post [here](https://hemanta.io/built-in-python-functions-for-working-with-numbers/).

First, import the ~~math~~ module near the top of the ~~.py~~ file or Jupyter cell to make the functions available to the rest of the code.

###### Learn how to work with modules and the ~~import~~ statement in my blog post [here](https://hemanta.io/python-modules-and-import-statement/).

### math.ceil(x)

Returns the smallest integer greater than or equal to _x_.

```py {numberLines}
import math

print(math.ceil(-3.4))
# -3
```

### math.floor(x)

Returns the largest integer less than or equal to _x_.

```py {numberLines}
import math

print(math.floor(-3.4))
# -4
```

### math.pow(x, y)

Returns _x_ raised to the power _y_.

```py {numberLines}
import math

print(math.pow(3, 4))
# 81.0
```

### math.sqrt(x)

Gets the square root of _x_.

```py {numberLines}
import math

print(math.sqrt(81))
# 9.0
```
