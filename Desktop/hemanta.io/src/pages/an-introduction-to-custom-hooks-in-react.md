---
title: "An Introduction to Custom Hooks in React"
date: "2022-07-30"
excerpt: "Create a useLocalStorage custom hook"
categories: ["React"]
---

Custom hooks are JavaScript functions that let us extract component logic into reusable functions. They allow us to abstract our code, hide complex logic, as well as share stateful logic between multiple components.

Custom functions may use other React Hooks. And as a convention, **their names should start with "use"**, so that we can tell at a glance that the rules of Hooks apply to them. Otherwise, custom hooks don’t have a specific signature. It’s up to the developer to decide what arguments they take and if they should return anything.

Example:

```js {numberLines, 3-13, 16-16}
import React, { useEffect, useState } from "react"

const useLocalStorage = (key, defaultValue = " ") => {
  const [state, setState] = useState(
    () => localStorage.getItem(key) || defaultValue
  )

  useEffect(() => {
    localStorage.setItem(key, state)
  }, [key, state])

  return [state, setState]
}

const App = ({ initialName }) => {
  const [name, setName] = useLocalStorage("name", initialName)

  const handleChange = e => {
    setName(e.target.value)
  }

  return (
    <div className="lazy">
      <input value={name} onChange={handleChange} />
      <p>{`My name is ${name}.`}</p>
    </div>
  )
}

export default App
```

In this example, we have created a custom hook called ~~useLocalStorage~~ that uses two other React hooks: ~~useState~~ & ~~useEffect~~.
