---
title: "Finding The Distinct Fields In a MongoDB Collection Using The distinct() Function"
date: "2021-11-28"
excerpt: "distinct()"
categories: ["MongoDB"]
---

The ~~distinct()~~ function is used to get the distinct or unique values of a field with or without query criteria.

Let's find the unique brands that exist in our collection with the help of the following query:

```js {numberLines}
const unique = async () => {
  const result = await Product.distinct("brand")

  console.log(result)
}

unique()
```

Executing the preceding query gives us all the unique brands from the products collection:

```sh {numberLines}
[ 'Apple', 'Cannon', 'Logitech’]
```

The ~~distinct()~~ function can also be used along with a query condition. The following example finds all the unique prices of products that belong to the brand ~~Apple~~:

```js {numberLines}
const unique = async () => {
  const result = await Product.distinct("price", { brand: "Apple" })

  console.log(result)
}

unique()
```

The first argument to the function is the name of the required field, while the second is the query expressed in the document format. Upon executing the query, we get the following output:

```sh {numberLines}
[ 305.7, 1499.99 ]
```

It is important to note that the result of the ~~distinct()~~ function is always returned as an array.
