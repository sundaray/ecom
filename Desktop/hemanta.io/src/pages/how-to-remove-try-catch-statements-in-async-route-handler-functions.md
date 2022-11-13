---
title: "How to Remove try...catch Statements in Async Route Handler Functions?"
date: "2021-06-01"
excerpt: ""
categories: ["Express"]
---

```toc

```

In the route handler function below, we are using a ~~try...catch~~ statement for handling errors.

```js {numberLines}
router.get("/courses", async (req, res, next) => {
  try {
    const courses = await Course.find()
    res.send(courses)
  } catch (err) {
    next(err)
  }
})
```

The problem with this implementation is that we need to repeat the ~~try...catch~~ statement for every route handler.

The solution therefore is to create a middleware function that takes in the route handler and returns an async function with a ~~try...catch~~ statement.

```js {numberLines}
const asyncMiddleware = handler => {
  return async (req, res, next) => {
    try {
      await handler(req, res)
    } catch (err) {
      // Pass the error thrown to the Express error handling middleware
      next(err)
    }
  }
}
```

Then, we wrap the route handler with the middleware function and the result, as we can see clearly, is a much more concise piece of code without the bloat of a ~~try...catch~~ statement.

```js {numberLines}
router.get(
  "/courses",
  asyncMiddleware(async (req, res) => {
    const courses = await Course.find()
    res.send(courses)
  })
)
```

## express-async-handler

Instead of writing our own async handler, we can make use of an npm package called ~~express-async-handler~~. It is a simple middleware for handling exceptions inside of async express routes and passing them to express error handlers.

### Installation

```sh
npm i express-async-handler
```

### Usage

```js {numberLines}
const asyncHandler = require("express-async-handler")

router.get(
  "/courses",
  asyncHandler(async (req, res) => {
    const courses = await Course.find()
    res.send(courses)
  })
)
```
