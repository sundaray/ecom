---
title: "Not Operator in Excel VBA"
date: "2021-09-10"
excerpt: "Performs logical negation on a Boolean expression."
categories: ["Excel VBA"]
---

The ~~Not~~ operator performs logical negation on a ~~Boolean~~ expression.

> The following code snippets have been executed in the immediate window of the visual basic editor.

```vb {numberLines}
? Not False
True

? Not True
False
```

The following ~~Sub~~ procedure toggles the bold property of the ~~Font~~ object for the selected range.

```vb {numberLines}
Sub ToggleBold()

Selection.Font.Bold = Not Selection.Font.Bold

End Sub
```
