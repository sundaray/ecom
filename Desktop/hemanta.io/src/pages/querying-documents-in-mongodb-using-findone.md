---
title: "Querying Documents In MongoDB Using findOne()"
date: "2021-11-28"
excerpt: "findOne()"
categories: ["MongoDB"]
---

MongoDB provides a function called ~~findOne()~~ that returns only one matching record. This function is very useful when we are looking to isolate a specific record. The syntax of this function is similar to the syntax of the ~~find()~~ function.

```js {numberLines}
const query = async () => {
  const result = await Product.findOne({})

  console.log(result)
}

query()
```

This query above is executed without any condition and matches all the documents in the ~~products~~ collection, returning only the first:

```sh {numberLines}
{
   _id: new ObjectId("61a32cf04a960cdc89a35a89"),
   name: 'Airpods Pro',
   brand: 'Apple',
   category: 'Electronics',
   price: 305.7,
   soldQty: 244,
   __v: 0
 }
```
