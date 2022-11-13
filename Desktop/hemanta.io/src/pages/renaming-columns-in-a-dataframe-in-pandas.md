---
title: "Renaming Columns in a DataFrame in Pandas"
date: "2021-08-06"
excerpt: "Learn how to rename column names in a DataFrame using the rename() method."
categories: ["Python-Pandas"]
---

Below, we have read an Excel file into a DataFrame.

```py {numberLines}
import pandas as pd

budget = pd.read_excel("budget.xlsx")
budget.head()
```

**Output:**

![Budget](../images/pandasRenameColumns/budget.png)

Let’s say we want to rename ~~Store Code~~ to ~~SAP Code~~ and ~~LTL Flag~~ to ~~LTL~~. We can do so using the ~~rename()~~ method.

```py {numberLines}
budget.rename(columns={"Store Code" : "SAP Code", "LTL Flag" : "LTL"}, inplace = True)
```

We pass a Python Dictionary to the ~~columns~~ parameter.

The keys of the dictionary are the column names that we want to change and the values are the names that we want the column names to change to. In addition, we pass ~~inplace = True~~ in order to make the change permanent.

Now, if we preview the ~~budget~~ DataFrame, we can see that the column names are changed.

```py {numberLines}
budget.head()
```

![Renamed Columns](../images/pandasRenameColumns/columnNames.png)
