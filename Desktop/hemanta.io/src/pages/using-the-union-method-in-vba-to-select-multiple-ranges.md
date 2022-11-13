---
title: "Using The Union Method in VBA to Select Multiple Ranges"
date: "2022-04-02"
excerpt: "Selecting noncontiguous ranges"
categories: ["Excel VBA"]
---

The ~~Union~~ method allows us to join two or more noncontiguous ranges. It creates a temporary object of the multiple ranges, which enables us to affect them at the same time.

The following code joins two noncontiguous ranges and formats the numbers inside them with two decimals.

```vb {numberLines, 5-5}
Sub Union()

Dim unionRange As Range

Set unionRange = Application.Union(Range("C4:C5"), Range("F5:F6"))

With unionRange
    .NumberFormat = "0.00"
End With

End Sub
```
