---
title: "Most Commonly Used Range Object Properties in Excel VBA"
date: "2021-09-02"
excerpt: "Value, Count, Row, Column"
categories: ["Excel VBA"]
---

```toc

```

The ~~Range~~ object, like any other object in Excel, has both properties and methods. The following are some of the most commonly used ~~Range~~ object properties.

### Value

The ~~Value~~ property represents the value contained in a cell. We can both read and change a value.

The following expression shows the value in cell A1.

```sh
Range("A1").Value
```

**Note:** ~~Value~~ is the default property for a ~~Range~~ object. So, if we omit a property for the ~~Range~~ object, Excel uses the ~~Value~~ property. The following statements both enter a value of 10 into the cell A1 of the active worksheet.

```sh {numberLines}
Range("A1").Value = 10

Range("A1") = 10
```

### Count

The ~~Count~~ property returns the number of cells in a range. The following expression displays the no. of cells in the range A1:C5.

```sh
Range("A1:C5").Count
```

### Column

The ~~Column~~ property returns the _column_ number of a single cell range.

```sh
MsgBox Range("C4").Column
```

The statement above displays 3 because cell C4 is in the third column.

### Row

The ~~Row~~ property returns the _row_ number of a single cell range.

```sh
MsgBox Range("C4").Row
```

The statement above returns 4 because cell C4 is in the fourth row.
