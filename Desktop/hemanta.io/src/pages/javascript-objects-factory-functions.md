---
title: "JavaScript Objects - Factory Functions"
date: "2022-05-07"
excerpt: "Learn how to create multiple object instances quickly using factory functions."
categories: ["JavaScript"]
---

Like a real world factory that can manufactures multiple copies of an item quickly and on a massive scale, factory functions can create multiple instances of an object quickly, thereby removing the need to create objects individually.

**A factory function is a function that returns an object and can be reused to make multiple object instances.**

Factory functions can also have parameters allowing us to customize the object that gets returned.

Let’s say we wanted to create an object to represent mobile phones. There are many different types of mobile phones and we could go about making each mobile phone individually but we can also use a factory function to make our lives easier.

To achieve this, we can use a factory function that has parameters:

```js {numberLines}
const mobilePhoneFactory = (brand, processor, display, battery) => {
  return {
    brand: brand,
    processor: processor,
    display: display,
    battery: battery,
  }
}
```

The ~~mobilePhoneFactory()~~ function above has four parameters and returns an object that has the properties: ~~brand~~, ~~processor~~, ~~display~~ & ~~battery~~.

To make an object that represents a specific mobile phone, we can call ~~mobilePhoneFactory()~~ with the necessary arguments and assign the return value to a variable.

```js {numberLines}
const mobilePhoneOne = mobilePhoneFactory(
  "OnePlus",
  "Snapdragon",
  "AMOLED",
  "4500mAH"
)

console.log(mobilePhoneOne)

// {
//  brand: 'OnePlus',
//  processor: 'Snapdragon',
//  display: 'AMOLED',
//  battery: '4500mAH'
//}
```

Now we have a ~~mobilePhoneOne~~ object as a result of calling ~~mobilePhoneFactory()~~ with the needed arguments.

With the ~~mobilePhoneFactory()~~ function in place, we don’t have to create an object literal every time we need a new mobile phone. Instead, we can invoke the ~~mobilePhoneFactory()~~ function with the necessary arguments.
