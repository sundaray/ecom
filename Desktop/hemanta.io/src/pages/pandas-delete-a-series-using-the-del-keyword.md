---
title: "Pandas - Delete a Series Using the del keyword"
date: "2021-08-15"
excerpt: "Delete a Pandas column using the del keyword"
categories: ["Python-Pandas"]
---

Let’s read the ~~budget.xlsx~~ file into a DataFrame:

```py {numberLines}
import pandas as pd

data = pd.read_excel("budget.xlsx", sheet_name="sheet2")

data
```

**Output:**

![Budget](../images/pandasDel/budget.png)

We can delete the ~~LTL Flag~~ column using the ~~del~~ keyword as shown below:

```py {numberLines}
del data["LTL Flag"]

data
```

**Output:**
![Delete](../images/pandasDel/del.png)
