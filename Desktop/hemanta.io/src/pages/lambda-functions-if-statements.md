---
title: "Lambda Functions: If Statements"
date: "2022-03-07"
excerpt: "Lambda functions in Python."
categories: ["Python"]
---

###### Learn about lambda expressions in Python in my blog post [here](https://hemanta.io/lambda-expressions-in-python/)

We can make lambda functions more complex using a modified form of an _if_ statement.
For example, consider the following function:

```py {numberLines}
def result(x):
    if x >= 40:
        return "PASS"
    else:
        return "FAIL"

print(result(45))
```

Below is a lambda function that does the same thing:

```py {numberLines}
result = lambda x: "PASS" if x >= 40 else "FAIL"
```

In general, the syntax for an _if_ statement in a lambda function is:

```sh
lambda x: [OUTCOME IF TRUE] if [CONDITIONAL] else [OUTCOME IF FALSE]
```
