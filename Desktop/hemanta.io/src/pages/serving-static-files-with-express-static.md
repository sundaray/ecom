---
title: "Serving Static Files With express.static"
date: "2021-11-09"
excerpt: "Learn how to server static files using the express.static built-in middleware function."
categories: ["Express"]
---

~~express.static~~ is a built-in middleware function used to serve static files such as images, CSS files and JavaScript files.

The function signature is:

```sh
express.static(root)
```

- ~~root~~ is the directory from which we want to serve our static assets.

The path that we provide to the ~~express.static~~ function is relative to the directory from which we launch our node process. So, it’s safer to use the absolute path of the directory that we want to serve.

```js {numberLines}
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")))
}
```

In the code example above, we have passed ~~\_\_dirname~~ as the first argument and the directory that contains static files as the second argument in ~~path.join()~~.

> **\_\_dirname** is an environment variable that tells us the absolute path of the directory containing the currently executing file.
