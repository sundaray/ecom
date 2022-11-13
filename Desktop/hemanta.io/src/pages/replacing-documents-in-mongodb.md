---
title: "Replacing Documents in MongoDB"
date: "2021-11-21"
excerpt: "Using replaceOne() & findOneAndReplace()"
categories: ["MongoDB"]
---

```toc

```

### replaceOne()

Sometimes we may want to replace an incorrectly inserted document in a collection.

I have a MongoDB Atlas cloud database with a collection named ~~products~~. Inside the ~~products~~ collection, I have four records.

Consider the product with the name MacBook Pro. Let’s say we want to change the name from MacBook Pro to MacBook Pro M1 Max and the price from 1499.99 to 2499.99.

To replace a single document in a collection, MongoDB provides the method ~~replaceOne()~~, which accepts a query filter and a replacement document. The function finds the document that matches the criteria and replaces it with the provided document.

The following example demonstrates this:

```js {numberLines}
const replace = async () => {
  const result = await Product.replaceOne(
    {
      name: "MacBook Pro",
    },
    {
      name: "MacBook Pro M1 Max",
      price: 2499.99,
      brand: "Apple",
      category: "Electronics",
    }
  )

  console.log(result)
}

replace()
```

In the code snippet above, the first argument to the ~~replaceOne()~~ function is the query filter to identify the document to be replaced, and the second argument is the new document.

The output of executing the ~~replaceOne()~~ function gives us the following output:

```sh {numberLines}
{
   acknowledged: true,
   modifiedCount: 1,
   upsertedId: null,
   upsertedCount: 0,
   matchedCount: 1
 }
```

The output clearly indicates that the given query matched one document and one document was updated.

### findOneAndReplace()

We have seen the ~~replaceOne()~~ function, which, after successful execution, returns the counts of matched and updated documents.

MongoDB provides another operation, ~~findOneAndReplace()~~, to perform the same operations. However, it provides more options. Its main features are as follows:

- It finds one document and replaces it.
- If more than one document is found matching the query, the first one gets replaced.
- **By default, it returns the original document.**

Let’s see the ~~findOneAndReplace()~~ function in action.

Below, we will change the value of the ~~category~~ field (of the product with name ~~MacBook Pro M1 Max~~) from ~~Electronics~~ to ~~Laptop~~.

```js {numberLines}
const replace = async () => {
  const result = await Product.findOneAndReplace(
    {
      name: "MacBook Pro M1 Max",
    },
    {
      name: "MacBook Pro M1 Max",
      price: 2499.99,
      brand: "Apple",
      category: "Laptop",
    }
  )

  console.log(result)
}

replace()
```

The output of executing the ~~replace()~~ function is as follows:

```sh {numberLines}
{
   _id: new ObjectId("619a1cc288ac4fe69d28b6fb"),
   name: 'MacBook Pro M1 Max',
   brand: 'Apple',
   category: 'Electronics',
   price: 2499.99
 }
```

The code snippet above confirms that the operation is successful, and the default output is the original document that we replaced.
