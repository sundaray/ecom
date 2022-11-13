---
title: "Delete Rows or Columns From a Pandas DataFrame"
date: "2021-08-10"
excerpt: "Using drop(), pop() & del"
categories: ["Python-Pandas"]
---

```toc

```

### drop()

Let’s read the ~~budget.xlsx~~ file into a DataFrame:

```py {numberLines}
import pandas as pd

budget = pd.read_excel("budget.xlsx")

budget
```

**Output:**

![Budget](../images/pandasDelete/budget.png)

Note that we have a numeric index in our DataFrame.

Let’s say we want to delete the row with index number ~~0~~. We can use the ~~drop()~~ method, which by default, deletes rows.

```py {numberLines}
budget.drop(labels=0, inplace=True)

budget
```

**Output:**

![Delete Row](../images/pandasDelete/dropRow.png)

To delete multiple rows, we have to pass a list to the ~~labels~~ parameter.

Let’s delete rows ~~3~~ & ~~5~~:

```py {numberLines}
budget.drop(labels=[3, 5], inplace=True)

budget
```

**Output:**

![Delete Multiple Rows](../images/pandasDelete/dropRowMultiple.png)

What if we want to delete columns?

All we need to do is to pass ~~axis=1~~ to the ~~drop()~~ method.

> axis=1 represents columns. We can also pass ~~axis=”columns”~~.

Let’s delete the ~~City~~ column:

```py {numberLines}
budget.drop(labels="City", axis="columns", inplace=True)

budget
```

**Output:**

![Column Delete](../images/pandasDelete/cityColumn.png)

Similarly, we can delete more than one column by passing the column labels to a list, like the way we did for rows.

### pop()

For deleting columns, we have access to another method named ~~pop()~~, which removes the column from the DataFrame and also returns it.

```py {numberLines}
budget.pop("LTL Flag")
```

**Output:**

![Pop](../images/pandasDelete/pop.png)

Note that we _can’t_ delete multiple columns with the ~~pop()~~ method.

### del

Another way we can delete a column is by using the ~~del~~ keyword:

```py {numberLines}
del budget["July'19 Achievement"]

budget
```

**Output:**

![Del](../images/pandasDelete/del.png)
