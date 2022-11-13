---
title: "Excel VBA - Using the Offset Property to Refer to a Range"
date: "2022-04-29"
excerpt: "Offset"
categories: ["Excel VBA"]
---

Offset enables you to manipulate a cell based on the location of another cell, such as the active cell.

The syntax for the ~~Offset~~ property is as follows:

```vb {numberLines}
Range.Offset(RowOffset, ColumnOffset)
```

For example, the following code affects cell ~~F5~~ from cell ~~A1~~:

```vb {numberLines}
Range("A1").Offset(RowOffset:=4, ColumnOffset:=5)
```

Or, shorter yet, you can write this:

```vb {numberLines}
Range("A1").Offset(4,5)
```

The count of the rows and columns starts at ~~A1~~ but does not include ~~A1~~.

If you need to go over only a row or a column, but not both, you don’t have to enter both the row and the column parameters. To refer to a cell one column over, use one of these lines:

```vb {numberLines}
Range("A1").Offset(ColumnOffset:=1)

Range("A1").Offset(,1)
```

Both of these lines have the same meaning, so the choice is yours. If you use the second line, make sure to include the comma so Excel knows that the 1 refers to the ~~ColumnOffset~~ argument.

Referring to a cell one row up is similar:

```vb {numberLines}
Range("B2").Offset(RowOffset:=-1)

Range("B2").Offset(-1)
```
