---
title: "Multi-line Strings in Python"
date: "2022-07-05"
excerpt: "Multi-line strings"
categories: ["Python"]
---

We can create a string that occupies multiple lines by using three quote-marks (~~"""~~ or ~~'''~~) instead of one.

When we use three quote-marks we tell the program that the string does not end until the next triple quote.

```py {numberLines}
name = '''Ships at a distance
have every man's wish
on board
'''

print(name)
# Ships at a distance
# have every man's wish
# on board
```
