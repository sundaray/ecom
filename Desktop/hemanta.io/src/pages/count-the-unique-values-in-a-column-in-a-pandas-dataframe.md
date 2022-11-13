---
title: "Count the Unique Values in a Column in a Pandas DataFrame"
date: "2021-08-08"
excerpt: "Using the value_counts() method"
categories: ["Python-Pandas"]
---

```toc

```

### value_counts()

We can return counts of unique values in a column using the ~~value_counts()~~ method.

Below, we have read an Excel file into a DataFrame.

```py {numberLines}
import pandas as pd

budget = pd.read_excel("budget.xlsx")

budget
```

**Output:**

![Budget](../images/pandasFilter/budget.png)

Let's count the unique values in the ~~LTL Flag~~ column:

```py {numberLines}
budget["LTL Flag"].value_counts()
```

**Output:**

![Unique Value Counts](../images/pandasValueCounts/valueCounts.png)

### unique()

If we want to find out the unique values (_including NaN_) in a column without the count, we can use the ~~unique()~~ method.

```py {numberLines}
budget["LTL Flag"].unique()

array([nan, 'LTL', 'NON-LTL'], dtype=object)
```

### nunique()

We can find out the total count of unique values in a column using the ~~nunique()~~ method. ~~nunique()~~ by default, does not count null values. So, we pass ~~dropna = False~~ to count the null values as well.

```py {numberLines}
budget["LTL Flag"].nunique(dropna = False)

3
```
