---
title: "Response.json() in JavaScript Fetch API"
date: "2021-07-05"
excerpt: "response.json()"
categories: ["JavaScript"]
---

In the ~~App~~ component below, we are making a ~~GET~~ request to {JSON} placeholder, a fake REST API using the fetch API, which is a simple interface for fetching resources.

```jsx {numberLines, 9-9, 12-12}
import React, { useState, useEffect } from "react"

const App = () => {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    try {
      ;(async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        )
        const data = await response.json()
        data && setContacts(data)
      })()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <div className="m-5">
      <h2>Contacts List</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.name}>{contact.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
```

**Line 9**: fetch returns a promise that resolves to a Response object.

> **Note**: ~~response.json()~~ returns a promise, because we receive the response as soon as all the headers have arrived. Calling ~~json()~~ gets us another promise for the body of the HTTP response that is yet to be loaded.

**Line 12**: We use the ~~json()~~ method, which takes JSON as input and parses it to produce a JavaScript object.

### Syntax

```sh
response.json().then(data => {// do something with your data})
```
