---
title: "Spreading Attributes in React Using the Spread Operator"
date: "2021-07-01"
excerpt: "Learn to create customisable UI components using the JavaScript spread operator."
categories: ["React", "JavaScript"]
---

###### You can learn more about the JavaScript spread operator in my blog post [here](https://hemanta.io/spread-operator-and-rest-parameter-in-javascript/).

First, let’s understand one of the interesting use cases of the JavaScript spread operator.

Below, we have a ~~person~~ object.

```js {numberLines}
const person = {
  firstName: "Hemanta",
  lastName: "Sundaray",
  occupation: "developer",
  location: "New Delhi",
}
```

First, we will destructure the ~~firstName~~ property and then use the JavaScript spread operator to put the remaining properties and values in an object called ~~rest~~ (line 8).

```js {numberLines, 8-8}
const person = {
  firstName: "Hemanta",
  lastName: "Sundaray",
  occupation: "developer",
  location: "New Delhi",
}

const { firstName, ...rest } = person

console.log(firstName)
// Hemanta

console.log(rest)
// {  lastName: "Sundaray", occupation: "developer",location: "New Delhi"}
```

Now, let's understand how we can use the spread operator usage that we described above in React.

In React, sometimes we want to be able to customise an element rendered by a component; so, we don’t know the exact number of props the component is going to receive in advance. This will be clear with the following example.

Below, we have a Button component (_rendered inside the ~~App~~ component_) that receives three props: ~~children~~, ~~type~~ and ~~disabled~~.

```jsx {numberLines}
import React from "react"

const Button = ({ children, type, disabled }) => {
  return (
    <button type={type} disabled={disabled}>
      {children}
    </button>
  )
}

const App = () => {
  return (
    <div className="m-5">
      <Button type="submit" disabled={true}>
        Submit
      </Button>
    </div>
  )
}

export default App
```

Let’s say, for example, we want to add another prop called ~~className~~ so that we are able to customise the ~~button~~ element by adding CSS rules. One solution would be to simply add the ~~className~~ prop to the ~~Button~~ component rendered inside the ~~App~~ component and then destructure the ~~className~~ prop in the ~~Button~~ component.

However, there is a better solution.

We will destructure the ~~children~~ prop from the ~~props~~ object and put the remaining properties in an object called ~~rest~~ using the spread operator (line 3). We can then pass these props to the ~~button~~ element by spreading the ~~rest~~ object (line 4).

```jsx {numberLines, 3-4}
import React from "react"

const Button = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>
}

const App = () => {
  return (
    <div className="m-5">
      <Button type="submit" disabled={true}>
        Submit
      </Button>
    </div>
  )
}

export default App
```

Now whenever we will pass the ~~className~~ prop or any other prop to the ~~Button~~ component, they will get automatically passed to the ~~button~~ element without us having to manually add them one by one.
