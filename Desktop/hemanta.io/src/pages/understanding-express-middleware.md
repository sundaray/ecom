---
title: "Understanding Express Middleware"
date: "2021-05-21"
excerpt: "Understand the concept of middlewares in Express"
categories: ["Express"]
---

An express application is a series of middleware function calls.

In Express, a middleware is a function with three parameters: ~~req~~, ~~res~~ & ~~next~~.

~~req~~ represents the incoming HTTP request. ~~res~~ represents the outgoing HTTP response. And ~~next~~ hands off the processing of the request and the construction of the response to the next function in the middleware stack.

Normally, a single middleware function does a single task, then sends the request to the next middleware function for further handling.

**The order matters in the middleware stack**. Functions get processed in the order they appear in the stack provided the previous function called ~~next()~~ and thus passed control to the next middleware.

```js {numberLines}
app.use((req, res, next) => {
  console.log("Request received")
  next()
})
```

The middleware above serves no particular URL. Therefore, ~~app.use()~~ will call the callback function every time the server receives a request.

We can also define functions and use them as middleware as shown below:

```js {numberLines}
const logging = (req, res, next) => {
  console.log(req)
  next()
}

app.use(logging)
```
