---
title: "Range.Count Property in Excel VBA"
date: "2021-09-08"
excerpt: "Learn how to calculate the number of cells in a range."
categories: ["Excel VBA"]
---

We can count the number of cells in a range using the ~~Range.Count~~ property, which returns a ~~Long~~ value.

> Note that the following code snippets have been executed in the immediate window of the visual basic editor.

```vb {numberLines}
? Range("A1:B2").Count
 4

' no. of cells in column A
? Range("A:A").Count
 1048576

' no. of cells in row 5
? Range("5:5").Count
 16384
```

###### Learn about data types in VBA in my blog post [here](https://hemanta.io/data-types-in-excel-vba/).

###### Learn how to run code snippets in the immediate window in my blog post [here](https://hemanta.io/visual-basic-editor-immediate-window/).
