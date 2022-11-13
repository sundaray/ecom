---
title: "MongoDB Update Operators - Increment ($inc)"
date: "2021-11-28"
excerpt: "$inc"
categories: ["MongoDB"]

---

The increment operator (~~$inc~~) is used to increment the value of a numeric field by a specific number.

The operator accepts a document containing pairs of a field name and a number.

Given a positive number, the value of the field will be incremented and if a negative number is provided, the value will be decremented.

It is obvious but worth mentioning that the ~~$inc~~ operator can only be used with numeric fields; if attempted for non-numeric fields, the operation fails with an error.

Currently, in our ~~products~~ collection, the document for a product looks as shown here:

```sh {numberLines}
_id:ObjectId("61a32cf04a960cdc89a35a89")
name:"Airpods Pro"
brand:"Apple"
category:"Electronics"
price:99.99
soldQty:240
__v:0
```

Now, we will write an update using the ~~$inc~~ operator on the ~~soldQty~~ field:

```js {numberLines}
const updateProduct = async () => {
  const result = await Product.findOneAndUpdate(
    {
      name: "Airpods Pro",
    },
    {
      $inc: { soldQty: 2 },
    },
    { returnNewDocument: true }
  )
  console.log(result)
}

updateProduct()
```

The preceding update operation finds a product by its name and increments the ~~soldQty~~ field by 2. It also sets ~~returnNewDocument~~ to ~~true~~, so that the updated record will be returned in the response. You can see the output below:

```sh {numberLines}
{
   _id: new ObjectId("61a32cf04a960cdc89a35a89"),
   name: 'Airpods Pro',
   brand: 'Apple',
   category: 'Electronics',
   price: 305.7,
   soldQty: 242,
   __v: 0
}
```

We can see that the update command was successful - the ~~soldQty~~ field is correctly incremented by 2
