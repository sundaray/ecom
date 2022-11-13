---
title: "Controlling Program Flow in Excel VBA"
date: "2021-09-04"
excerpt: "Learn to conditionally execute one or more statements with If-Then-Else & If-Then-ElseIf-Then-Else statements.
"
categories: ["Excel VBA"]

---

```toc

```

### If-Then-Else statement

```sh {numberLines}
Sub Renovation()

Dim StoreCode As String

StoreCode = InputBox("Enter the store code: ")

If StoreCode = "ECB2" Then
MsgBox "The store is going under renovation"
Else
MsgBox "The store is not going under renovation."
End If

End Sub
```

### If-Then-ElseIf-Then-Else

```sh {numberLines}
Sub TravelToFrance()

Dim VaccineDoses As Integer

VaccineDoses = InputBox("How many vaccine doses have you taken: ")

If VaccineDoses = 0 Then
MsgBox "You can't travel to France"

ElseIf VaccineDoses = 1 Then
MsgBox "You can travel to France with a mandatory quarantine period of one week."

Else
MsgBox "You can travel to France without any mandatory quarantine requirements."
End If

End Sub
```
