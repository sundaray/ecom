---
title: "Express - Starting a Server"
date: "2022-05-05"
excerpt: "Learn how to start and specify server behavior using Express."
categories: ["Express"]

---

We can create a server using Express (a Node module) using the code snippet below:

```js {numberLines}
// Import the express library
const express = require("express")

// Loads environment variables from a .env file into process.env
require("dotenv").config()

// Instantiate the app
const app = express()

const PORT = process.env.PORT || 8000

// Invoke the app's `.listen()` method below:
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
```

**LINE-2:** We import the Express library with ~~require~~.

**LINE-8:** We return an instance of an Express application.

**LINE-13:** We tell the server where to listen for new requests by providing a port number argument to a method called ~~app.listen()~~. The server will then listen on the specified port and respond to any requests that come into it. The second argument is a callback function that will be called once the server is running and ready to receive requests.

In our example above, our ~~app.listen()~~ call will start a server listening on port 5000, and once the server is started it will log ~~Server listening on port 5000~~.
