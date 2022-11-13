---
title: "MongoDB Logical Operators - $or Operator"
date: "2021-11-29"
excerpt: "$or"
categories: ["MongoDB"]

---

###### Learn about the logical ~~$and~~ operator in my blog post [here](https://hemanta.io/mongodb-logical-operators-and-operator/).

With the ~~$or~~ operator, we can pass multiple conditions wrapped in an array and the documents satisfying either of the conditions will be returned.

This operator is used when we have multiple conditions and we want to find documents that match at least one condition.

The following query finds all the products that are either from the brand **Sony** or **Sennheiser**:

```js {numberLines}
const query = async () => {
  const result = await Product.find({
    $or: [{ brand: "Sony" }, { brand: "Sennheiser" }],
  })

  console.log(result)
}

query()
```

Executing the query above gives us the following result:

```sh {numberLines}
 [
   {
     _id: new ObjectId("61a366483394265a2770d75f"),
     name: 'IE 300',
     brand: 'Sennheiser',
     category: 'Earphones',
     price: 299.99,
     soldQty: 540,
     __v: 0
   }
 ]
```

Clearly, we don’t have any products from the brand **Sony**.
