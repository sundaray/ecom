---
title: "Redux Toolkit Concepts"
date: "2022-07-26"
excerpt: "Essential Redux Toolkit concepts"
categories: ["Redux Toolkit"]
---

```toc

```

###### The following post is a reference for myself. It contains brief descriptions of the fundamental concepts needed to work with global state management using Redux Toolkit.

### Install Redux Toolkit

Redux Toolkit is available as a package on NPM.

```sh {numberLines}
npm install @reduxjs/toolkit react-redux
```

### Create the Redux store

```js {numberLines}
import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./features/counterSlice"

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})
```

The Redux store is created using the ~~configureStore~~ function from Redux Toolkit. ~~configureStore~~ requires that we pass in a ~~reducer~~ argument.

We have a file named ~~features/counterSlice.js~~ that exports a reducer function for the counter logic. We import that ~~counterReducer~~ function and include it when we create the store.

When we pass in an object like ~~counter: counterReducer~~, we essentially say that we want to have a ~~state.counter~~ section of our Redux ~~state~~ object and that we want the ~~counterReducer~~ function to be in charge of deciding if and how to update the ~~state.counter~~ section whenever an action is dispatched.

### Provide the Redux store to React

Once the store is created, we can make it available to our React components by putting a React-Redux ~~<Provider~~> around our application in ~~src/index.js~~ and passing the ~~store~~ as a prop:

```js:title=src/index.js {numberLines, 6-6, 7-7, 12-12, 14-14}
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
```

### Creating slice reducers & actions

```js:title=src/features/counterSlice.js {numberLines}
import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 10,
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByValue: (state, action) => {
      state.value += action.payload
    },
  },
})

// selectCount is a selector function.
export const selectCount = state => state.counter.value

// createSlice() automatically creates action creators
export const { increment, decrement, incrementByValue } = counterSlice.actions

// exporting the counter slice reducer function
export default counterSlice.reducer
```

#### createSlice

We need to define a ~~name~~ for the slice & pass in the initial state value for the reducers, so that there is a state the first time it gets called. In our case we are proving an object with a ~~value~~ field that starts off at 10.

#### Reducer functions

**What is a reducer function?**

A reducer function is a function that receives the current ~~state~~ and an ~~action~~ object, decides how to update the state if necessary and returns the new state: ~~(state, action) => newState~~. We can think of a reducer as an event listener that handles events based on the received action (event) type.

We can see that we have three different reducer functions: ~~increment~~, ~~decrement~~ & ~~incrementByAmount~~. They correspond to three different action types that get dispatched when we click different buttons.

**What is an action?**

An action is a plain JavaScript object that has a ~~type~~ field. We can think of an action as an event that describes something that happened in the application.

The ~~type~~ field is a string that gives the action a descriptive name, like ~~counter/decrement~~. An action object can have other fields with additional information about what happened. By convention, we put that information in a field called ~~payload~~.

#### Action Creators

~~createSlice~~ **automatically** generates action creators with the same name as the reducer functions we wrote.

**What is an action creator?**

An action creator is a function that creates and returns an action object.

```js {numberLines}
console.log(counterSlice.actions.increment())
// {payload: undefined, type: “counter/increment”}
```

Note that the ~~name~~ of the slice is used as the first part of each action type and the key name of each reducer function is used as the second part.

#### Slice reducer function

~~createSlice~~ also generates a slice reducer function that knows how to respond to different action types.

#### Selector function

A selector function allows us to select a value from a state.

### The Counter component

```js {numberLines, 14-14}
import React, { useState } from "react"
import {
  increment,
  decrement,
  incrementByValue,
  selectCount,
} from "./features/counterSlice"
import { useDispatch, useSelector } from "react-redux"

const App = () => {
  const [val, setVal] = useState("")

  const dispatch = useDispatch()
  const counterValue = useSelector(selectCount)

  return (
    <>
      <button onClick={() => dispatch(increment())}>+</button>
      <span>{counterValue}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByValue(Number(val)))}>
        Increment by amount
      </button>
      <input type="number" value={val} onChange={e => setVal(e.target.value)} />
    </>
  )
}

export default App
```

#### Reading data with useSelector()

Our components can’t talk to the Redux store directly, because we are not allowed to import it to component files. The ~~useSelector~~ hook takes care of talking to the Redux store behind the scenes for us.

On line 14, we can see that we have passed the ~~selectCount~~ selector function to ~~useSelector~~. The ~~selectCount~~ selector function is inside of our ~~counterSlice.js~~ file.

We can also define selectors inline. For example:

```js {numberLines}
const counterValue = useSelector(state => state.counter.value)
```

#### Dispatching actions with useDispatch()

The ~~useDispatch~~ hook lets us access the ~~dispatch~~ method from the Redux store. Whenever an event occurs in our application (the user clicking on a button, for example), we dispatch actions using action creators and the ~~dispatch~~ method.
