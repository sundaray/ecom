---
title: "Validation in Mongoose"
date: "2021-06-01"
excerpt: "Learn about built-in and custom validators in mongoose."
categories: ["Mongoose"]
---

```toc

```

## Built-in validators

~~required~~ is a built-in validator in mongoose.

### Create a course schema

```js {numberLines, 6}
const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: String,
  tags: [String, String],
  isPublished: Boolean,
  price: Number,
})

const Course = mongoose.model("course", courseSchema)

module.exports = Course
```

Now, we will create a course without the ~~name~~ property.

```js {numberLines}
const createCourse = async () => {
  const course = new Course({
    author: "Hemanta Sundaray",
    tags: ["React", "Node"],
    price: 40,
    isPublished: true,
  })

  try {
    await course.save()
  } catch (error) {
    console.log(error.message)
  }
}

createCourse()
```

```sh
Course validation failed: name: Path `name` is required.
```

### Mnaual validation using validate()

We can also do manual validation using the ~~validate~~ method on the created course.

```js {numberLines, 10}
const createCourse = async () => {
  const course = new Course({
    author: "Hemanta Sundaray",
    tags: ["React", "Node"],
    price: 40,
    isPublished: true,
  })

  try {
    await course.validate()
  } catch (error) {
    console.log(error.message)
  }
}

createCourse()
```

```sh
Course validation failed: name: Path `name` is required.
```

We can also set the ~~required~~ property to a function that returns a boolean. This is useful when you want to conditionally make a property required or not.

For example, let's say that ~~price~~ is required only when the course is published.

```js {numberLines, 10-12}
const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String, String],
  isPublished: Boolean,
  price: {
    type: Number,
    required: function () {
      return this.isPublished
    },
  },
})

const Course = mongoose.model("course", courseSchema)

module.exports = Course
```

It's important to note that we can't replace the function with an arrow function. Because arrow functions don't have their own ~~this~~ keyword. The value of ~~thi~~ inside an arrow function is taken from the outer scope.

```js {numberLines}
const createCourse = async () => {
  const course = new Course({
    name: "Fullstack Web Development",
    author: "Hemanta Sundaray",
    tags: ["React", "Node"],
    isPublished: true,
  })

  try {
    await course.validate()
  } catch (error) {
    console.log(error.message)
  }
}

createCourse()
```

```sh
course validation failed: price: Path `price` is required.
```

Depending on the type of property, mongoose has different built-in validators. For example, with strings, we have ~~minlength~~ and ~~maxlength~~ and ~~enum~~.

For numbers, we have built-in validators such as ~~min~~ and ~~max~~.

Let's say we have predefined categories for courses. Below, we have the ~~enum~~ property set to frontend, backend and fullstack. Therefore, while creating a course, the category we select must be one out of frontend, backend and fullstack. Otherwise, we will get a validation error.

```js {numberLines, 11}
const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 5,
    maxlength: 255,
  },
  category: {
    type: String,
    enum: ["frontend", "backend", "fullstack"],
  },
  author: String,
  tags: [String, String],
  isPublished: Boolean,
  price: {
    type: Number,
    required: function () {
      return this.isPublished
    },
  },
})
const Course = mongoose.model("course", courseSchema)

module.exports = Course
```

```js {numberLines, 5}
const createCourse = async () => {
  const course = new Course({
    name: "State Management with Redux Toolkit",
    author: "Hemanta Sundaray",
    category: " ",
    tags: ["React", "Node"],
    isPublished: true,
    price: 50,
  })

  try {
    await course.validate()
  } catch (error) {
    console.log(error.message)
  }
}

createCourse()
```

```sh
course validation failed: category: ` ` is not a valid enum value for path `category`.
```

## Custom validators

In course schema, ~~tags~~ is an array of strings.

What if we want to enforce the validation that every course should have at least one tag?

We can do that using the following code snippet.

```js {numberLines, 14-21}
const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 5,
    maxlength: 255,
  },
  category: {
    type: String,
    enum: ["frontend", "backend", "fullstack"],
  },
  author: String,
  tags: {
    type: Array,
    validate: {
      validator: function (value) {
        return value.length > 0
      },
      message: "A course should have at least one tag.",
    },
  },
  isPublished: Boolean,
  price: {
    type: Number,
    required: function () {
      return this.isPublished
    },
  },
})

const Course = mongoose.model("Course", courseSchema)

module.exports = Course
```

```js {numberLines, 7}
const createCourse = async () => {
  const course = new Course({
    name: "State Management with Redux Toolkit",
    author: "Hemanta Sundaray",
    category: " ",
    // tags is an empty array
    tags: [],
    isPublished: true,
    price: 50,
  })

  try {
    await course.validate()
  } catch (error) {
    console.log(error.message)
  }
}

createCourse()
```

```sh
Course validation failed: category: ` ` is not a valid enum value for path `category`., tags: A course should have at least one tag.
```

## SchemaType object options

We know that the schema type object has ~~type~~, ~~required~~, ~~enum~~ options etc. The schema type object has also a few more useful properties such as ``lowercase~~, ~~uppercase~~, ~~get~~ & ~~set~~. For strings we have three additional properties that we can use.

### lowercase()

```js {numberLines, 10}
const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 5,
    maxlength: 255,
  },
  category: {
    type: String,
    enum: ["frontend", "backend", "fullstack"],
    lowercase: true,
  },
  author: String,
  tags: ["String", "String"],
  isPublished: Boolean,
  price: {
    type: Number,
    required: function () {
      return this.isPublished
    },
  },
})
```

We have capitalized the value of the ~~category~~ field.

```js {numberLines, 5}
const createCourse = async () => {
  const course = new Course({
    name: "State Management with Redux Toolkit",
    author: "Hemanta Sundaray",
    category: "FRONTEND",
    tags: ["State Management"],
    isPublished: true,
    price: 50,
  })

  try {
    const result = await course.save()
    console.log(result)
  } catch (error) {
    console.log(error.message)
  }
}

createCourse()
```

```sh {numberLines, 5}
{
   tags: [ 'State Management' ],
   _id: 60b5e40e5b51d934a4c91c3a,
   name: 'State Management with Redux Toolkit',
   author: 'Hemanta Sundaray',
   category: 'frontend',
   isPublished: true,
   price: 50,
   __v: 0
 }
```

The document has been saved in the database with the value of the ~~category~~ field in lowercase.

Similarly we have ~~uppercase~~ and ~~trim~~ for strings.

~~trim~~ removes any paddings around strings.

There are some properties that we can use irrespective of the type of property.

For example, let's say we always want to round out the value of the ~~price~~. So, we can define a custom ~~getter~~ and ~~setter~~.

### set

```js {numberLines, 17-20}
const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 5,
    maxlength: 255,
  },
  category: {
    type: String,
    enum: ["frontend", "backend", "fullstack"],
    lowercase: true,
  },
  author: String,
  tags: ["String", "String"],
  isPublished: Boolean,
  price: {
    type: Number,
    set: v => Math.round(v),
  },
})

const Course = mongoose.model("Course", courseSchema)

module.exports = Course
```

```js {numberLines, 8}
const createCourse = async () => {
  const course = new Course({
    name: "State Management with Redux Toolkit",
    author: "Hemanta Sundaray",
    category: "frontend",
    tags: ["Web Development"],
    isPublished: true,
    price: 48.99,
  })

  try {
    const result = await course.save()
    console.log(result)
  } catch (error) {
    console.log(error.message)
  }
}

createCourse()
```

```sh {numberLines, 8}
 {
   tags: [ 'Web Development' ],
   _id: 60b5e6bc6057020a28bbb331,
   name: 'State Management with Redux Toolkit',
   author: 'Hemanta Sundaray',
   category: 'frontend',
   isPublished: true,
   price: 49,
   __v: 0
 }
```

We can see that the price of 48.99 has beet rounded to the nearest integer - 49.
