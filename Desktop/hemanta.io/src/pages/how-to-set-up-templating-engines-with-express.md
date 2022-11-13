---
title: "How to Set Up Templating Engines With Express?"
date: "2021-06-01"
excerpt: ""
categories: ["Express"]
---

Templating engines are also referred to as view engines by Express.

There are two parts to setting up a templating engine in Express.

First, set the ~~views~~ value to specify the folder where the templates will be stored.

Second, set the ~~view engine~~ value to specify the template library.

```js {numberLines}
// This defaults to the 'views' folder in the project root directory.
app.set("views", path.join(__dirname, "views"))

// setting up the 'pug' templating engine
app.set("view engine", "pug")
```
