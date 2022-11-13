---
title: "Formatting Numbers in Python"
date: "2021-09-08"
excerpt: "Using format strings."
categories: ["Python"]
---

```toc

```

```py {numberLines}
quantity = 190

unit_price = 5.5

total_price = f"Total price: ${quantity*unit_price}"

print(total_price)
# Total price: $1045.0
```

The output of the code snippet above is ~~Total price: $1045.0~~.

Let’s say we want to show a comma in the thousands places and two digits for the pennies. Like so: ~~Total price: $1,045.00~~.

We can achieve this using a _format string_ inside the curly braces of an expression in an f-string.

**The format string starts with a colon and needs to be placed inside the closing curly brace, right up against the value being shown.**

To show a comma, we use a comma in the format string right after the colon, as shown in the following example:

```py {numberLines}
quantity = 190

unit_price = 5.5

total_price = f"Total price: ${quantity*unit_price:,}"

print(total_price)
# Your total price is $1,045.0
```

To get the pennies to show as two digits, follow the comma with ~~.2f~~.

~~.2f~~ means “two decimal places, fixed”. So, the final code to show the number with commas and two decimal places is as follows:

```py {numberLines}
quantity = 190

unit_price = 5.5

total_price = f"Total price: ${quantity*unit_price:,.2f}"

print(total_price)
# Your total price is $1,045.00
```

### Formatting percent numbers

Let’s say we want to add a sales tax of 5.5 percent. If we need to calculate the ~~total_price~~ that includes the sales tax, then we will have to write the sales tax as the decimal number 0.055 in our calculation.

Now, if we have to display the sales tax for people to read, then a better format would be 5.5%, rather than 0.055.

We can display 5.5%, using the concept of _format strings_, which we used above . The only change we need to do is: we need to replace the ~~f~~(_fixed numbers_) in ~~.2f~~ with ~~%~~.

```py {numberLines}
sales_tax = 0.055

print(f"Sales tax is {sales_tax:.2%}")
# Sales tax is 5.50%
```

The code snippet above multiplies the sales tax rate with 100 and follows it with a % sign.

Note that the number 2 is used for the number of digits, which can be any number of digits you want. If we replace 2 with 1, we will get an output as follows:

```py {numberLines}
sales_tax = 0.055

print(f"Sales tax is {sales_tax:.1%}")
# Sales tax is 5.5%
```

###### Learn about f-strings in python in my blog post [here](https://hemanta.io/python-data-types-strings/).
