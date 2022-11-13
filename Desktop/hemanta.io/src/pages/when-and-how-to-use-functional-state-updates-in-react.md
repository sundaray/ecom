---
title: "When & How to Use Functional State Updates in React?"
date: "2021-07-03"
excerpt: "Learn to use functional state updates in order to guarantee consistency & prevent unexpected bugs."
categories: ["React"]
---

We all understand how ~~useState~~ works.

Below, when we click on the ~~Add~~ button, the ~~counter~~ increases by 1. Simple.

```jsx {numberLines, 7}
import React, { useState } from "react"

const App = () => {
  const [counter, setCounter] = useState(0)

  const handleAddClick = () => {
    setCounter(counter + 1)
  }

  return (
    <div className="m-5">
      <h1>{counter}</h1>
      <button className="btn btn-primary" onClick={handleAddClick}>
        Add
      </button>
    </div>
  )
}

export default App
```

Now, add the highlighted code snippet.

```jsx {numberLines, 8}
import React, { useState } from "react"

const App = () => {
  const [counter, setCounter] = useState(0)

  const handleAddClick = () => {
    setCounter(counter + 1)
    setCounter(counter + 1)
  }

  return (
    <div className="m-5">
      <h1>{counter}</h1>
      <button className="btn btn-primary" onClick={handleAddClick}>
        Add 1
      </button>
    </div>
  )
}

export default App
```

Notice that we are calling the ~~setCounter~~ function twice.

Now, if I click on the ~~Add~~ button once, how much will the counter increase by?

1 or 2?

The answer is 1.

**This is because state updates in React are asynchronous and React batches several state updates in order to make the application more responsive and reduce the amount of work the browser has to do.**

The initial state of the ~~counter~~ is 0. The first ~~setCounter~~ call adds 1 to the value of the counter, but the update does not happen immediately as state updates are asynchronous in nature. Then, when we call ~~setCounter~~ for the second time, the ~~counter~~ is still at 0 because the component has not re-rendered yet. Therefore, the second ~~setCounter~~ call also updates the ~~counter~~ variable from 0 to 1.

So, how can we ensure that a single click on the ~~Add~~ button adds 2 to the value of the ~~counter~~ variable?

We can achieve this by passing a function to ~~setCounter~~, the state update function, as shown below:

```jsx
setCounter(prevState => prevState + 1)
```

The function definition inside ~~setCounter~~ takes the previous value of the state as an argument and returns the new state, which is the value of the previous state plus 1.

Fix the code as shown below.

Now, if you click the ~~Add~~ button once, the ~~counter~~ increases by 2.

```jsx {numberLines, 7-8}
import React, { useState } from "react"

const App = () => {
  const [counter, setCounter] = useState(0)

  const handleAddClick = () => {
    setCounter(prevState => prevState + 1)
    setCounter(prevState => prevState + 1)
  }

  return (
    <div className="m-5">
      <h1>{counter}</h1>
      <button className="btn btn-primary" onClick={handleAddClick}>
        Add
      </button>
    </div>
  )
}

export default App
```

So, whenever the new state is computed using the previous state, you should use functional state updates in order to guarantee consistency and prevent unexpected bugs.
