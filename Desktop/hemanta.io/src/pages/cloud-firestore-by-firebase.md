---
title: "Cloud Firestore by Firebase"
date: "2021-06-01"
excerpt: "Fundamentals of Cloud Firestore - a flexible, scalable NoSQL cloud database to store and sync data for client- and server-side development."
---

```toc

```

I have taken the following notes from the first few videos of the 10-part YouTube series on cloud Firestore by Firebase. If you want to know more about cloud Firestore, I highly recommend you watch the series [here](https://www.youtube.com/watch?v=v_hR4K4auoQ). It’s fantastic.

## What is Cloud Firestore?

Cloud Firestore is a horizontally scaling NoSQL database in the cloud.

NoSQL databases are usually schema-less, which means there are no database-level restrictions around what kind of data you can put at any point in the database.

## Advantages of NoSQL database

- You can easily iterate on the database design by adding or changing fields as needed and it won’t necessarily break anything else.
- A NoSQL database is able to distribute its data over multiple machines pretty easily. If you need to scale up to a larger and larger dataset then the database can behind the scenes and pretty much invisibly to you distribute that data across several servers, known as **horizontal scaling**.

## Documents & Collections

- Cloud Firestore like the real-time database is a collection of objects, and all these objects are stored in a tree-like hierarchical structure.
- Cloud Firestore is made up of documents and collections. Documents are similar to JSON objects. They consist of key value pairs which are referred to as fields in the cloud Firestore land. And the values of these fields can be any number of things from strings to numbers to binary data.
- Collections are collections of documents. Collections can only contain documents and nothing else.
- Documents can only be 1MB in size. Any larger than that and you need to break it up.
- A document can’t contain another document. The very root of a cloud Firestore tree can only contain collections.

## Queries in Cloud Firestore

- In the Cloud Firestore world, queries are shallow by default. This means when you grab data within a collection you only grab those documents, you don’t grab documents in any sub-collection like you do in a real time database. As a result, you wouldn’t have to worry about downloading too much data for a simple query.
- Queries you run generally have to be based on equality, greater than, less than comparisons of one or more fields in the document.
- The time it takes to run a query is proportional to the no of results you get back, not the no of documents you are searching through.
- We can’t find documents based on some calculation.
- Whenever you add a document to a collection in the database, cloud Firestore automatically creates an index for every field in that document. Indexes are essentially a sorted list of all the values in the field that we are indexing. Every entry in the index records the value of the field and where that corresponding document exists in the database. So it becomes incredibly fast to find any particular value using something resembling binary search.
- In cloud Firestore, we can query multiple fields at once.

## Pricing

- Firestore cares less about the amount of data you download and more about the no of operations you perform. More specifically, Firestore primarily charges based on the no of reads, writes and deletes you perform in the database.
- A read occurs anytime the client gets data from a document. Only the documents that are retrieved are counted.
- Writes are charged whenever you create or update a document and this holds true no matter how much of that document you are changing. Whether you are changing a single field from true to false or swapping out 30 different fields all at once, it just counts as one write.
