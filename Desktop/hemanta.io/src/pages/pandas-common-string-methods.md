---
title: "Pandas - Common String Methods"
date: "2021-08-13"
excerpt: "lower(), upper(), title(), len()"
categories: ["Python-Pandas"]
---

```toc

```

Let's read the ~~budget.xlsx~~ workbook into a DataFrame:

```py {numberLines}
import pandas as pd

data = pd.read_excel("budget.xlsx")

data
```

**Output:**

![Budget](../images/pandasString/budget.png)

### upper()

- **Series.str.upper:** Converts all characters to uppercase.

```py {numberLines}
data["Zone"].str.upper()
```

**Output:**

![Uppercase](../images/pandasString/upper.png)

### lower()

- **Series.str.lower:** Converts all characters to lowercase.

```py {numberLines}
data["Store Code"].str.lower()
```

**Output:**

![Lowercase](../images/pandasString/lower.png)

### title()

- **Series.str.title:** Converts the first character of each word to uppercase and remaining to lowercase.

```py {numberLines}
data["City"].str.title()
```

**Output:**

![Title](../images/pandasString/title.png)

### len()

- **Series.str.len:** Returns the length of each element in the Series.

```py {numberLines}
data["City"].str.len()
```

![Len](../images/pandasString/len.png)

### replace()

We will replace the character ~~D~~ in all the elements in the ~~Store Code~~ column with the character ~~D~~.

```py {numberLines}
data["Store Code"].str.replace("Z", "D")
```

**Output:**

![Replace](../images/pandasString/replace.png)
