---
title: "MongoDB Logical Operators - $nor Operator"
date: "2021-11-29"
excerpt: "$nor"
categories: ["MongoDB"]

---

###### Learn about the MongoDB logical ~~$or~~ operator in my blog post [here](https://hemanta.io/mongodb-logical-operators-or-operator/).

The ~~$nor~~ operator is syntactically like ~~$or~~ but behaves in the opposite way.

The ~~$nor~~ operator accepts multiple conditional expressions in the form of an array and returns documents that don't satisfy any of the given conditions.

```js {numberLines}
const query = async () => {
  const result = await Product.find({
    $nor: [{ brand: "Sony" }, { brand: "Sennheiser" }],
  })

  console.log(result)
}

query()
```

This query will match and return all the products that neither belong to the brand **Sony** nor **Sennheiser**.
