---
title: "Remove Spaces From Strings in Python"
date: "2021-08-29"
excerpt: "strip(), lstrip(), rstrip()"
categories: ["Python"]
---

We can remove spaces from both ends of a string using the ~~strip()~~ method.

```py {numberLines}
topic = "   Machine Learning   "

print(topic.strip())
# "Machine Learning"
```

To remove space just from the right or left, we can use ~~rstrip()~~ & ~~lstrip()~~ respectively:

```py {numberLines}
topic = "   Machine Learning   "

print(topic.rstrip())
# "   Machine Learning"

print(topic.lstrip())
# "Machine Learning   "
```
