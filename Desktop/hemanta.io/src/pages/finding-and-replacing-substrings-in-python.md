---
title: "Finding & Replacing Substrings in Python"
date: "2021-08-29"
excerpt: "find(), index(), rfind(), rindex(), startswith(), endswith(), replace()"
categories: ["Python"]
---

```toc

```

In Python, strings are an **immutable** sequence of characters.

### find() & index()

We can search for the first occurrence of a certain character or substring within a string and return the index using the ~~find()~~ and ~~index()~~ methods.

```py {numberLines}
weekend = 'Saturday Sunday'

print(weekend.find('Sun'))
# 9

print(weekend.index('Sun'))
# 9
```

The only difference between ~~find()~~ and ~~index()~~ is that, when the search string is not found, ~~find()~~ returns ~~-1~~, while ~~index()~~ raises a ~~ValueError~~.

```py {numberLines}
weekend = 'Saturday Sunday'

print(weekend.find('Mon'))
# -1

print(weekend.index('Mon'))
# ValueError: substring not found
```

### rfind() & rindex()

The related ~~rfind()~~ and ~~rindex()~~ methods work similarly, except they search for the first occurrence from the end rather than the beginning of the string:

```py {numberLines}
weekend = 'Saturday Sunday'

print(weekend.rfind('ay'))
# 13

print(weekend.rindex('ay'))
# 13
```

### startswith() & endswith()

We can also check for a certain character or substring at the beginning or end of a string using the ~~startswith()~~ and ~~endswith()~~ methods respectively:

```py {numberLines}
weekend = 'Saturday Sunday'

print(weekend.startswith('T'))
# False

print(weekend.endswith('ay'))
# True
```

### replace()

We can replace a given substring with a new string using the ~~replace()~~ method.

The ~~replace()~~ method replaces all occurrences of the input and returns a new string.

```py {numberLines}
weekend = 'Saturday Sunday'

weekend_mod = weekend.replace('day', 'night')

print(weekend_mod)
# Saturnight Sunnight
```
