---
title: "Destructure With Default Value in React"
date: "2021-07-12"
excerpt: "Learn how to pass a default value to a prop destructured from the props object"
categories: ["React"]
---

Below, we are rendering the ~~Input~~ component in the ~~App~~ compoenent.

```jsx {numberLines, 3-3, 15-15 }
import React from "react"

const Input = ({ type = "text", placeholder, name }) => {
  return (
    <div>
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  )
}

const App = () => {
  return (
    <>
      <Input
        type="password"
        name="password"
        placeholder="Enter your password"
      />
    </>
  )
}

export default App
```

The input element requires three props: ~~type~~, ~~name~~ & ~~placeholder~~.

On line 15, we have provided a ~~type~~ prop of ~~password~~ to the ~~Input~~ component.

On line 3, we have destructured the ~~type~~ prop, but have provided it with a default value of ~~text~~. This means that if we don't provide any ~~type~~ prop to the ~~Input~~ component, it is going to render an input box of type text.
