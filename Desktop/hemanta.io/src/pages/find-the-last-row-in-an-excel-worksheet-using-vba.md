---
title: "Find the Last Row in an Excel Worksheet Using VBA"
date: "2021-09-04"
excerpt: "Learn how to find the last row in an Excel worksheet."
categories: ["Excel VBA"]
---

The following line of code finds the last row in a sheet in which column A has a value and assigns it a label named ~~LastRow~~.

```vb {numberLines}
LastRow = Cells(Rows.Count, 1).End(xlUp).Row
```
