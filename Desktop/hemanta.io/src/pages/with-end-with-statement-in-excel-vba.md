---
title: "With...End With Statement in Excel VBA"
date: "2021-09-11"
excerpt: "With...End With"
categories: ["Excel VBA"]
---

We can perform a series of statements on a specified object without specifying the name of the object multiple times using the ~~With...End With~~ statement.

Within the ~~With~~ block, we can access the methods and properties of only the specified object without qualifying them.

**Syntax**

```vb {numberLines}
With expression ' expression evaluates to an object
    [ Statements ]
End With ' Terminates the definition of the With block
```

**Example:**

```vb {numberLines}
Sub ModifyFont()

With Selection.Font
    .Size = 14
    .Bold = True
    .Italic = True
    .Color = RGB(0, 255, 0)
End With

End Sub
```
