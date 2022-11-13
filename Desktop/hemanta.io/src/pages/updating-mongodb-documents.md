---
title: "Updating MongoDB Documents"
date: "2021-11-21"
excerpt: "Using updateOne() & findOneAndUpdate()"
categories: ["MongoDB"]
---

```toc

```

In my blog post [here](https://hemanta.io/replacing-documents-in-mongodb/), we learned that we could replace any document in a MongoDB collection once it has been inserted.

During the replace operation, a document in the database gets replaced with a completely new document while keeping the same primary key.
The find and replace operation is very useful when all or most fields of a document are modified. But, using it to update, say only two fields of a document with ten fields, is not advisable. This is because, since we only want to update a few fields, there is a good possibility of a typo being introduced when we are re-assigning the unchanged field values.

To modify one or only a few fields of a document, MongoDB provides the ~~update~~ command. Let's explore this below.

### updateOne()

To update the fields of a single document in a collection, we can use the function ~~updateOne()~~.

This function accepts a query condition to find the record to be updated, and a document that specifies the field-level update expressions. The third argument to the function is to provide miscellaneous options and is optional. The syntax of this function looks like this:

```sh {numberLines}
Model.updateOne(<query condition>, <update expression>, <options>)
```

> Like the replace commands, ~~updateOne()~~ cannot be used to update the \_id field of a document because it is immutable.

Once the update is performed, it returns a detailed result in the form of a document, which indicates how many records were matched and how many records were updated.

Below, we will write and execute our first update command to change the ~~category~~ field for the product ~~Logitech Gaming Mouse~~:

```js {numberLines}
const update = async () => {
  const result = await Product.updateOne(
    {
      name: "Logitech Gaming Mouse",
    },
    {
      $set: { category: "Mouse" },
    }
  )

  console.log(result)
}

update()
```

In the preceding command, the first argument to the ~~updateOne()~~ function is the query condition, wherein we specify that the name of the product should be ~~Logitech Gaming Mouse~~. The second argument is a document that specifies a new value for ~~category~~ field. Here, we are using the ~~$set~~ operator to assign values to the fields provided in a document.

When the ~~update()~~ function is executed, the output looks like this:

```sh {numberLines}
{
   acknowledged: true,
   modifiedCount: 1,
   upsertedId: null,
   upsertedCount: 0,
   matchedCount: 1
 }
```

The output is a document that denotes the following:

- ~~acknowledged : true~~ indicates that the update was performed and confirmed.
- ~~matchedCount : 1~~ shows the number of documents found and chosen for the update (1 in this case.)
- ~~modifiedCount : 1~~ refers to the number of documents modified (1 in this case.)

> As the name of the ~~updateOne()~~ function indicates, it always updates only one document in the collection. If the given query condition matches more than one document, only the first document will be modified.

### findOneAndUpdate()

We have seen the function ~~updateOne()~~, which modifies one document from a collection.

MongoDB also provides the ~~findOneAndUpdate()~~ function, which is capable of doing everything that ~~updateOne()~~ does with a few additional features, which we'll explore now.

The syntax of this function is the same as ~~updateOne()~~:

```sh {numberLines}
  Model.findOneAndUpdate (
  <query condition>,
  <update expression>,
  <options>
)
```

~~findOneAndUpdate()~~ needs at least two arguments where the first one is a query condition to find the document to be modified and the second one is the update expression.

**By default, it returns the old document in the response.**

```js {numberLines}
const update = async () => {
  const result = await Product.findOneAndUpdate(
    {
      name: "Airpods Pro",
    },
    {
      $set: { price: 205.71 },
    }
  )

  console.log(result)
}

update()
```

The preceding command finds a product by its ~~name~~ and sets the ~~price~~ field to the value of 205.71.
We can see that it looks pretty similar to the ~~updateOne()~~ commands, and the effects on the collection will be exactly the same. However, the only difference we will see here is the response, as can be seen below:

```sh
{
   _id: new ObjectId("619a1cc288ac4fe69d28b6fa"),
   name: 'Airpods Pro',
   brand: 'Apple',
   category: 'Earphones',
   price: 99.99,
   __v: 0
 }
```

The output shows that the ~~findOneAndUpdate()~~ function did not return the query stats, such as how many records were matched and how many records were modified. Instead, it returned the document in its old state.

#### Returning a New Document in Response

So far, we have used the function with two arguments where the first is the query condition and the second is the update expression. However, the function also supports an optional third argument, which is used to provide miscellaneous options to the commands.

Out of these options, the ~~Boolean~~ flag ~~returnNewDocument~~ can be used to control which document should be returned in the response.

By default, the value of this flag is set to ~~false~~, which is why we get the old document without passing the options. However, setting this flag to ~~true~~, we get back the modified or new document in the response.

Consider the following example:

```js {numberLines, 9-9}
const update = async () => {
  const result = await Product.findOneAndUpdate(
    {
      name: "Airpods Pro",
    },
    {
      $set: { price: 199.99 },
    },
    { returnNewDocument: true }
  )

  console.log(result)
}

update()
```

The preceding operation sets the ~~price~~ field to 199.99. We have also passed the flag of ~~returnNewDocument~~ set to ~~true~~. The output can be seen as follows:

```sh {numberLines}
 {
   _id: new ObjectId("619a1cc288ac4fe69d28b6fa"),
   name: 'Airpods Pro',
   brand: 'Apple',
   category: 'Earphones',
   price: 199.99,
   __v: 0
 }
```

The output shows that by setting the flag ~~returnNewDocument~~ to ~~true~~, the response shows the modified document.
