---
title: "Copy a Range Using Excel VBA"
date: "2021-08-10"
excerpt: "Learn to copy both static and dynamic ranges."
categories: ["Excel VBA"]
---

The following code example copies the values in cells A1:A5 into cells C1:C5.

```sh {numberLines}
Sub CopyRange()

Range("A1:A5").Copy Range("C1")

End Sub
```

We can also include an optional ~~Destination~~ parameter to the ~~Copy~~ method. It specifies the new range to which the specified range will be copied.

Adding the ~~Destination~~ parameter can make our code easier to read.

```sh {numberLines}
Sub CopyRange()

Range("A1:A5").Copy Destination:=Range("C1")

End Sub
```

### Copying a variable-size range

When we need to copy a Range of cells but don’t know the exact row and column dimensions, we can use the ~~CurrentRegion~~ property.

The current region is a range bounded by any combination of blank rows and blank columns.

```sh {numberLines}
Sub CopyCurrentRegion()

Range("A1").CurrentRegion.Copy Sheets("Sheet 2").Range("A1")

End Sub
```
