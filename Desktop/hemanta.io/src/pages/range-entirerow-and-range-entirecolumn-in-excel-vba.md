---
title: "Range.EntireRow & Range.EntireColumn in Excel VBA"
date: "2021-09-06"
excerpt: "Learn how to select an entire row or column using VBA."
categories: ["Excel VBA"]
---

```toc

```

We can select an entire row or an entire column using the ~~EntireRow~~ & ~~EntireColumn~~ properties of the ~~Range~~ object respectively.

### Range.EntireColumn

```vb {numberLines}
Sub SelectEntireColumn()

ActiveCell.EntireColumn.Select

End Sub
```

![Entire Column](../images/vbaEntire/entireColumn.png)

### Range.EntireRow

```vb {numberLines}
Sub SelectEntireColumn()

ActiveCell.EntireRow.Select

End Sub
```

![Entire Row](../images/vbaEntire/entireRow.png)
