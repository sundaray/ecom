---
title: "An Introduction to NumPy Library"
date: "2021-08-21"
excerpt: "Learn how to create NumPy arrays and discover important information about them using several attributes of the ndarray class."
categories: ["Python-Pandas"]
---

```toc

```

###### All the code examples in this post are written and executed in a Jupyter Notebook.

NumPy, which is short for Numerical Python, is a Python library optimized for numerical computing.

At the core of NumPy is a high-performance data structure for representing multidimensional arrays known as _ndarray_. NumPy arrays are homogeneous, meaning all elements have the same data type.

### Creating NumPy arrays

First, we import the ~~numpy~~ module, which by convention, is imported under the alias ~~np~~.

```py {numberLines}
Import numpy as np
```

We can create arrays (_ndarray_ instances) using several functions provided by the NumPy library.

#### Creating arrays from lists

We can create a one-dimensional array by passing a Python list as an argument to the ~~np.array~~ function.

```py {numberLines}
data = np.array([1, 2, 3, 4])

data
# array([1, 2, 3, 4])

type(data)
# numpy.ndarray
```

To create a two-dimensional array, we simply pass a nested Python list to the ~~np.array()~~ function.

```py {numberLines}
data = np.array([[1, 2], [3, 4]])

data
# array([[1, 2],
#        [3, 4]])
```

#### Creating arrays from constant values

**np.zeros**

We can create an array filled with zeros using the ~~np.zeros~~ function. The first argument that we pass to ~~np.zeros()~~ can be an integer or a tuple that describes the number of elements along each dimension of the array.

```py {numberLines}
data = np.zeros((2, 2))

data
# array([[0., 0.],
#        [0., 0.]])
```

**np.ones**

We can create an array filled with ones using the ~~np.ones~~ function. The first argument that we pass to ~~np.ones()~~ can be an integer or a tuple that describes the number of elements along each dimension of the array.

```py {numberLines}
data = np.ones((4))

data
# array([1., 1., 1., 1.])
```

By default, ~~np.zeros()~~ and ~~np.ones()~~ create arrays with elements of data type ~~float64~~. We can convert the default data type to any other data type of our choice by passing an optional keyword (~~dtype~~) argument.

```py {numberLines}
data = np.ones(4, dtype=np.int64)

data
# array([1, 1, 1, 1], dtype=int64)

data.dtype
# dtype('int64')
```

We can create an array filled with any arbitrary constant value by first creating an array filled with ones and then multiplying the array with the fill value.

```py {numberLines}
data = np.ones((2,3)) * 5

data
# array([[5., 5., 5.],
#        [5., 5., 5.]])
```

**np.full()**

We can produce the array above using the ~~np.full()~~ function as well.

```py {numberLines}
data = np.full((2, 3), 5)

data
# array([[5, 5, 5],
#        [5, 5, 5]])
```

#### Creating arrays filled with incremental sequences

We can create an array with evenly spaced values between a start value and an end value using the ~~np.arange()~~ function. The third argument is the number we want the values to increment by.

```py {numberLines}
data = np.arange(1, 10, 3)

data
# array([1, 4, 7])
```

#### Creating an array with random numbers

We can create an array with random numbers that are uniformly distributed between 0 & 1 using the ~~np.random.rand()~~ function.

```py {numberLines}
data = np.random.rand(5)

data
# array([0.32108486, 0.7915518 , 0.44758901, 0.95538267, 0.56497222])
```

### Basic attributes of the ndarray class

The _ndarray_ class provides several attributes for finding out important metadata about an array.

- **shape**: A tuple that contains the number of elements for each dimension of the array.
- **size**: The total number of elements of the array.
- **ndim**: Number of axes in the array
- **nbytes**: No. of bytes used to store the data
- **dtype**: The data type of elements in the array.

In the code example below, we have created a NumPy array using the ~~np.array~~ function on a python list.

```py {numberLines}
data = np.array([[12, 24], [15, 25], [20, 40]])

data.shape
# (3, 2)

data.size
# 6

data.ndim
# 2

data.nbytes
# 24

data.dtype
# dtype('int32)
```
