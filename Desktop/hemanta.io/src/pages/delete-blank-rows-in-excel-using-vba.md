---
title: "Delete Blank Rows in Excel Using VBA"
date: "2021-09-10"
excerpt: "Delete a row if the cell on column A for that row is empty."
categories: ["Excel VBA"]
---

The following procedure will loop through the cell range starting from the last row to the first row in column A. For each cell, the procedure will check if the cell is empty. If true, the entire row will be deleted and the procedure will move on to the next cell.

```vb {numberLines}
Sub DeleteRow()

Dim i As Integer
Dim LastRow As Integer

LastRow = Cells(Rows.Count, 1).End(xlUp).Row

For i = LastRow To 1 Step -1
    If IsEmpty(Cells(i, 1)) Then
        Cells(i, 1).EntireRow.Delete
    End If
Next i

End Sub
```

###### Learn about For-Next loop in my blog post [here](https://hemanta.io/for-next-loop-in-excel-vba/).

###### Learn how to select an entire row or column in my blog post [here](https://hemanta.io/range-entirerow-and-range-entirecolumn-in-excel-vba/).
