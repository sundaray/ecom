---
title: "MongoDB Conditional Operators - $gt & $gte Operators"
date: "2021-11-29"
excerpt: "Greater than ($gt) & Greater than or equal to ($gte)"
categories: ["MongoDB"]
---

The ~~$gt~~ keyword can be used to find documents where the value of the field is greater than the value in the query. Similarly the ~~$gte~~ keyword is used to find documents where the value of the field is the same as or greater than the given value.

The following query finds all the products whose prices are _greater than_ 299.99

```js {numberLines}
const query = async () => {
  const result = await Product.find({
    price: { $gt: 299.99 },
  })

  console.log(result)
}

query()
```

The following query finds all the products whose prices are _greater than or equal to_ 299.99

```js {numberLines}
const query = async () => {
  const result = await Product.find({
    price: { $gte: 299.99 },
  })

  console.log(result)
}

query()
```
