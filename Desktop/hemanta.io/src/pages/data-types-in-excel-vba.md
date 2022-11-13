---
title: "Data Types in Excel VBA"
date: "2021-09-05"
excerpt: "Byte, Integer, Long, Double, String, Boolean, Date, Object, Variant"
categories: ["Excel VBA"]
---

```toc

```

Data type determines what type of data a variable can hold.

### Byte

~~Byte~~ variables can store numbers ranging in value from 0-255.

### Integer

~~Integer~~ variables can store variables ranging in value from -32678 to 32676.

> An integer is a number with no decimals. It includes both positive and negative counting numbers and zero.

### Long (long integer)

~~Long~~ variables can store numbers ranging in value from -2,147,483,648 to 2,147,483,647.

###### Whenever declaring variables to hold whole numbers, prefer the ~~Long~~ data type as it accommodates a large range of numbers.

### Double

The ~~Double~~ data type holds double-precision **floating point numbers** in the range -1.79769313486231E308 to -4.94065645841247E-324 for negative values; 4.94065645841247E-324 to 1.79769313486232E308 for positive values.

### String

We use the ~~String~~ data type to store text (_a collection of characters_).

### Boolean

~~Boolean~~ variables can only be ~~True~~ or ~~False~~.

### Date

~~Date~~ variables store floating-point numbers that represent dates ranging from 1 January 100, to 31 December 9999, and times from 0:00:00 to 23:59:59.

**Date literals must be enclosed within hash signs (~~#~~), for example, #January 1, 1993# or #1 Jan 93#.**

Date variables display dates according to the short date format recognized by your computer. Times display according to the time format (either 12-hour or 24-hour) recognized by your computer.

When other numeric types are converted to Date, values to the left of the decimal represent date information, while values to the right of the decimal represent time. Midnight is 0 and midday is 0.5.

**Example:**

```vb {numberLines}
Sub birthday()

Dim my_birthday As Date
Dim name As String

' Note that the date is enclosed within hash symbols.
my_birthday = #4/26/1987#

name = MonthName(Month(my_birthday))

Debug.Print name

End Sub
```

### Object

~~Object~~ variables refer to objects.

We assign object references to variables declared as ~~Object~~ data types using the ~~Set~~ statement.

```vb {numberLines}
Sub DataType()

Dim destination As Range

Set destination = Range("C1")

Range("A1").Copy destination

End Sub
```

### Variant

The ~~Variant~~ data type is the data type for all variables that are not explicitly declared as some other type (using statements such as ~~Dim~~, ~~Private~~, ~~Public~~, or ~~Static~~).

###### Learn how to declare variables in Excel VBA in my blog post [here](https://hemanta.io/declaring-variables-in-excel-vba/).

A ~~Variant~~ is a special data type that can contain any kind of data except fixed-length ~~String~~ data.
