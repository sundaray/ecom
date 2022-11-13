---
title: "Using the in Keyword to Check Whether a Value Exists in a Pandas Series"
date: "2021-08-10"
excerpt: "Using the in keyword"
categories: ["Python-Pandas"]
---

Let’s read the ~~budget.xlsx~~ file into a DataFrame:

```py {numberLines}
import pandas as pd

budget = pd.read_excel("budget.xlsx")

budget
```

**Output:**

![Budget](../images/pandasColumns/budget.png)

Let’s check whether the city ~~Jaipur~~ exists in the ~~City~~ column using the ~~in~~ keyword.

```py {numberLines}
“Jaipur” in budget[“City”].values

True # Returns a boolean
```
