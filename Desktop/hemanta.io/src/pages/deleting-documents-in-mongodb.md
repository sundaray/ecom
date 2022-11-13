---
title: "Deleting Documents in MongoDB"
date: "2021-11-21"
excerpt: "Using deleteOne(), deleteMany() & findOneAndDelete"
categories: ["MongoDB"]
---

```toc

```

In this post, we will learn how to remove documents from a collection using one of the various delete functions provided by MongoDB.

### deleteOne()

The ~~deleteOne()~~ function is used to delete a single document from a collection. It accepts a document representing a query condition.

Upon successful execution, it returns a document containing the total number of documents deleted represented by the field ~~deletedCount~~. However, as the method deletes only one document, the value of ~~deletedCount~~ is always 1.
If the given query condition matches more than one document in the collection, only the first document is deleted.
In the code snippet below, we deleted a document for which the value of the ~~price~~ field is 49.99.

```js {numberLines}
const remove = async () => {
  const result = await Product.deleteOne({
    price: 49.99,
  })

  console.log(result)
}

remove()
```

The following output confirms that one document was successfully deleted.

```sh {numberLines}
{ deletedCount: 1 }
```

### deleteMany()

We can delete multiple documents in a single command using the ~~deleteMany()~~ function.
The ~~deleteMany()~~ function must be provided with a query condition, and all the documents that match the given query will be removed:

```js {numberLines}
const remove = async () => {
  const result = await Product.deleteMany({
    brand: "Apple",
  })

  console.log(result)
}

remove()
```

Executing the query above gives us the following output:

```sh {numberLines}
{ deletedCount: 2 }
```

The output indicates that two products that belong to the brand ~~Apple~~ got deleted.

> Passing an empty query document is equivalent to not passing any filter, and thus, all the documents are matched.

In the following example, both of the commands have been given an empty query document:

```js {numberLines}
Product.deleteOne({})
Product.deleteMany({})
```

The ~~deleteOne()~~ function will delete the document that is found first. However, the ~~deleteMany()~~ function will delete all the documents in the collection.

### findOneAndDelete()

The ~~findOneAndDelete()~~ function finds and deletes one document from the collection. Although it behaves similarly to the ~~deleteOne()~~ function, it provides a few more options:

- It finds one document and deletes it.
- If more than one document is found, only the first one gets deleted.
- Once deleted, it returns the deleted document as a response.

Below, we use the ~~findOneAndDelete()~~ function to delete a record and get the deleted document as a response:

```js {numberLines}
const remove = async () => {
  const result = await Product.findOneAndDelete({
    name: {
      $regex: "mac",
      $options: "i",
    },
  })

  console.log(result)
}

remove()
```

###### Learn how to query documents in MongoDB using regualr expression in my blog post [here](https://hemanta.io/mongodb-$regex-operator/).

Executing the query above returns the following response:

```sh {numberLines}
{
   _id: new ObjectId("6199f7b8327bce5c2db46a46"),
   name: 'MacBook Pro',
   brand: 'Apple',
   category: 'Electronics',
   price: 1499.99,
   __v: 0
 }
```

The response clearly indicates which record was matched and deleted.
