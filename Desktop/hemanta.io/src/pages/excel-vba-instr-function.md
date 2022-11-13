---
title: "Excel VBA - InStr Function"
date: "2022-05-11"
excerpt: "Learn how to find out the position of one string inside another."
categories: ["Excel VBA"]
---

We can find out the position of the first occurrence of one string within another using the ~~InStr()~~ function.

The ~~InStr()~~ function has the following syntax:

```vb {numberLines}
InStr(SeacrhString, searchChar)
```

If ~~SearchChar~~ is not found inside ~~SearchString~~, the ~~InStr()~~ function returns 0.

```vb {numberLines}
Sub InStr_Demo()

    Debug.Print InStr("LABEL BY RITU KUMAR", "LABEL") ' Returns 1

    Debug.Print InStr("LABEL LABEL BY RITU KUMAR", "LABEL") ' Returns 1 (the first occurence)

    Debug.Print InStr("LABEL BY RITU KUMAR", "LABL") ' Returns 0 (LABL was not found in LABEL BY RITU KUMAR)

End Sub
```
