---
title: "Firebase Auth Does Not Persist on Page Refresh"
date: "2022-10-29"
excerpt: "Learn how to track a user's sign-in status using onAuthStateChanged observer."
categories: ["Firebase"]
---

To solve this, we need to track the user’s sign-in status using ~~onAuthStateChanged()~~ function, an auth observer. By using an observer, we ensure that the Auth object is not in an intermediate state - such as initialization- when we get the current user.

> Note that the ~~onAuthStateChanged()~~ function returns an ~~unsubscribe()~~ function for the observer. We can return the ~~unsubscribe()~~ function in order to unsubscribe from the observer when the component unmounts.

Below, we have an example that shows ~~onAuthStateChanged()~~ implementation in a React app. Note that we are using React Context API for sharing the user information throughout the application.

```js {numberLines, 20-22}
import React, { useState, useEffect, createContext } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"

export const AuthContext = createContext()

const UserInfo = ({ children }) => {
  const [name, setName] = useState(null)

  const auth = getAuth()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        // User is signed in
        setName(user.displayName)
      } else {
        // user is signed out
        setName(null)
      }
    })
    // Return the unsubscribe() function to unsubscribe from the observer when the component unmounts
    return () => {
      unsubscribe()
    }
  }, [auth])

  const user = {
    name,
    setName,
  }

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export default UserInfo
```
