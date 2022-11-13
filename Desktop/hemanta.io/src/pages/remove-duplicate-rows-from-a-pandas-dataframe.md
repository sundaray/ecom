---
title: "Remove Duplicate Rows in a Pandas DataFrame"
date: "2021-08-08"
excerpt: "Using the drop_duplicates() method"
categories: ["Python-Pandas"]
---

Let’s read the ~~budget.xlsx~~ file into a DataFrame.

```py {numberLines}
import pandas as pd

budget = pd.read_excel("budget.xlsx")

budget
```

**Output:**

![Budget](../images/pandasDuplicateRows/budget.png)

We can see that we have duplicate rows in our DataFrame.

We can remove them using the ~~drop_duplicates()~~ method.

```py {numberLines}
budget.drop_duplicates(inplace = True)

budget
```

**Output:**

![Duplicate Rows Removed](../images/pandasDuplicateRows/duplicatesRemoved.png)

The duplicate rows have been removed.

###### Learn how to find duplicate rows in a pandas DataFrame in my blog post [here](https://hemanta.io/find-duplicate-rows-in-a-pandas-dataframe/).
