---
title: "Working in Interactive Mode in Matplotlib"
date: "2022-04-12"
excerpt: "Learn how to update your graph after the execution of each statement."
categories: ["Matplotlib"]
---

Matplotlib can be used in interactive or non-interactive mode. In the interactive mode, the graph display gets updated after each statement.

We can set the interactive mode _ON_ using the following steps:

### Step-1

Import ~~matplotlib~~ & ~~pyplot~~ libraries:

```py {numberLines}
import matplotlib as mpl

import matplotlib.pyplot as plt
```

### Step-2

Set the interactive mode to ON.

```py {numberLines}
plt.ion()
```

We can check the status of the interactive mode using the following command:

```py {numberLines}
mpl.is_interactive()
```

We get the output as ~~True~~.
