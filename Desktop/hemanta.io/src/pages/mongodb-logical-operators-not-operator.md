---
title: "MongoDB Logical Operators - $not Operator"
date: "2021-11-29"
excerpt: "$not"
categories: ["MongoDB"]

---

The ~~$not~~ operator represents the logical NOT operation that negates the given condition. Simply put, the ~~$not~~ operator accepts a conditional expression and matches all documents that don't satisfy it.

The following query returns all the products that are priced greater than 299.

```js {numberLines}
const query = async () => {
  const result = await Product.find({
    price: { $not: { $lt: 299 } },
  })

  console.log(result)
}

query()
```
