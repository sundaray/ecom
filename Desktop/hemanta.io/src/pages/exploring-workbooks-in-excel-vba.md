---
title: "Exploring Workbooks in Excel VBA"
date: "2021-09-13"
excerpt: "Add, Count, Close, Saved"
categories: ["Excel VBA"]
---

```toc

```

###### Note that the following code samples have been executed in the immediate window of the Visual Basic editor.

### Add

We can add a new workbook to the collection of workbooks currently open in Excel using the ~~Add~~ method of the ~~Workbooks~~ object. A method follows an object, separated by a single period (object.method).

```vb {numberLines}
Workbooks.Add
```

### Count

We can find out the number of items in the workbooks collection using the ~~Count~~ property, which returns a value.

```vb {numberLines}
? Workbooks.Count
 3
```

### Close

We can close all the open workbooks in Excel using the ~~Close~~ method.

```vb {numberLines}
Workbooks.Close
```

### Referring to a single workbook

```vb {numberLines}
? Workbooks(2).Name
Book1
```

We can find out the name of a workbook in the set of workbooks open in Excel using the ~~Name~~ property.

Note that we have specified the name of the workbook whose name we want to find out by number - by indicating its position in the collection. Another way we can refer to a single workbook in a collection of workbooks is by using its name, which we must put in quotation marks.

### Saved

```vb {numberLines}
? Workbooks(1).Saved
True
```

We can check whether a workbook has unsaved changes in it or not using the ~~Saved~~ property.

The ~~Saved~~ property returns a Boolean value: ~~True~~ or ~~False~~. Excel uses the value of the ~~Saved~~ property to decide whether to prompt you to save changes.

If you are writing a macro that modifies a workbook and you want to close the workbook without saving changes (and without displaying a warning prompt), make the macro change the ~~Saved~~ property of the workbook to ~~True~~.
