---
title: "Equality & Inequality Operator in Excel VBA"
date: "2021-09-05"
excerpt: "== & <>"
categories: ["Excel VBA"]
---

```toc

```

### Equality operator

In VBA, the assignment operator (~~=~~) also acts as the equality operator. We can check whether two values are equal using the ~~=~~ operator.

```vb {numberLines}
? 10 = 11

False
```

Similarly, we also have an inequality operator.

### Inequality operator

~~<>~~ is the inequality operator in VBA.

```sh {numberLines}
? 10 <> 20

True
```

We can use both the equality and inequality operator with the string data type as well.

```vb {numberLines}
? "hello world" = "hello world"

True
```

It is important to note that **case sensitivity matters** while comparing string values.

```vb {numberLines}
? "Hello World" = "hello world"

False
```

```sh {numberLines}
? "Hello" <> "hello"

True
```
