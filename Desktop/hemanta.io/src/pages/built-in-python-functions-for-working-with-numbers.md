---
title: "Built-in Python Functions for Working With Numbers"
date: "2021-09-09"
excerpt: "abs(), float(), int(), max(), min(), round(), str(), type()"
categories: ["Python"]
---

```toc

```

### abs(x)

Returns the absolute value of number _x_. (_converts negative numbers to positive_).

```py {numberLines}
print(abs(3.14))
# 3.14

print(abs(-3.14))
# 3.14
```

### float(x)

Converts the number _x_ to a float data type.

```py {numberLines}
print(float(3))
# 3.0

print(float(-3))
# -3.0
```

### int(x)

Converts the number _x_ to the integer data type by truncating (not rounding) the decimal point and any digits after it.

```py {numberLines}
print(int(3.1426))
# 3
```

### max(x, y, z, ….)

Takes any number of numeric arguments and returns whichever one is the largest.

```py {numberLines}
print(max(3.1426, 12, 20, -9.876))
# 20
```

### min(x, y, z, ...)

Takes any number of numeric arguments and returns whichever one is the smallest.

```py {numberLines}
print(min(3.1426, 12, 20, -9.876))
# -9.876
```

### round(x, y)

Rounds the number _x_ to _y_ number of decimal places.

```py {numberLines}
print(round(3.9, 2))
# 3.9
```

### str(x)

Converts number _x_ to the string data type.

```py {numberLines}
string_type = str(3.9)

print(type(string_type))
# <class 'str'>
```

### type(x)

Returns a string indicating the data type of _x_.

```py {numberLines}
print(type(26))
# <class 'int'>
```
