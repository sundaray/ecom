---
title: "How to Use the JavaScript Optional Chaining Operator in React?"
date: "2021-07-08"
excerpt: "Learn to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid using the JavaScript optional chaining operator.
"
categories: ["JavaScript", "React"]
---

Recently I came across some React code snippets that used an operator I was not familiar with. I did some research and found out that the operator is what is known as an **optional chaining operator** (~~?.~~).

From MDN:

> The optional chaining operator (~~?.~~) allows us to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid.

The definition will be clear with the following example:

A typical task in React apps is to fetch some data from an API endpoint, check that the data is truthy and then map through the data to display a list.

```jsx {numberLines, 20-21}
import React, { useState, useEffect } from "react"
import axios from "axios"

const App = () => {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      )
      setContacts(data)
    })()
  }, [])

  return (
    <div className="m-5">
      <h2>Contacts List</h2>
      <ul>
        {contacts &&
          contacts.map(contact => <li key={contact.name}>{contact.name}</li>)}
      </ul>
    </div>
  )
}
export default App
```

In the code snippet above, we are fetching a list of contacts from JSONPlaceholder (a fake REST API). On lines 20-21, we are using the JavaScript logical ~~&&~~ operator to check that ~~contacts~~ exists before we map through the ~~contacts~~ array and render a list of contacts.

To repeat, we are using the ~~&&~~ logical operator to validate that ~~contacts~~ is truthy.

###### You can find out more about JavaScript ~~&&~~ and ~~||~~ logical operators in my blog post [here](https://hemanta.io/javascript-logical-operators/).

With optional chaining operators, we don’t have to explicitly test the state of the ~~contacts~~ variable before mapping through it.

~~?.~~ implicitly ensures that data is not ~~null~~ or ~~undefined~~. If data is ~~null~~ or ~~undefined~~, the expression returns ~~undefined~~.

So, using ~~?.~~, we can rewrite the rendering logic as follows:

```jsx {numberLines, 20-21}
import React, { useState, useEffect } from "react"
import axios from "axios"

const App = () => {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      )
      setContacts(data)
    })()
  }, [])

  return (
    <div className="m-5">
      <h2>Contacts List</h2>
      <ul>
        {contacts?.map(contact => (
          <li key={contact.name}>{contact.name}</li>
        ))}
      </ul>
    </div>
  )
}
export default App
```
