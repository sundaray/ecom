---
title: "Python Modules & Import Statement"
date: "2021-08-24"
excerpt: "Learn how one module can refer to code inside other modules."
categories: ["Python"]
---

```toc

```

A module is a python file with ~~.py~~ extension.

### import statement

One module can refer to the code written inside another module using the ~~import~~ statement.

We have two files - ~~vaccines.py~~ and ~~travel.py~~ - in the sme directory.

```py:title=vaccines.py {numberLines}
vaccine_list = ['Pfizer', 'AstraZeneca', 'Moderna']

effectiveness = {'Pfizer': 0.9, 'AstraZeneca': 0.85, 'Moderna': 0.95}
```

```py:title=travel.py {numberLines, 1-1, 4-4}
import vaccines

def travelPermit(vaccine):
    if vaccine in vaccines.vaccine_list:
        print("You can travel to Europe.")
    else:
        print("You can't travel to Europe.")
```

The ~~travel~~ module needs to refer to the code in the ~~vaccines~~ module. Therefore, on line 1, we import the ~~vaccines~~ module. This makes everything inside the ~~vaccines~~ module available to our program in the ~~travel~~ module.

To use any code from the ~~vaccines~~ module, we must qualify it with the name of the module. On line 4, we access the ~~vaccine_list~~ variable by tacking ~~vaccines.~~ before its name.

### Import a module with another name

We can import a module with another name using an alias.

For example, we can import the ~~vaccines~~ module under the alias ~~vac~~. (_you can choose any name you want._)

```py:title=travel.py {numberLines, 1-1}
import vaccines as vac

def travelPermit(vaccine):
    if vaccine in vac.vaccine_list:
        print("You can travel to Europe.")
    else:
        print("You can't travel to Europe.")


result = travelPermit("Covaxin")

print(result)
# You can't travel to Europe.
```

### Import only a part of a module

In the code example above, we imported the whole ~~vaccines~~ module, which contains two variables: ~~vaccine_list~~ & ~~effectiveness~~. Our program in the ~~travel~~ module needs access only to the ~~vaccine_list~~ variable. Therefore, we can choose to specifically import the ~~vaccine_list~~ variable instead of the whole ~~vaccines~~ module as shown below:

```py:title=travel.py {numberLines, 1-1}
from vaccines import vaccine_list

def travelPermit(vaccine):
    if vaccine in vaccine_list:
        print("You can travel to Europe.")
    else:
        print("You can't travel to Europe.")


result = travelPermit("Moderna")

print(result)
# You can travel to Europe.
```
