---
title: "CRUD Operations With Mongoose & MongoDB Atlas"
date: "2021-05-31"
excerpt: "Learn how to perform Create, Read, Update and Delete operations with Mongoose."
categories: ["MongoDB"]
---

```toc

```

###### This blog post is for my own reference. This is why there is not much explanation.

## Create a course model

```js {numberLines}
const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String, String],
  isPublished: Boolean,
  price: Number,
})

const Course = mongoose.model("Course", courseSchema)

module.exports = Course
```

## Create courses

```js {numberLines}
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const Course = require("./models/courses")

dotenv.config()

connectDB()

const createCourses = async () => {
  const course = new Course({
    name: "Full-stack Web Development",
    author: "Hemanta Sundaray",
    tags: ["React", "Node"],
    isPublished: true,
  })

  const result = await course.save()
  console.log(result)
}

createCourses()
```

## find

```js {numberLines}
const getCourses = async () => {
  const courses = await Course.find()

  console.log(courses)
}

getCourses()
```

```sh {numberLines}
[
   {
     tags: [ 'React', 'Node' ],
     _id: 60b49c4dba4e232500b7df88,
     name: 'Full-stack Web Development',
     author: 'Hemanta Sundaray',
     price: 40,
     isPublished: true,
     __v: 0
   },
   {
     tags: [ 'Frontend', 'Static site generator' ],
     _id: 60b49d1e5924cd498468bdde,
     name: 'Gatsby',
     author: 'Hemanta Sundaray',
     price: 30,
     isPublished: true,
     __v: 0
   },
   {
     tags: [ 'Backend', 'Database' ],
     _id: 60b49db34efdc80fe0c493c0,
     name: 'Master Mongoose',
     author: 'Hemanta Sundaray',
     price: 20,
     isPublished: true,
     __v: 0
   }
]
```

We can also filter our query by passing an objet of key-value pairs to the ~~find~~ method.

```js {numberLines}
const getCourses = async () => {
  const courses = await Course.find({
    isPublished: false,
  })

  console.log(courses)
}

getCourses()
```

```sh {numberLines}
[]
```

All of the courses have been published, which is why we got an empty array.

## findById

```js {numberLines}
const getCourse = async () => {
  const course = await Course.findById("60b49d1e5924cd498468bdde")

  console.log(course)
}

getCourse()
```

```sh {numberLines}
{
   tags: [ 'Frontend', 'Static site generator' ],
   _id: 60b49d1e5924cd498468bdde,
   name: 'Gatsby',
   author: 'Hemanta Sundaray',
   price: 30,
   isPublished: true,
   __v: 0
 }
```

## select

We can select specific properties with the ~~select~~ method.

```js {numberLines}
const getCourses = async () => {
  const courses = await Course.find().select({
    name: 1,
  })

  console.log(courses)
}

getCourses()
```

```sh {numberLines}
 [
    { _id: 60b49c4dba4e232500b7df88, name: 'Full-stack Web Development' },
    { _id: 60b49d1e5924cd498468bdde, name: 'Gatsby' },
    { _id: 60b49db34efdc80fe0c493c0, name: 'Master Mongoose' }
]
```

## sort

We can sort the results with the ~~sort~~ method. ~~1~~ represents ascending order and ~~-1~~ represents descending order.

```js {numberLines}
const getCourses = async () => {
  const courses = await Course.find().select({ name: 1 }).sort({
    price: 1,
  })

  console.log(courses)
}

getCourses()
```

```sh {numberLines}
[
    { _id: 60b49db34efdc80fe0c493c0, name: 'Master Mongoose' },
    { _id: 60b49d1e5924cd498468bdde, name: 'Gatsby' },
    { _id: 60b49c4dba4e232500b7df88, name: 'Full-stack Web Development' }
]
```

## update

```js {numberLines}
const updateCourse = async id => {
  const course = await Course.findById(id)
  if (!course) return
  course.name = "Intermediate Gatsby"
  const result = await course.save()
  console.log(result)
}

updateCourse("60b49d1e5924cd498468bdde")
```

```sh {numberLines}
{
   tags: [ 'Frontend', 'Static site generator' ],
   _id: 60b49d1e5924cd498468bdde,
   name: 'Intermediate Gatsby',
   author: 'Hemanta Sundaray',
   price: 30,
   isPublished: true,
   __v: 0
}
```

## delete

### deleteOne

```js {numberLines}
const deleteCourse = async id => {
  const result = await Course.deleteOne({
    _id: id,
  })
  console.log(result)
}

deleteCourse("60b49db34efdc80fe0c493c0")
```

```sh
{
   n: 1,
   opTime: {
     ts: Timestamp { _bsontype: 'Timestamp', low_: 2, high_: 1622462068 },
     t: 50
   },
   electionId: 7fffffff0000000000000032,
   ok: 1,
   '$clusterTime': {
     clusterTime: Timestamp { _bsontype: 'Timestamp', low_: 2, high_: 1622462068 },
     signature: { hash: [Binary], keyId: [Long] }
   },
   operationTime: Timestamp { _bsontype: 'Timestamp', low_: 2, high_: 1622462068 },
   deletedCount: 1
 }
```

~~deleteOne~~ method does not return the deleted object. If we want the deleted object to be returned, we can use the ~~findByIdAndRemove~~ method.

### findByIdAndRemove

```js {numberLines}
const deleteCourse = async id => {
  const course = await Course.findByIdAndRemove(id)
  console.log(course)
}

deleteCourse("60b49c4dba4e232500b7df88")
```

```sh {numberLines}
{
   tags: [ 'React', 'Node' ],
   _id: 60b49c4dba4e232500b7df88,
   name: 'Full-stack Web Development',
   author: 'Hemanta Sundaray',
   price: 40,
   isPublished: true,
   __v: 0
}
```

## Comparison query operators

In MongoDB we have some standard operators for comparing values. Since, mongoose is built on top of mongoDB driver, these operators are also available in mongoose.

- ~~eq~~ (equal)
- ~~ne~~ (not equal)
- ~~gt~~ (greater than)
- ~~gte~~ (greater than or equal to)
- ~~lt~~ (less than)
- ~~lte~~ (less than or equal to)
- ~~in~~
- ~~nin~~ (not in)

### $gt

```js {numberLines, 3}
const getCourses = async () => {
  const courses = await Course.find({
    price: { $gt: 20 },
  })

  console.log(courses)
}

getCourses()
```

```sh
[
   {
     tags: [ 'React', 'Node' ],
     _id: 60b49c4dba4e232500b7df88,
     name: 'Full-stack Web Development',
     author: 'Hemanta Sundaray',
     price: 40,
     isPublished: true,
     __v: 0
   },
   {
     tags: [ 'Frontend', 'Static site generator' ],
     _id: 60b49d1e5924cd498468bdde,
     name: 'Gatsby',
     author: 'Hemanta Sundaray',
     price: 30,
     isPublished: true,
     __v: 0
   }
]
```

### $in

```js {numberLines, 3}
const getCourses = async () => {
  const courses = await Course.find({
    price: { $in: [50, 40, 60] },
  })

  console.log(courses)
}

getCourses()
```

```sh
[
   {
     tags: [ 'React', 'Node' ],
     _id: 60b49c4dba4e232500b7df88,
     name: 'Full-stack Web Development',
     author: 'Hemanta Sundaray',
     price: 40,
     isPublished: true,
     __v: 0
   }
]
```

## Logical query operators

- ~~or~~
- ~~and~~

### or

Find the courses that are not published or priced at 30.

```js {numberLines}
const getCourses = async () => {
  const courses = await Course.find().or([
    { price: 30 },
    { isPublished: false },
  ])

  console.log(courses)
}

getCourses()
```

```sh {numberLines}
[
   {
     tags: [ 'Frontend', 'Static site generator' ],
     _id: 60b49d1e5924cd498468bdde,
     name: 'Gatsby',
     author: 'Hemanta Sundaray',
     price: 30,
     isPublished: true,
     __v: 0
   }
]
```
