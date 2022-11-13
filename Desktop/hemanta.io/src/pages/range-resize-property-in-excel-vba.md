---
title: "Range.Resize Property in Excel VBA"
date: "2021-09-07"
excerpt: "Learn to resize a specified range."
categories: ["Excel VBA"]
---

We can resize a specified range using the ~~Range.Resize~~ property, which accepts two optional parameters: **RowSize**(_no. of rows in the new range_) & **ColumnSize**(_no. of new columns in the new range_).

```vb {numberLines}
Sub Resize()

Range("A1").Resize(1, 1).Select

End Sub
```

![Range Resize](../images/rangeResize/resizeOne.png)

```vb {numberLines}
Sub Resize()

Range("A1").Resize(2, 2).Select

End Sub
```

![Range Resize](../images/rangeResize/resizeTwo.png)
