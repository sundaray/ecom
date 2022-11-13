---
title: "MongoDB - countDocuments() Function"
date: "2021-11-18"
excerpt: "countDocuments()"
categories: ["MongoDB"]

---

The ~~countDocuments()~~ function returns the count of documents that are matched by the given condition.

> **Note**: A query argument is mandatory for ~~countDocuments()~~.

The following is an example query that returns the count of books written by Jordan Peterson.

```js {numberLines}
Book.countDocuments({ author: "Jordan Peterson" })
```

To count all the documents in the collection, we pass an empty query to the function, as shown below:

```js {numberLines}
Book.countDocuments({})
```

An important thing to note about ~~countDocuments()~~ is that it never uses collection metadata to find the count. It executes the given query on the collection and calculates the count of matched documents. This provides accurate results but may take longer than the metadata-based counts. Even when an empty query is provided, it is matched against all documents.
