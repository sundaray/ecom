---
title: "Hide Grand Totals in a Pivot Table Using Excel VBA"
date: "2021-12-09"
excerpt: "Hide Grand Totals."
categories: ["Excel VBA"]
---

The following Sub procedure loops through all the pivot tables in the active sheet and hides their grand totals:

```vb {numberLines}
Sub NoGrandTotal()

Dim pt As PivotTable

For Each pt In ActiveSheet.PivotTables
    pt.ColumnGrand = False
    pt.RowGrand = False
Next pt

End Sub
```
