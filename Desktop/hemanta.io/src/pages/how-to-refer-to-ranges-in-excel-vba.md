---
title: "How to Refer to Ranges in Excel VBA?"
date: "2021-09-02"
excerpt: "Learn how to refer to a single cell, a range of cells, a row and a column. We will also learn how to refer to a single cell using the Cells property."
categories: ["Excel VBA"]
---

```toc

```

In Excel, the ~~Range~~ object is a container for cells. It represents a range contained in a ~~Worksheet~~ object.

### Refer to a single cell

We can refer to a single cell as shown below:

```sh
Range("A1")
```

The address is always surrounded by double quotes.

### Refer to a range of cells

We can refer to a range of cells as shown below:

```sh
Range("A3: B5")
```

### Refer to a row

We can refer to an entire row, for example row 2, as shown below:

```sh
Range(2:2)
```

### Refer to a column

We can refer to an entire column, for example the third column, as shown below:

```sh
Range("C:C")
```

### Cells

We can also refer to ranges using the ~~Cells~~ property (_Note that ~~Cells~~ is **NOT** an object_).

The ~~Cells~~ property takes two arguments: a row number & a column number.

The following expression refers to the cell B2 on the active sheet.

```sh
Cells(2, 2)
```

We can also use the Cells property to refer to a multi-cell range.

```sh
Range(Cells(1,1), Cells(3, 3))
```

The ~~Cells~~ property becomes useful when we want to use variables as arguments.

### Offset

We can refer to a cell that is a particular number of rows and columns away from another cell using the ~~Offset~~ property of the ~~Range~~ object.

The ~~Offset~~ property takes two arguments: the no. of rows to offset and the no. of columns to offset.

The following expression refers to a cell that is one row below A1 and one column to the right of A1. In other words, it refers to the cell B2.

```sh
Range("A1").Offset(1, 1)
```
