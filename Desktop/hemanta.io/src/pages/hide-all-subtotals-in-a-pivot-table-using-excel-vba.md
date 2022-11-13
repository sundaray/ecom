---
title: "Hide All Subtotals in a PivotTable Using Excel VBA"
date: "2021-12-12"
excerpt: "Hide all subtotals."
categories: ["Excel VBA"]
---

When you create a PivotTable, Excel includes subtotals by default. We can of course manually remove Subtotals. But if you're constantly hiding subtotals, you can save a little time by automating the process with a simple macro.

If you record a macro while hiding a Subtotal in a PivotTable, Excel produces code similar to this:

```vb {numberLines}
ActiveSheet.PivotTables("PivotTable1").PivotFields("Site").Subtotals = Array( _
    	False, False, False, False, False, False, False, False, False, False, False, False)
```

Excel passes an array with exactly 12 ~~False~~ settings. There are 12 instances of ~~False~~ because there are twelve types of Subtotals — ~~Sum~~, ~~Avg~~, ~~Count~~, ~~Min~~, and ~~Max~~, just to name a few. So when you turn off Subtotals while recording a macro, Excel sets each of the possible Subtotal types to ~~False~~.

An alternative way of turning off Subtotals is to first set one of the 12 Subtotals to ~~True~~. This automatically forces the other 11 Subtotal types to ~~False~~. We then set the same Subtotal to ~~False~~, effectively hiding all Subtotals.

In this piece of code, we are setting the first Subtotal to ~~True~~, and then setting it to ~~False~~. This removes the subtotal for ~~Site~~.

```vb {numberLines}
With ActiveSheet.PivotTables("PivotTable1").PivotFields("Site")
.Subtotals(1) = True
.Subtotals(1) = False
End With
```

In our macro, we use this trick to turn off subtotals for every pivot field in the active PivotTable.

```vb {numberLines}
Sub NoSubtotals()

Dim pt As PivotTable
Dim pf As PivotField

On Error Resume Next
For Each pt In ActiveSheet.PivotTables

  pt.ManualUpdate = True

  For Each pf In pt.PivotFields
    pf.Subtotals(1) = True
    pf.Subtotals(1) = False
  Next pf

  pt.ManualUpdate = False

Next pt

End Sub
```
