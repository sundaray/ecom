---
title: "Limiting & Skipping Documents in MongoDB"
date: "2021-11-18"
excerpt: "Using limit() & skip()"
categories: ["MongoDB"]
---

```toc

```

### limit()

To limit the number of records a query returns, we can use a function called ~~limit()~~. It accepts an integer and returns the same number of records, if available.

In the example below, we have used the ~~limit()~~ function to restrict the result size to 2.

```js {numberLines}
Product.find({}).limit(2)
```

When the above query is executed, only two records are returned.

### skip()

Skipping is used to exclude some documents in the result set and return the rest.

The MongoDB cursor provides the ~~skip()~~ function, which accepts an integer and skips the specified number of documents from the cursor, returning the rest.

> The MongoDB cursor is a pointer to the result set of a query.

The following example uses the ~~skip()~~ function.

```js {numberLines}
Product.find({}).skip(2)
```

Since the ~~skip()~~ function has been provided with the value 2, the first two documents will be excluded from the output.
