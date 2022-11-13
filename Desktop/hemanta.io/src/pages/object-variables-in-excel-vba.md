---
title: "Object Variables in Excel VBA"
date: "2021-12-07"
excerpt: "When speed is critical, use object variables."
categories: ["Excel VBA"]
---

An _object variable_ is one that represents an entire object, such as a range or a worksheet.

Object variables, like normal variables, are declared with the ~~Dim~~, ~~Private~~ or ~~Public~~ statement. For example, the following statement declares ~~MyCell~~ as a ~~Range~~ object variable:

```vb {numberLines}
Dim MyCell As Range
```

We use the ~~Set~~ keyword to assign an object to the variable. Here’s an example:

```vb {numberLines}
Set MyCell = Range("A1: C4")
```

> **Note:** Everytime VBA encounters a dot, as in **Worksheets(1).Range("A1")**, it takes time to resolve the reference. Using an object variable reduces the number of dots to be processed. The fewer the dots, the faster the processing time.
