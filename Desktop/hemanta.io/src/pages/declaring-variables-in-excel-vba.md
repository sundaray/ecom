---
title: "Declaring Variables in Excel VBA"
date: "2021-09-05"
excerpt: "Dim , Private, Public"
categories: ["Excel VBA"]
---

```toc

```

### Dim

In VBA, we can declare variables using a ~~Dim~~ statement.

```vb
Dim revenue As Long
```

If the above statement appears inside a procedure, the variable ~~revenue~~ can only be used in that procedure.

If the statement appears in the Declarations section of the module, the variable ~~revenue~~ is available to all procedures in the module, but not to procedures in other modules of the project.

### Not specifying a data type

If we don’t specify a data type, the ~~Variant~~ data type is assigned by default.

### Declaring several variables

We can also declare several variables in one statement:

```vb
Dim revenue As Long, profit As Long
```

### Public

We can make a variable available to all procedures in the project by preceding it with the ~~Public~~ statement.

```vb
Public revenue as Long
```

### Private

We can declare variables that can only be used by procedures in the same module using the ~~Private~~ statement.

```vb
Private MyName As String
```
