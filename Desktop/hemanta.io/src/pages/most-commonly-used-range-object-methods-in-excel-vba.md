---
title: "Most Commonly Used Range Object Methods in Excel VBA"
date: "2021-09-01"
excerpt: "Select, Copy, Clear & Delete"
categories: ["Excel VBA"]
---

```toc

```

A VBA method performs an action.

### Select

We use the ~~Select~~ method to select a range of cells. The following statement selects a range in the active worksheet.

```sh
Range("A1:C6").Select
```

### Copy

The following procedure copies the range ~~A1:A4~~ and pastes it into a new range beginning at cell B1.

```sh {numberLines}
Sub CopyRange()

Range("A1:A4").Copy Range("B1")

End Sub
```

In the code example above, the argument (~~Range("B1")~~) that we pass to the ~~Copy~~ method corresponds to the destination range for the copy operation.

### Clear

The ~~Clear~~ method deletes all the contents of a range, as well as all the cell formatting. The following statement clears both the contents and the formatting in column B.

```sh
Columns("B:B").Clear
```

There are two related methods: ~~ClearContents~~ & ~~ClearFormats~~. The ~~ClearContents~~ method deletes the contents of the range but leaves the formatting intact. Conversely, the ~~ClearFormats~~ method deletes the formatting but leaves the contents of the range intact.

### Delete

The following statement deletes row 5.

```sh
Rows("5:5").Delete
```

When we delete a range, Excel shifts the remaining cells around to fill up the range we deleted.
