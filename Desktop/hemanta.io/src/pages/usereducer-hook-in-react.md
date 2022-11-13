---
title: "useReducer() Hook in React"
date: "2022-07-30"
excerpt: "Learn how to manage state in React apps using the useReducer() hook."
---

The ~~useReducer~~ hook is similar to the ~~useState~~ hook in React, but lets us move the state update logic from event handlers into a single function outside of the component.

The ~~useReducer()~~ hook has the following signature:

```js {numberLines}
const [state, dispatch] = useReducer(reducer, initialArg, init)
```

- ~~reducer~~: The reducer function takes ~~state~~ and ~~action~~ as arguments and returns the next state.
- ~~initialArg~~: The value from which the initial state is calculated.
- ~~init~~: The initializer fiction that specifies how the initial state is calculated. If it’s not specified, the initial state is set to ~~initialArg~~. Otherwise, the initial state is the result of calling ~~init(initialArg)~~.

~~useReducer~~ returns an array with with exactly two items:

- ~~state~~: The current state of the ~~state~~ variable. This is set to ~~init(initialArg)~~ or or ~~initialArg~~ (if there is no ~~init~~).
- ~~dispatch~~: The ~~dispatch~~ function changes the state in response to an action by the user and **triggers a re-render**. An action is usually an object with a ~~type~~ property identifying it and optionally other properties (~~payload~~ for example) with additional information.

Example:

```js {numberLines, 26-30}
import React, { useState, useReducer } from "react"

const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      return { count: state.count + 1 }
    }
    case "incrementByValue": {
      return { count: state.count + Number(action.payload) }
    }
    case "decrement": {
      return { count: state.count - 1 }
    }
    default:
      throw Error(`Unknown action: ${action.type}`)
  }
}

const counterInitialState = () => {
  return {
    count: 0,
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(
    counterReducer,
    null,
    counterInitialState
  )

  const [incrementValue, setIncrementValue] = useState(null)

  const handleChange = e => {
    setIncrementValue(e.target.value)
  }

  const actionCreator = (type, payload) => {
    return {
      type,
      payload,
    }
  }

  return (
    <div className="container">
      <button onClick={() => dispatch(actionCreator("increment"))}>+</button>
      {state.count}
      <button onClick={() => dispatch(actionCreator("decrement"))}>-</button>
      <button
        onClick={() =>
          dispatch(actionCreator("incrementByValue", incrementValue))
        }
      >
        Increment By Value
      </button>
      <input value={incrementValue} type="number" onChange={handleChange} />
      <p>The input value is {incrementValue}</p>
    </div>
  )
}

export default Counter
```

**Line 26:30:** Notice that we have passed ~~null~~ as the second argument to the ~~useReducer~~ hook. This is because the ~~counterInitialState~~ function does not need an argument to calculate the initial state.
