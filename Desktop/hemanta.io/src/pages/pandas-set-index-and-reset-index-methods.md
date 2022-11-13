---
title: "Pandas set_index() & reset_index() Methods"
date: "2021-08-10"
excerpt: "Learn how to convert a column into an index of a DataFrame and the reverse."
categories: ["Python-Pandas"]
---

```toc

```

### set_index()

Let’s read the ~~budget.xlsx~~ file into a DataFrame:

```py {numberLines}
import pandas as pd

budget = pd.read_excel("budget.xlsx")

budget
```

**Output:**

![Budget](../images/pandasIndex/budget.png)

Let’s say we want the ~~Store Code~~ column to serve as the index of our DataFrame. We can achieve this using the ~~set_index()~~ method:

```py {numberLines}
budget.set_index(keys="Store Code", inplace=True)

budget
```

**Output:**

![New Index](../images/pandasIndex/budgetIndex.png)

As we can see above, the ~~Store Code~~ column is no longer a regular column in our DataFrame - it has become the new index.

### reset_index()

There is a complementary method called ~~reset_index()~~, which moves the current index back into a column position and creates a brand new numeric pandas index.

```py {numberLines}
budget.reset_index()
```

**Output:**

![Index Reset](../images/pandasIndex/budgetResetIndex.png)
