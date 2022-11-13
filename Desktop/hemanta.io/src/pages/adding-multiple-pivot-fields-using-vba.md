---
title: "Adding Multiple Pivot Fields Using VBA"
date: "2022-03-24"
excerpt: "PivotTable.AddFields()"
categories: ["Excel VBA"]
---

We can add row, column and page fields to a PivotTable report using the ~~PivotTable.AddFields()~~ method.

```vb {numberLines}
ActiveSheet.PivotTables(1).AddFields PageFields:=Array("Brand", "Division" "Month")

ActiveSheet.PivotTables(1).PivotFields("Sale Quantity").Orientation = xlDataField
```

In the code block above, we have added the ~~Sale Quantity~~ field to the Values area of the pivot table by changing its ~~Orientation~~ property to ~~xlDataField~~.

> Note that to specify two or more fields in the ~~AddFields()~~ method, we wrap these fields in an array function.
