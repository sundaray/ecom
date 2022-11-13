---
title: "Find Duplicate Rows in a Pandas DataFrame"
date: "2021-08-08"
excerpt: "Using the duplicated() method"
categories: ["Python-Pandas"]
---

Let’s read the ~~budget.xlsx~~ file into a DataFrame.

```py {numberLines}
import pandas as pd

budget = pd.read_excel("budget.xlsx")

budget
```

**Output:**

![Budget](../images/pandasFindDuplicates/budget.png)

We can see that we have duplicate rows in our DataFrame.

We can extract these duplicate rows using the ~~duplicated()~~ method.

```py {numberLines}
duplicates = budget.duplicated()

duplicates
```

The ~~duplicated()~~ method returns a boolean Series.

**Output:**

![Boolean Series](../images/pandasFindDuplicates/booleanSeries.png)

Note that the first occurrence of the row is marked as ~~False~~ (i.e. non-duplicate).

Next,we extract the duplicate rows as shown below:

```py {numberLines}
budget[duplicates]
```

**Output:**

![Duplicate Rows](../images/pandasFindDuplicates/duplicateRows.png)

###### Learn how to remove duplicate rows from a pandas DataFrame in my blog post [here](https://hemanta.io/remove-duplicate-rows-from-a-pandas-dataframe/).
