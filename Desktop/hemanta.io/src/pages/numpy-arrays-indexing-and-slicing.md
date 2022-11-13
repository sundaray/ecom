---
title: "NumPy Arrays - Indexing & Slicing"
date: "2021-08-21"
excerpt: "Select elements and subarrays from NumPy arrays using indexing and slicing operations."
---

```toc

```

We can select elements and subarrays from NumPy arrays using the standard square bracket notation that we use with Python lists.

### One dimensional arrays

Along a single axis, we use integers to select single elements.

We can use -ve integers to index elements from the end of an array. The last element is indexed with -1, the second last element is indexed with -2 and so on.

```py {numberLines}
import numpy as np

data = np.arange(0, 10, 2)

data
array([0, 2, 4, 6, 8])

data[1]  # the second element, at index 1
# 2

data[-1] # the last element
# 8

data[2]
# 4
```

We can select a sequence of elements using slices, which are specified using the colon (~~:~~) notation.

### Array slicing expressions

- **a[x:y]** - Select elements with index starting at _x_ and ending at _y-1_. (_x_ & _y_ are integers.). The slice ~~a[x:y]~~ can also be written as ~~a[x:y:1]~~, where the number _1_ specifies that every element between _x_ & _y_ should be selected. To select every second element between _x_ & _y_ use ~~a[x:y:2]~~.

- **a[:]** - Select all the elements in the given axis.

- **a[:x ]** - Select elements starting with _0_ and going up to index _x-1_ (integer).

- **a[x:]** - Select elements starting from index _x_ (integer) and going up to the last element in the array.

- **a[::-1]** - Select all elements in the reverse order.

```py {numberLines}
import numpy as np

data = np.arange(0, 10, 2)

data
# array([0, 2, 4, 6, 8])

data[1:3]
# array([2, 4])

data[:4]
# array([0, 2, 4, 6])

data[:]
# array([0, 2, 4, 6, 8])
```

### Multidimensional arrays

We can extract columns and rows from a two-dimensional array using a combination of slices and integer indexing.

```py {numberLines}
import numpy as np

data = np.array([[1, 4, 7, 8, 3], [10, 45, 24, 39, 87], [23, 44, 78, 19, 39], [74, 38, 26, 38, 45]])

data
# array([[ 1,  4,  7,  8,  3],
#        [10, 45, 24, 39, 87],
#        [23, 44, 78, 19, 39],
#        [74, 38, 26, 38, 45]])

data[:, 2] # select the third column
# array([ 7, 24, 78, 26])

data[2, :] # select the third row
# array([23, 44, 78, 19, 39])
```

We can extract subarrays by applying a slice on each of the array dimensions.

```py {numberLines}
data[1:, :2]
# array([[10, 45],
#        [23, 44],
#        [74, 38]])
```
