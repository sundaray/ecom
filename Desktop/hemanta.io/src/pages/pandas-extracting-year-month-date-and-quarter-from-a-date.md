---
title: "Pandas - Extracting Year, Month, Day & Quarter From a Date"
date: "2021-08-15"
excerpt: "Using the Pandas dt accessor object."
categories: ["Python-Pandas"]
---

Let’s read the ~~budget.xlsx~~ file into a DataFrame:

```py {numberLines}
import pandas as pd

data = pd.read_excel("budget.xlsx", parse_dates=["Opening Date"])

data
```

**Output:**

![Budget](../images/pandasDt/budget.png)

Let;s return the data type of each column using ~~dtypes~~:

```py {numberLines}
data.dtypes
```

**Output:**

![Data Types](../images/pandasDt/dtypes.png)

The ~~Opening Date~~ column contains ~~datetime~~ objects.

We can extract various parts from the date - year, month, date & quarter - using Pandas ~~dt~~, which is the accessor object to the datetime properties of a Pandas Series.

> Note that the ~~dt~~ accessor object works only with ~~datetime~~ data types.

```py {numberLines}
data["Opening Date"].dt.year
```

**Output:**

![Year](../images/pandasDt/year.png)

```py {numberLines}
data["Opening Date"].dt.month
```

**Output:**

![Month](../images/pandasDt/month.png)

```py {numberLines}
data["Opening Date"].dt.day
```

**Output:**

![Day](../images/pandasDt/day.png)

```py {numberLines}
data["Opening Date"].dt.quarter
```

**Output:**

![Quarter](../images/pandasDt/quarter.png)
