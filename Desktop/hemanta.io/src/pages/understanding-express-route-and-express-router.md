---
title: "Understanding Express Route & Express Router"
date: "2021-05-21"
excerpt: "Learn how to use routes, dynamic routes and router in Express."
categories: ["Express"]
---

```toc

```

### Express route

A route is a section of Express code that associates an HTTP verb ( ~~GET~~ , ~~POST~~ , ~~PUT~~ , ~~DELETE~~ , etc.), a URL path/pattern, and a function ( _route handler callback_ ) that is called to handle that pattern.

### Path

The path is the part of a request URL after the hostname and port number, so in a request to ~~localhost:3000/about~~, the path is ~~/about~~ (_in this example, the hostname is **localhost**, the port number is **3000**_).

### HTTP verb

The HTTP verb is always included in the request.

- ~~GET~~ requests are used for retrieving resources from a server.

- ~~POST~~ is the HTTP method verb used for creating new resources.

- ~~PUT~~ requests are used for updating existing resources.

- ~~DELETE~~ requests are used for deleting existing resources.

Express routes usually take two arguments, **a path** (usually a string), and **a callback function** to handle the request and send a response.

```js {numberLines}
app.get("/about", () => {
  res.send("Hello from Express")
})
```

The route above will match any ~~GET~~ request to ~~/about~~ and call the callback function, passing in two objects as the first two arguments.

These objects represent the request sent to the server and the response that the Express server should eventually send to the client.

Express servers send responses using the ~~.send()~~ method on the response object. ~~send~~ will take any input and include it in the response body.

If no routes are matched on a client request, the Express server will handle sending a **404 Not Found** response to the client.

### Setting status codes

Express allows us to set the status code on responses before they are sent. Response codes provide information to clients about how their requests were handled.

Until now, we have been allowing the Express server to set status codes for us. For example, any ~~res.send()~~ has by default a **200 OK** status code.

The ~~res~~ object has a ~~.status()~~ method to allow us to set the status code, and other methods like ~~.send()~~ can be chained from it.

```js {numberLines}
app.get("/about", () => {
  res.status(200).send("Hello from Express")
})
```

### Route handling

Express tries to match requests by route, meaning that if we send a request to ~~<server address>:<port number>/api-endpoint~~, the Express server will search through any registered routes in order and try to match ~~/api-endpoint~~.

Express searches through routes in the order that they are registered in your code. The first one that is matched will be used, and its callback will be called.

If there are no matching routes registered, or the Express server has not sent a response at the end of all matched routes, it will automatically send back a **404 Not Found** response, meaning that no routes were matched or no response was ultimately sent by the registered routes.

### Dynamic routes & req.params

We can create dynamic path segments (_called parameters_) by adding a ~~:~~ to Express router definitions.

Express parses any parameters, extracts their actual values, and attaches them as an object to the request object: ~~req.params~~. The name you add after ~~:~~ is the name of the key by which you can extract data from ~~req.params~~.

```js {numberLines}
const mobiles = { apple: { price: 1000 }, samsung: { price: 600 } }

//GET/mobiles/apple
app.get("/mobiles/:brand", (req, res, next) => {
  console.log(req.params) // => {brand: 'Apple'}
  res.send(mobiles[req.params.brand])
})
```

In the code snippet above, a ~~.get()~~ route is defined to match ~~/mobiles/:brand~~ path.

When a ~~GET~~ request arrives for ~~/mobiles/apple~~, the callback is called.

Inside the callback, ~~req.params~~ is an object with the key ~~brand~~ and the value ~~apple~~, which was present in the actual request path. The appropriate mobile brand is retrieved from the ~~mobiles~~ object and sent back to the client.

### Query strings

Query strings appear at the end of the path in URLs, and they are indicated with a ~~?~~ character. For example, in ~~/persons/1?name=Morgan&age=26~~, the query string is ~~name=Morgan&age=26~~ and the path is ~~/persons/1/~~.

Query strings do not count as part of the route path. Instead, the Express server parses them into a JavaScript object and attaches it to the request body as the value of ~~req.query~~.

The key: value relationship is indicated by the ~~=~~ character in a query string, and key-value pairs are separated by ~~&~~.

In the above example route, the ~~req.query~~ object would be ~~{ name: 'Morgan', age: '26' }~~.

```js {numberLines}
const persons = { 1: { name: "Charles", age: "25" } }

// PUT /persons/1?name=Morgan&age=26
app.put("/persons/:id", (req, res, next) => {
  const personUpdates = req.query
  persons[req.params.id] = personUpdates
  res.send(persons[req.params.id])
})
```

Here, we have a route for updating persons by ID. When a ~~PUT~~ ~~/persons/1?name=Morgan&age=26~~ request arrives, our callback function is called and, we create a ~~personUpdates~~ variable to store ~~req.query~~. Since ~~req.params.id~~ is '1', we replace persons['1']‘s value with ~~personUpdates~~. Finally, Express sends back the new persons['1'].

When updating, many servers will send back the updated resource after the updates are applied so that the client has the exact same version of the resource as the server and database.

### Express Router

We use ~~express.Router~~ to create modular, mountable route handlers.

To create an instance of the Express Router, invoke the ~~.Router~~ method on the top-level Express import. A route instance is a complete middleware and routing system.

To use a router, we mount it at a certain path using ~~app.use()~~ and pass in the router as the second argument.

```js:title=routes/expressRoutes.js {numberLines}
const express = require("express")

const router = express.Router()

router.get("/", (req, res, next) => {
  res.send("Hello from Express")
})

router.get("/about", (req, res, next) => {
  res.send("Express is a Node.js application framework.")
})

module.exports = router
```

```js:title=app.js {numberLines}
const express = require('express');

const expressRoutes = require('./routes/expressRoutes');

const app = express();

app.use(expressRoutes);

const PORT = 5000 || process.env.PORT;

app.listen(5000, () => {
  console.log(`The server is listening on port ${PORT}`);
});
```
