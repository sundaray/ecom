---
title: "Assignment Expressions in Python"
date: "2021-08-27"
excerpt: "Learn how to use the walrus operator, introduced in Python 3.8"
categories: ["Python"]
---

First, let's understand the difference between expressions and statements.

> An expression resolves to a value, while a statement does not. For example, ~~4-2~~ is an expression. ~~if~~ clauses, ~~for~~ and ~~while~~ loops are all statements. Function and class definitions are statements as well.

An assignment expression is a new syntax introduced in Python 3.8. It is commonly known as the walrus operator (~~:=~~ a colon followed by an equal sign).

The walrus operator assigns a value to a variable but acts as an expression instead of an assignment. The best way to understand the usage of the walrus operator is through an example:

```py {numberLines}
revenue = 1000000

opex = 900000

profit = revenue - opex

if profit == 100000:
    bonus = profit * .1
    print(bonus)
else:
    print("No bonus this year.")

# output
# 10000.0
```

In the code example above, on line 5, we assigned the value returned from the expression ~~revenue - opex~~ to the ~~profit~~ variable. Then, we used the ~~profit~~ variable as part of a conditional expression in the ~~if~~ statement on line 7.

The most common use case of the walrus operator is the scenario above - when a value needs to be evaluated and then immediately used in the statements that follow.

We can rewrite the program above using the walrus operator as follows:

```py {numberLines}
revenue = 1000000

opex = 900000

if profit := revenue - opex:
    bonus = profit * .1
    print(bonus)
else:
    print("No bonus this year.")

# output
# 10000.0
```

In the code example above, on line 5, we have computed the result of an expression (~~revenue - opex~~) and assigned the value to the ~~profit~~ variable, all in a single statement.

As we can see, using the walrus operator helps us reduce code repetition.
