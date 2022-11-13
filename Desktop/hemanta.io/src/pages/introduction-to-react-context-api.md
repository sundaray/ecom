---
title: "Introduction to React Context API"
date: "2022-07-30"
excerpt: "Learn how to use React's Context API to get around unnecessary prop drilling."
categories: ["React"]
---

```toc

```

Context is one of the many ways React apps share state across many components without manual prop drilling.

The React Context API uses a **Provider** and a **Consumer** pattern to share data throughout an application. The provider role is played by a React component that makes data available to its descendant components. When one of those descendants accesses the shared data, it becomes a consumer.

### Creating Context

To use the React Context API, we start by creating a React Context object, a named object created by the ~~React.createContext()~~ function.

Context objects include a ~~.Provider~~ property that is a React component. It takes in a ~~value~~ prop to be stored in the context. That value then becomes available to all its descendant components.

In the example below, we create ~~React.createContext~~ to create a new context. Then we store the context in a variable named ~~ThemeContext~~ and export it as a named export.

Next, we wrap the components returned by the ~~App~~ component in a ~~ThemeContext.Provider~~ component, with a ~~value~~ prop set to the ~~darkModeTheme~~ object containing the React state (~~darkMode~~) and its corresponding state updater function (~~setDarkMode~~).

```js {numberLines, 1-1, 8-8, 13-16, 19-19, 34-34}
import React, { useState, createContext } from "react"
import { Route, Switch } from "react-router"
import About from "./components/About"
import Blog from "./components/Blog"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export const ThemeContext = createContext()

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  const darkModeTheme = {
    darkMode,
    setDarkMode,
  }

  return (
    <ThemeContext.Provider value={darkModeTheme}>
      <div className="app-wrapper">
        <Navbar />
        <main className={darkMode ? "main-dark" : "main-light"}>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
```

### Consuming Context

Child components can subscribe to a Context’s value from their closest parent Provider with React’s ~~useContext()~~ hook. The ~~useContext()~~ hook accepts the context object and returns the current value of the context. Components subscribing to a context will receive the value for the Provider closest to them in the application tree.

```js {numberLines, 1-2, 8-8}
import React, { useContext } from "react"
import { ThemeContext } from "../App"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun } from "@fortawesome/free-solid-svg-icons"
import { faMoon } from "@fortawesome/free-solid-svg-icons"

const Toggle = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext)

  const theme = darkMode ? "light" : "dark"

  const circleClickHandler = theme => {
    setDarkMode(!darkMode)
    document.documentElement.className = theme
  }

  return (
    <div className="toggle-wrapper">
      <div className="toggle" onClick={() => circleClickHandler(theme)}>
        <div>
          <FontAwesomeIcon icon={faSun} className="sun" />
        </div>
        <div>
          <FontAwesomeIcon icon={faMoon} className="moon" />
        </div>
        <div className={darkMode ? "circle-dark" : "circle-light"}></div>
      </div>
    </div>
  )
}

export default Toggle
```

> Note: The ~~Toggle~~ component is inside the ~~Navbar~~ component.

###### If you want to see the Context API in action, clone my GitHub repo [here](https://github.com/sundaray/react-darkmode).
