---
title: "Sorting Documents in MongoDB"
date: "2021-11-20"
excerpt: "Using the sort() function."
categories: ["MongoDB"]
---

We can return documents from a MongoDB database by sorting them in an _ascending_ or _descending_ order using the ~~sort()~~ function.

The MongoDB cursor provides the ~~sort()~~ function that accepts a document as an argument. The key inside the document represents the field we want the documents to sort by. We provide a value of ~~1~~ if we want to sort by ascending order and ~~-1~~ for descending order.

I have three records in my MongoDB database.

The following query returns the list of three records with the ~~price~~ field sorted in descending order.

```js {numberLines}
const sort = async () => {
  const result = await Product.find({}).sort({
    price: -1,
  })

  console.log(result)
}

sort()
```

Executing the query above gives us the following result:

```sh {numberLines, 7-7, 15-15, 23-23}
[
   {
     _id: new ObjectId("6195fa11f159807fdf65d854"),
     name: 'Canon 80D DSLR Camera',
     brand: 'Cannon',
     category: 'Electronics',
     price: 1099,
     __v: 0
   },
   {
     _id: new ObjectId("6195fa11f159807fdf65d853"),
     name: 'Airpods Pro',
     brand: 'Apple',
     category: 'Electronics',
     price: 99.99,
     __v: 0
   },
   {
     _id: new ObjectId("6195fa11f159807fdf65d855"),
     name: 'Logitech Gaming Mouse',
     brand: 'Logitech',
     category: 'Electronics',
     price: 49.99,
     __v: 0
   }
 ]
```
