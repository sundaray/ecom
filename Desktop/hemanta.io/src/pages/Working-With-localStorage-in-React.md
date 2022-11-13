---
title: "Working With localStorage in React"
date: "2021-07-06"
excerpt: "Learn how to save and restore data from localStorage."
categories: ["React"]
---

```toc

```

localStorage is a Web Storage API, using which browsers are able to save data in the form of key/value pairs.

- localStorage stores data with no expiration date.

- The data is persisted even when the browser is closed and reopened.

- **The localStorage API can only save strings**.

### Storing to localStorage

Inside a React component, we should place our call to localStorage inside ~~useEffect~~ because of performance reasons. localStorage is a synchronous API; therefore, using it outside of ~~useEffect~~ can slow down our application.

We can save a key/value pair to localStorage using the following syntax:

```sh
localStorage.setItem("key", "value");
```

#### Storing State

```jsx {numberLines, 7-7}
import React, { useState, useEffect } from "react"

function App() {
  const [nums, setNums] = useState([1, 2, 4])

  useEffect(() => {
    localStorage.setItem("nums", JSON.stringify(nums))
  }, [nums])

  function handleAddClick() {
    setNums([...nums, Math.random()])
  }

  return (
    <button className="btn btn-primary m-5" onClick={handleAddClick}>
      Add Random Number
    </button>
  )
}

export default App
```

Because localStorage can ONLY save strings, we must convert arrays/objects to strings before saving them to localStorage.

We can convert an array/object to a string using ~~JSON.stringify()~~.

In the code snippet above, on line 7, we convert the ~~nums~~ array to a string using ~~JSON.stringify()~~ before saving it to the localStorage.

###### You can learn more about JSON as a data format in my blog post [here](https://hemanta.io/what-is-json/).

Every time we click the ~~AddRandomNumber~~ button, we add a random number to the ~~nums~~ array, which runs ~~useEffect~~ (_the ~~nums~~ state variable is added to the dependency array_), thereby persisting the updated ~~nums~~ array to localStorage.

### Restoring from localStorage

We can read the value stored in localStorage using the following syntax:

```sh
localStorage.getItem("key");
```

#### Restoring numbers

localStorage always gives us a string, so we need to manually convert it to a Number.

```js
let value = localStorage.getItem("key")

value = Number.parseInt(value, 10)
```

#### Restoring booleans

Booleans could be either ~~true~~ or ~~false~~. When saved to localStorage, they will either be ~~"true"~~ or ~~"false"~~, because they get converted to strings.

Therefore, the easiest way to convert those strings back to booleans is to always compare the localStorage entry to the string ~~"true"~~.

```js
const value = localStorage.getItem("key") === "true"
```

#### Restoring arrays/objects

Remember that we convert arrays and objects to strings using ~~JSON.stringify()~~ before saving them to localStorage. This means that when we want to restore them, we need to parse them into objects using ~~JSON.parse()~~.

```js
const value = JSON.parse(localStorage.getItem("key"))
```

### Lazy initial state

We can hydrate the initial state with data stored in localStorage using the following approach:

```jsx {numberLines, 5}
import React, { useState } from "react"

const App = () => {
  // do NOT use this (for performance reasons)
  const [state, setState] = useState(localStorage.getItem("key"))

  return null
}
```

The code above works but creates a performance issue: we only need the initial state once; however, every time the ~~App~~ component rerenders, we will end up running ~~localStorage.getItem("key")~~.

To fix the issue, we need to pass a function definition that will allow React to call it only on the initial render.

Here is how it looks like:

```jsx {numberLines}
import React, { useState } from "react"

const App = () => {
  const [state, setState] = useState(() => localStorage.getItem("key"))

  return null
}
```

###### You can learn more about lazy state initialization in React ~~useState()~~ hook in my blog post [here](https://hemanta.io/lazy-state-initialization-in-react-use-effect-hook/).
