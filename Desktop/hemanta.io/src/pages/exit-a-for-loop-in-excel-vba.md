---
title: "Exit a For loop in Excel VBA"
date: "2021-09-11"
excerpt: "Using the Exit For statement."
categories: ["Excel VBA"]
---

We can exit a [For...Next](https://hemanta.io/for-next-loop-in-excel-vba/) or [For Each...Next](https://hemanta.io/for-each-next-loop-in-vba/) loop using an ~~Exit For~~ statement.

~~Exir For~~ transfers control to the statement following the ~~Next~~ statement.

In the example below, we loop through a range in column A. We square the value for each cell until we reach the cell with value 6 when we exit the ~~For~~ loop.

```vb {numberLines, 10}
Sub ExitForDemo()

    Dim i As Integer
    Dim LastRow As Integer

    LastRow = Cells(Rows.Count, 1).End(xlUp).Row

    For i = 1 To LastRow
        If Cells(i, 1).Value = 6 Then
            Exit For
        Else
            Cells(i, 1).Value = Cells(i, 1).Value * Cells(i, 1).Value
        End If
    Next i

End Sub
```
