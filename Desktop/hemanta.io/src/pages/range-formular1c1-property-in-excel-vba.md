---
title: "Range.FormulaR1C1 Property in Excel VBA"
date: "2021-09-07"
excerpt: "Learn to set the formula for the Range object using the R1C1-style notation."
categories: ["Excel VBA"]
---

The ~~FormulaR1C1~~ property helps us set the formula for the ~~Range~~ object using R1C1-style notation.

```vb {numberLines}
Sub Total()

' Adds the values at cell A1 & B1
Range("C1").FormulaR1C1 = "=SUM(RC[-2]:RC[-1])"

End Sub
```
