---
title: "MongoDB - $regex Operator"
date: "2021-11-20"
excerpt: "Learn how to query MongoDB documents using regular expression."
categories: ["MongoDB"]
---

Let’s say we are building an electronic e-commerce application. The home page of the application displays a list of electronic items and a search box.

Say, we want to implement a server-side feature wherein a user should be able to find a product or a list of products by typing a few characters of the product name in the search box. We can implement this feature using regular expressions.

> A regular expression is a special string that defines a character pattern. When such a regular expression is used to find string fields, all the strings that have the matching pattern are found and returned.

In MongoDB queries, regular expressions can be used with the ~~$regex~~ operator.

Imagine a user has typed the word ~~pro~~ and wants to find all the products whose names contain this character pattern. The regular expression query for this will be as follows:

```js {numberLines, 3-3}
const searchQuery = async () => {
  const searchResult = await Product.find({
    name: { $regex: "Pro" },
  })

  console.log(searchResult)
}

searchQuery()
```

Executing the ~~searchQuery()~~ function above gives us the following result:

```sh {numberLines}
[
   {
     _id: new ObjectId("6195fa11f159807fdf65d853"),
     name: 'Airpods Pro',
     brand: 'Apple',
     category: 'Electronics',
     price: 99.99,
     __v: 0
   }
 ]
```

Note that searching with regular expressions is case-sensitive by default. So, if we do a search with ~~$regex: "pro"~~ (pro in lowercase), we will get an empty array:

```js {numberLines, 5-5}
const searchQuery = async () => {
  const products = await Product.find({})

  const searchResult = await Product.find({
    name: { $regex: "pro" },
  })
  console.log(searchResult)
}

searchQuery()
```

Executing the ~~searchQuery()~~ function will give us the following result:

```sh {numberLines}
[]
```

This is not a good search experience for the user. We would want to find matching documents and return them to the user irrespective of the casing of the search query typed by the user in the search box.

In MongoDB, we can do a case-insensitive regular expression search using the ~~$options~~ argument with a value of ~~i~~ (i stands for case-insensitive), as shown below:

```js {numberLines, 5-5}
const searchQuery = async () => {
  const products = await Product.find({})

  const searchResult = await Product.find({
    name: { $regex: "pRo", $options: "i" },
  })

  console.log(searchResult)
}

searchQuery()
```

Executing the ~~searchQuery()~~ function above would give us the following result:

```sh {numberLines}
[
   {
     _id: new ObjectId("6195fa11f159807fdf65d853"),
     name: 'Airpods Pro',
     brand: 'Apple',
     category: 'Electronics',
     price: 99.99,
     __v: 0
   }
```
