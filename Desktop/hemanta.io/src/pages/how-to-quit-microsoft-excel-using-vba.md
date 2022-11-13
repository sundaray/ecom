---
title: "How to Quit Microsoft Excel Using VBA?"
date: "2021-09-08"
excerpt: "By calling the Quit method on the Application object."
categories: ["Excel VBA"]
---

We can quit Microsoft Excel by calling the ~~Quit~~ method on the ~~Application~~ object, which sits at the top of the Excel object model hierarchy.

```vb {numberLines}
Sub CloseExcel()

Application.Quit

End Sub
```

Note that if you have any unsaved changes in your workbook, calling the ~~Quit~~ method will prompt you with a dialogue box that will ask you whether you want to save the changes.

The following ~~Sub~~ procedure will save all open workbooks and then quit Excel.

```vb {numberLines}
For Each Workbook In Application.Workbooks
Workbook.Save
Next Workbook
Application.Quit
```
