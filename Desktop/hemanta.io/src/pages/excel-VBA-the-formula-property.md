---
title: "Excel VBA - The Formula Property"
date: "2022-05-10"
excerpt: "Learn how to insert a formula into a cell."
categories: ["Excel VBA"]
---

The ~~Formula~~ property represents the formula in a cell. This is a read-write property, so you can access it to either view the formula in a cell or insert a formula into a cell

For example, the following statement enters a ~~SUM~~ formula into cell ~~C1~~.

```vb {numberLines}
Range("C1").Formula = "=SUM(A1:B1)"
```

> Note that the formula is a text string and is enclosed in quotation marks. Also notice that the formula begins with an equal sign, as all formulas do.

If the formula itself contains quotation marks, thing get a little bit tricky. Say you want to insert this formula by using VBA:

```vb {numberLines}
=SUM(A1:A2)&" Units"
```

This formula displays a value followed by the word ~~Units~~. **To make this formula acceptable, you need to replace every quotation mark in the formula with two quotation marks**. Otherwise, VBA gets confused and claims that there is a syntax error. So, here is a statement that enters a formula that contains quotes:

```vb {numberLines}
Range("C1").Formula = "=SUM(A1:B1)& ""Units"""
```
