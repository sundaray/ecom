---
title: "The Interior Property in Excel VBA"
date: "2022-05-22"
excerpt: "Learn how to add/change the background color of a range."
categories: ["Excel VBA"]
---

A Range object’s ~~Interior~~ property returns an ~~Interior~~ object.

For example, the following statement changes the ~~Color~~ property of the ~~Interior~~ object contained in the ~~Range~~ object:

```vb {numberLines}
Range("A1").Interior.Color = 8421504
```

In other words, this statement changes the cell’s background to middle gray.

We can also use the ~~RGB()~~ function to change a cell’s background color:

```vb {numberLines}
Range("A1").Interior.Color = RGB(0, 0, 0) 'black

Range("A1").Interior.Color = RGB(255, 0, 0) 'pure red

Range("A1").Interior.Color = RGB(0, 0, 255) 'pure blue

Range("A1").Interior.Color = RGB(198, 212, 60) 'ugly green

Range("A1").Interior.Color = RGB(128, 128, 128) 'middle gray
```

We also have access to Excel’s built-in color constants: vbBlack, vbRed, vbGreen, vbYellow, vbBlue, vbMagenta, vbCyan or vbWhite.

For example, the following statement makes cell A1 blue:

```vb {numberLines}
Range("A1").Interior.Color = vbBlue
```
