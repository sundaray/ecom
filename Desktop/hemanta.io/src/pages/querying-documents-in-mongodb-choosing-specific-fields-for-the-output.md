---
title: "Querying Documents In MongoDB - Choosing Specific Fields For The Output"
date: "2021-11-28"
excerpt: "projection"
categories: ["MongoDB"]
---

In MongoDB, every time we query for a document, the document returned contains all the fields by default. However, in most real-life applications, we may only want a few fields in the resulting documents.

In MongoDB queries, we can either include or exclude specific fields from the result. This technique is called **projection**.

Projection is expressed as a second argument to the ~~find()~~ or ~~findOne()~~ functions. **In the projection expression, we can explicitly exclude a field by setting it to 0 or include one by setting it to 1**.

For example, the following query finds all the products that belong to the brand ~~Apple~~ and returns only the ~~price~~ and ~~soldQty~~ fields:

```js {numberLines}
const select = async () => {
  const result = await Product.find(
    { brand: "Apple" },
    { price: 1, soldQty: 1 }
  )

  console.log(result)
}

select()
```

Upon executing the query, we get the following result:

```sh {numberLines}
[
   {
     _id: new ObjectId("61a32cf04a960cdc89a35a89"),
     price: 305.7,
     soldQty: 244
   },
   {
     _id: new ObjectId("61a32cf04a960cdc89a35a8a"),
     price: 1499.99,
     soldQty: 110
   }
 ]
```

Here, we have only specific fields in the result. However, the ~~\_id~~ field is still visible, even though it was not specified. That is because the ~~\_id~~ field is included by default in the resulting documents. If you do not want it to be present in the result, you must exclude it explicitly:

```js {numberLines}
const select = async () => {
  const result = await Product.find(
    { brand: "Apple" },
    { price: 1, soldQty: 1, _id: 0 }
  )

  console.log(result)
}

select()
```

The preceding query specifies that the ~~\_id~~ field should be excluded from the result. When executed, we get the following output, which shows that the ~~\_id~~ field is absent from all documents:

```sh {numberLines}
[ { price: 305.7, soldQty: 244 }, { price: 1499.99, soldQty: 110 } ]
```

It is important to note the three behaviors of field projections, listed as follows:

- The ~~\_id~~ field will always be included, unless excluded explicitly.
- When one or more fields are explicitly included, the other fields (except ~~\_id)~~ get excluded automatically.
- Explicitly excluding one or more fields will automatically include the rest of the fields, along with ~~\_id~~.
