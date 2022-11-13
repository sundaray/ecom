---
title: "MongoDB Data Types - ObjectId"
date: "2021-11-28"
excerpt: "ObjectId"
categories: ["MongoDB"]

---

Every document in a MongoDB collection must have an ~~\_id~~ that contains a unique value. This field acts as a primary key to these documents. The primary keys are used to uniquely identify the documents, and they are always indexed.

The following is an example of a sample document inside a MongoDB collection:

```sh {numberLines}
_id:ObjectId("61a30de3e385457dc19e6b54")
name:"MacBook Pro"
category:"Electronics"
__v:0
```

In a MongoDB collection, if you insert a document without an ~~\_id~~ field, the MongoDB driver will autogenerate a unique ID and add it to the document.

So, when you retrieve the inserted document, you will find ~~\_id~~ is generated with a unique value of random text. When the ~~\_id~~ field is automatically added by the driver, the value is generated using ~~ObjectId~~.

The ~~ObjectId~~ value is designed to generate lightweight code that is unique across different machines. It generates a unique value of 12 bytes, where the first 4 bytes represent the timestamp, bytes 5 to 9 represent a random value, and the last 3 bytes are an incremental counter.

> MongoDB supports a technique called sharding, where a dataset is distributed and stored on different machines. When a collection is sharded, its documents are physically located on different machines. Even so, ~~ObjectId~~ can ensure that the values will be unique in the collection across different machines.

**Check out some of my other blog posts related to MongoDB:**

###### Learn to delete documents in MongoDB in my blog post [here](https://hemanta.io/deleting-documents-in-mongodb/).

###### Learn to replace documents in MongoDB in my blog post [here](https://hemanta.io/replacing-documents-in-mongodb/).

###### Learn to update documents in MongoDB in my blog post [here](https://hemanta.io/updating-mongodb-documents/).

###### Learn to sort documents in MongoDB in my blog post [here](https://hemanta.io/sorting-documents-in-mongodb/).

###### Learn to skip & limit documents in MongoDB in my blog post [here](https://hemanta.io/limiting-and-skipping-documents-in-mongodb/).
