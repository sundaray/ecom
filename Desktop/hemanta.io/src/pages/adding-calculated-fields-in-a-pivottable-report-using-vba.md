---
title: "Adding Calculated Fields in a PivotTable Report Using VBA"
date: "2022-04-14"
excerpt: "Adding calculated fields in a PivotTable report using VBA."
categories: ["Excel VBA"]
---

The following example adds a calculated field named ~~Total Discount~~ to the first PivotTable report on the active worksheet:

```vb {numberLines}
ActiveSheet.PivotTables(1).CalculatedFields.Add "Total Discount", _
        "=Discount + 'Promo Amount'", True
```

Note that the parameters _Name_ & _Formula_ (of data type String) are required.
