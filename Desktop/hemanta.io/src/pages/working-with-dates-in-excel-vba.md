---
title: "Working With Dates in Excel VBA"
date: "2022-05-14"
excerpt: "Date data type & DateSerial() function."
categories: ["Excel VBA"]
---

You can use a string variable to store a date, but if you do, it's not a real date (_meaning that you can't perform date calculations with it_). Using the ~~Date~~ data type is a better way to work with dates.

A variable defined as a date uses 8 bytes of storage and can hold dates ranging from January 1, 0100, to December 31, 9999. That's a span of nearly 10,000 years—more than enough for even the most aggressive financial forecast! The ~~Date~~ data type is also useful for storing time-related data.

**In VBA, you specify dates and times by enclosing them between two hash marks (#).**

> **NOTE:** The range of dates that VBA can handle is much larger than Excel's own date range, which begins with January 1, 1900, and extends through December 31, 9999. Therefore, be careful that you don't attempt to use a date in a worksheet that is outside Excel's acceptable date range.

### About Excel's Date Bug

It is commonly known that Excel has a date bug: it incorrectly assumes that the year 1900 is a leap year. Even though there was no February 29, 1900, Excel accepts the following formula and displays the result as the 29th day of February 1900:

```vb {numberLines}
=Date(1900,2,29)
```

VBA doesn't have this date bug. The VBA equivalent of Excel's ~~DATE~~ function is ~~DateSerial~~. The following expression (correctly) returns March 1, 1900:

```vb {numberLines}
Sub ShowDate()

Debug.Print DateSerial(1900, 2, 29)

End Sub
```

Therefore, Excel's date serial number system doesn't correspond exactly to the VBA date serial number system. These two systems return different values for dates between January 1, 1900, and February 28, 1900.

Here is an example of declaring a variable as ~~Date~~ data type:

```vb {numberLines}
Sub ShowDate()

Dim today As Date

today = #5/22/2022#

Debug.Print today + 10

End Sub
```

> **NOTE:** Dates are always defined using month/day/year format, even if your system is set to display dates in a different format (for example, day/month/year).

If you use a message box to display a date, it's displayed according to your system's short date format. Similarly, a time is displayed according to your system's time format (either 12- or 24-hour). You can modify these system settings by using the Regional Settings option in the Windows Control Panel.
