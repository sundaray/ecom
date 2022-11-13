---
title: "How to Proxy API Requests in React?"
date: "2021-05-21"
excerpt: "Learn how to proxy API requests in development."
categories: ["React"]
---

### Step-1

Install ~~http-proxy-middleware~~ package using npm.

```sh
npm i http-proxy-middleware
```

### Step-2

Create a ~~setupProxy.js~~ file in the ~~src~~ directory.

### Step-3

Add your proxies to the ~~setupProxy.js~~ file as shown below.

```js:title=src/setupProxy.js {numberLines}
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        ["/api/users/login", "/api/users/register"],
        createProxyMiddleware({
            target: "http://localhost:5000",
        })
    );
};
```

**NOTE**: You don't need to import this file anywhere. It is automatically registered when you start the development server. Also, anytime you make a change to the ~~setupProxy.js~~ file, you’ll need to restart your server.

For more information, check out the following resourse:

<https://create-react-app.dev/docs/proxying-api-requests-in-development/>
