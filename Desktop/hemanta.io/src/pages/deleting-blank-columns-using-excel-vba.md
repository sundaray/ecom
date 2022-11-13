---
title: "Deleting Blank Columns Using Excel VBA"
date: "2021-12-10"
excerpt: "Delete blank columns"
categories: ["Excel VBA"]
---

Blank columns in an Excel worksheet can cause unforeseen errors. If you find that you are manually searching out and deleting blank columns in your data sets, the following macro can automate that task.

```vb {numberLines}
Sub deleteBlankColumns()

Dim columnCount As Long

Dim i As Long

columnCount = ActiveSheet.UsedRange.Columns.Count

For i = columnCount To 1 Step -1

If WorksheetFunction.CountA(Columns(i).EntireColumn) = 0 Then

Columns(i).Delete

End If

Next i

End Sub
```

In the macro above, we are using the ~~UsedRange~~ property of the ~~ActiveSheet~~ object to define the range we are working with. The ~~UsedRange~~ property gives us a range that encompasses the cells that have been used to enter data.

We then establish a counter that starts at the last column of the used range, checking if the entire column is empty. If the entire column is indeed empty, we remove the column. We keep doing that same delete for every loop, each time incrementing the counter to the previous column.

> In Excel, ~~COUNTA~~ function is used to count non-blank cells. The non-blank cells could contain number, text, logical values, error values or empty text (" ").
