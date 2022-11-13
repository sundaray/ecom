---
title: "MongoDB Update Operators - $currentDate"
date: "2021-11-29"
excerpt: "$currentDate"
categories: ["MongoDB"]

---

The operator ~~$currentDate~~ is used to set the value of a given field as the current date or timestamp. If the field is not present already, it will be created with the current date or timestamp value.

Providing a field name with a value of ~~true~~ will insert the current date as a ~~Date~~.

```js {numberLines}
const query = async () => {
  const result = await Product.findOneAndUpdate(
    { name: "Airpods Pro" },
    { $currentDate: { created_date: true } },
    { returnNewDocument: true }
  )
  console.log(result)
}

query()
```

The preceding ~~findOneAndUpdate()~~ operation sets the ~~created_date~~ field using the ~~$currentDate~~ operator. The field ~~created_date~~ has a value of ~~true~~, which defaults to a ~~Date~~ type.

We can see in the output below that the field ~~created_date~~ has a value of the ~~Date~~ type.

```sh {numberLines, 9-9}
{
   _id: new ObjectId("61a366483394265a2770d75c"),
   name: 'Airpods Pro',
   brand: 'Apple',
   category: 'Earphones',
   price: 99.99,
   soldQty: 240,
   __v: 0,
   created_date: 2021-11-28T16:28:08.494Z
 }
```
