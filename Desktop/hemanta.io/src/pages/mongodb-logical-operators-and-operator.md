---
title: "MongoDB Logical Operators - $and Operator"
date: "2021-11-28"
excerpt: "$and"
categories: ["MongoDB"]

---

Logical operators in mongoDB help us build logical combinations of multiple criteria in the same query.

Let’s have a look at the ~~$and~~ operator.

In a MongoDB Atlas cloud database, I have a ~~products~~ collection that contain the following four records:

```sh {numberLines}
 [
   {
     _id: new ObjectId("61a366483394265a2770d75c"),
     name: 'Airpods Pro',
     brand: 'Apple',
     category: 'Earphones',
     price: 99.99,
     soldQty: 240,
     __v: 0
   },
   {
     _id: new ObjectId("61a366483394265a2770d75d"),
     name: 'MacBook Pro',
     brand: 'Apple',
     category: 'Laptops',
     price: 1499.99,
     soldQty: 110,
     __v: 0
   },
   {
     _id: new ObjectId("61a366483394265a2770d75e"),
     name: 'Canon 80D DSLR Camera',
     brand: 'Cannon',
     category: 'Camera',
     price: 1099,
     soldQty: 360,
     __v: 0
   },
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

Using the ~~$and~~ operator we can have any number of conditions wrapped in an array and the operator will return only the documents that satisfy all the conditions.

Let’s say we want to determine the number of products that are from the brand **Apple** and belong to the category **Earphones**.

The query must have two conditions:

- The field ~~brand~~ should have a value of **Apple**.
- The field ~~category~~ should have a value of **Earphones**.

We can write the query using the ~~$and~~ operator, as shown below:

```js {numberLines, 3-3}
const query = async () => {
  const result = await Product.countDocuments({
    $and: [{ brand: "Apple" }, { category: "Earphones" }],
  })

  console.log(result)
}

query()
```

Executing the query above gives us the following result:

```sh {numberLines}
1
```

Note that in MongoDB queries, the ~~$and~~ operator is implicit and included by default if a query document has more than one condition.

For example, the following query can be rewritten without using the ~~$and~~ operator and gives the same result:

```js {numberLines}
const query = async () => {
  const result = await Product.countDocuments({
    brand: "Apple",
    category: "Earphones",
  })

  console.log(result)
}

query()
```

So, we don’t have to use the ~~$and~~ operator explicitly, unless we want to make our code more readable.
