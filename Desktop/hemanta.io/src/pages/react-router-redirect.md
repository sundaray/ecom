---
title: "React Router - Redirect"
date: "2021-10-10"
excerpt: "Learn to navigate to a new location using <Redirect />"
categories: ["React Router"]
---

###### Master the fundamentals of React Router in my blog post [here](https://hemanta.io/introduction-to-react-router/).

Let's say we have an app with two routes: ~~/~~ & ~~/products~~ that render the ~~<Home \/>~~ page and the ~~<Products \/>~~ page respectively.

Imagine that a user tries to visit the route ~~/about~~ - a route that we have **NOT** configured. In such a scenario, we can redirect the user to a new location (the ~~<Home \/>~~ page for example) using the ~~<Redirect \/>~~ component from ~~react-router-dom~~.

**Example:**

```js {numberLines, 5-5, 19-19}
import React from "react"
import Home from "./components/Home"
import Header from "./components/Header"
import Products from "./components/Products"
import { Switch, Route, Redirect } from "react-router-dom"

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </>
  )
}

export default App
```

The ~~<Redirect \/>~~ component takes in a ~~to~~ prop, the value of which is the URL we want to redirect to, in the form of string.

In the code example above, a user who tries to access any route not configured in the application will be redirected to the ~~<Home \/>~~ page.
