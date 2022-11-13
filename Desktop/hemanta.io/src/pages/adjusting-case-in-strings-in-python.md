---
title: "Adjusting Case in Strings in Python"
date: "2021-08-29"
excerpt: "upper(), lower(), title() & capitalize()"
categories: ["Python"]
---

```toc

```

### upper()

Convert the entire string into uppercase:

```py {numberLines}
forecast = "linear regression"

print(forecast.upper())
# LINEAR REGRESSION
```

### lower()

Convert the entire string into lowercase:

```py {numberLines}
forecast = "LINEAR REGRESSION"

print(forecast.lower())
# linear regression
```

### title()

Capitalize the first letter of each word:

```py {numberLines}
comment = "bad programming is easy."

print(comment.title())
# Bad Programming Is Easy.
```

### capitalize()

Capitalize the first letter of each sentence:

```py {numberLines}
comment = "bad programming is easy."

print(comment.capitalize())
# Bad programming is easy.
```
