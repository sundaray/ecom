---
title: "Underscores in Numeric Literals in Python"
date: "2021-08-27"
excerpt: "Improve readability of big numbers using the underscore character."
categories: ["Python"]
---

Starting from Python 3.6, we can use the ~~\_~~ (underscore) character to separate digits in numeric literals.

In the example below, it is very difficult to tell immediately whether we are dealing with millions or billions.

```py {numberLines}
net_worth = 10000000000
```

In order to improve readability, we can use an underscore to separate thousands, millions, billions, and so on:

```py {numberLines}
net_worth = 100_00_000000
```

Now, we can immediately tell that ~~net_worth~~ equals one hundred billion without squinting our eyes to carefully count the zeros.
