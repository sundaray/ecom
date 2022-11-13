---
title: "Dynamic Imports in JavaScript With import()"
date: "2022-11-12"
excerpt: "Code splitting modules with dynamic import"
categories: ["JavaScript"]
---

It is common for web applications to initially load only enough of their code to render the first page displayed to the user. Then, once the user has some initial content to interact with, they can begin to load the often much larger amount of code needed for the rest of their web app. Web browsers make it easy to dynamically load code by using the DOM API to inject a ~~\<script>~~ tag into the current HTML document, and web apps have been doing this for years.

However, dynamic loading became part of the JavaScript language itself with the introduction of ~~import()~~ in ES2020.

Dynamic import looks like a function invocation but it's not. Instead ~~import()~~ is an operator and the parentheses are required as part of the operator syntax.

Here is an example code snippet, where we are dynamically importing the ~~luxon~~ module (a wrapper for working with JavaScript dates and times).

```js {numberLines}
const showDateTime = async () => {
  const { DateTime } = await import("luxon")
  const now = DateTime.now().toString()
  return now
}
```

We pass a module specifier as an argument to ~~import()~~, and it returns a Promise object that represents the asynchronous process of loading and running the specified module. When the dynamic import is complete, the Promise is “fulfilled” and produces an object like the one we would get with the ~~import \* as~~ form of the static import statement.

###### Learn how to lazy-load components using React Suspense in my blog post [here](https://hemanta.io/lazy-loading-components-with-react-suspense/).
