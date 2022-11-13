---
title: "MongoDB - Updating Multiple Documents With updateMany()"
date: "2021-11-22"
excerpt: "updateMany()"
categories: ["MongoDB"]

---

In my blog post [here](https://hemanta.io/updating-mongodb-documents/), we learnt about updating one document in a MongoDB collection using the ~~updateOne()~~ & ~~findOneAndUpdate()~~ functions.

We can perform **an update operation on multiple documents** in a MongoDB collection using the ~~updateMany()~~ function.

The syntax of the function looks like this:

```sh {numberLines}
Model.updateMany(<query condition>, <update expression>, <options>)
```

The ~~updateMany()~~ function takes two mandatory arguments. The first argument is the query condition, and the second is the update expression. The third argument, which is optional, is used to provide miscellaneous options.

Upon execution, this function updates all the documents that match the given query condition.

Below, we have written and executed an update operation on our ~~products~~ collection.

```js {numberLines}
const update = async () => {
  const response = await Product.updateMany({}, { category: "Electronics" })

  console.log(response)
}

update()
```

This update operation uses two arguments. The first is to find all the products. The second argument is an update expression, which sets the value of the ~~category~~ field to ~~Electronics~~.
The output can be seen here:

```sh {numberLines, 3-3, 6-6}
{
   acknowledged: true,
   modifiedCount: 4,
   upsertedId: null,
   upsertedCount: 0,
   matchedCount: 4
 }
```

The output indicates that the operation was successful - the query condition matched all the documents (four, in our case), and all were modified.
