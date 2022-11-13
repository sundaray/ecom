---
title: "Modelling Relationships in Mongoose Using Reference"
date: "2021-06-01"
excerpt: "Learn how to model relationships between connected data."
categories: ["Mongoose"]
---

Mongoose allows documents to reference other documents. Referencing documents is known as ~~normalization~~. It is good for consistency but creates more queries in the system.

Below, we have two models: ~~Author~~ & ~~Course~~, and we are referencing an ~~author~~ document from the ~~course~~ schema.

```js:title=models/authorModel.js {numberLines}
const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
   name: String,
   profession: String,
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
```

```js:title=models/courseModel.js {numberLines, 8-11}
const mongoose = require("mongoose");

const Author = require("./authorModel");

const courseSchema = new mongoose.Schema({
    name: String,
    price: Number,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
    },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
```

The value of the ~~ref~~ property is usually the name of the model mongoose should use to load referenced documents.

We create an ~~author~~ document.

```js:title=index.js {numberLines}
const Author = require("./models/authorModel");
const Course = require("./models/courseModel");


const createAuthor = async (name, profession) => {
    const author = new Author({
       name,
       profession,
    });

    const result = await author.save();

    console.log(result)
};

createAuthor("Hemanta", "Full-stack Developer");
```

```sh
{
   _id: 60b606c4f2e9693af47f62c8,
   name: 'Hemanta',
   profession: 'Full-stack Developer',
   __v: 0
}
```

Now, we create a ~~course~~ document.

```js:title=index.js {numberLines}
const createCourse = async (name, price, author) => {
  const course = new Course({
    name,
    price,
    author,
  })

  const result = await course.save()
  console.log(result)
}

createCourse("Master Node", 19.99, "60b606c4f2e9693af47f62c8")
```

```sh
{
   _id: 60b6075e9941a80730a431f1,
   name: 'Master Node',
   price: 19.99,
   author: 60b606c4f2e9693af47f62c8,
   __v: 0
}
```

Now we fetch the course we created.

```js {numberLines}
const listCourses = async () => {
  const courses = await Course.find()
  console.log(courses)
}

listCourses()
```

```sh {numberLines}
{
  _id: 60b6075e9941a80730a431f1,
  name: 'Master Node',
  price: 19.99,
  author: 60b606c4f2e9693af47f62c8,
  __v: 0
}
```

We only see the author ~~Id~~. If we want to see all the properties of the ~~author~~ document, we can use the ~~populate~~ method.

## Population

Population is the process of automatically replacing the specified paths in the document with documents from other collections. We can load referenced documents using the ~~populate()~~ method.

```js:title=index.js {numberLines}
const listCourses = async () => {
  const courses = await Course.find().populate("author")
  console.log(courses)
}

listCourses()
```

## Including property

The ~~author~~ property of a ~~course~~ object can contain many properties. So, we can choose to include or exclude certain properties by passing a second argument to the populate method.

```js {numberLines}
const listCourses = async () => {
  const courses = await Course.find().populate("author", "name")
  console.log(courses)
}

listCourses()
```

## Excluding property

Similarly, we can choose to exclude properties of the referenced document using a dash(~~-~~). Below, we have included the ~~name~~ property and excluded the ~~\_id~~ property of the ~~author~~ document.

```js {numberLines}
const listCourses = async () => {
  const courses = await Course.find().populate("author", "name -_id")
  console.log(courses)
}

listCourses()
```
