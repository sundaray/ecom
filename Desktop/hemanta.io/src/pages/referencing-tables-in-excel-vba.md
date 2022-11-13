---
title: "Referencing Tables in Excel VBA"
date: "2021-09-12"
excerpt: "Using the ListObjects object."
categories: ["Excel VBA"]
---

```toc

```

Let’s say we have the following data set in a table.

![Data Set](../images/vbaTable/dataSet.png)

We can reference the table as ~~ActiveSheet.Range("store_details").Select~~. (_~~store_details~~ is the name of the table._)

However, we have access to more of the properties and methods that are unique to tables if we use the ~~ListObjects~~ object.

### Range

```vb {numberLines}
Sub TableDemo()

ActiveSheet.ListObjects(1).Range.Select

End Sub
```

**Result:**

![Range](../images/vbaTable/range.png)

### DataBodyRange

```vb {numberLines}
Sub TableDemo()

ActiveSheet.ListObjects(1).DataBodyRange.Select

End Sub
```

**Result:**

![Data Body Range](../images/vbaTable/datBodyRange.png)

### HeaderRowRange

```vb {numberLines}
Sub TableDemo()

ActiveSheet.ListObjects(1).HeaderRowRange.Select

End Sub
```

**Result:**

![Header Row Range](../images/vbaTable/headerRowRange.png)

### Referencing specific columns

We can reference a specific column using the header name of the column.

The following example selects _only_ the data of the ~~FORMAT~~ column of the table.

```vb {numberLines}
Sub TableDemo()

ActiveSheet.ListObjects(1).ListColumns("FORMAT").DataBodyRange.Select

End Sub
```

**Result:**

![List Column](../images/vbaTable/listColumn.png)

### Convert a table to range

The following procedure converts the table in the active sheet to range.

```vb {numberLines}
Sub TableToRange()
 Dim wrksht As Worksheet

 Set wrksht = ActiveSheet

 wrksht.ListObjects(1).Unlist
End Sub
```
