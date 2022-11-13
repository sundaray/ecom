---
title: "Implement Google Sign In Using the OAuth 2.0 API in an Express + React Application - Part-5"
date: "2021-10-30"
excerpt: "Working on the client-side."
categories: ["User Authentication & Authorization"]
---

```toc

```

###### This blog post is part of a series. You should complete [part-1](https://hemanta.io/implement-google-sign-in-using-oauth2.0-api-in-an-express-and-react-application-part-1/), [part-2](https://hemanta.io/implement-google-sign-in-using-the-oauth2.0-api-in-an-express-and-react-application-part-2/), [part-3](https://hemanta.io/implement-google-sign-in-using-the-oauth2.0-api-in-an-express-and-react-application-part-3/) & [part-4](https://hemanta.io/implement-google-sign-in-using-the-oauth2.0-api-in-an-express-and-react-application-part-4/) before continuing here.

Copy and paste the following code snippets in their respective files.

### client/src/index.js

```js:title=client/src/index.js {numberLines}
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
```

### client/src/app.js

```js:title=client/src/app.js {numberLines, 12-14}
import React, { useEffect } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Google from "./components/Google";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { googleLogin } from "./components/stateSlices/googleloginSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(googleLogin());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/google">
            <Google />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
```

**LINE:12-14** - When the application starts, we make a ~~GET~~ request to the ~~/api/currentUser~~ route and try to find out whether the user is logged in or not.

### client/src/index.css

```css:title=client/src/index.css {numberLines}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  font-family: sans-serif;
}

header {
  width: 100%;
  height: 6rem;
  background-color: black;
}

nav {
  width: 100%;
  height: 100%;
}

nav ul {
  width: 100%;
  height: 100%;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1rem;
}

nav ul li:not(:last-child) {
  margin-right: 1rem;
}

nav a {
  font-size: 1.5rem;
  text-decoration: none;
}

nav a:link,
a:visited {
  color: gray;
}

nav a:hover {
  color: white;
}

nav a:active {
  color: limegreen;
}

main {
  margin: 2rem;
}

.active {
  font-weight: 900;
}

.sign-out {
  border: 0.1rem solid gray;
  border-radius: 0.3rem;
  padding: 0.2rem;
}
```

### client/src/components/Home.js

```js:title=client/src/components/Home.js {numberLines}
import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { googleUser } = useSelector((state) => state.google);

  console.log(googleUser);

  return (
    <>
      <h1>Home</h1>
      <h3>Hi {googleUser ? googleUser.givenName : "Stranger"}</h3>
    </>
  );
};

export default Home;
```

### client/src/components/Header.js

```js:title=client/src/components/Header.js {numberLines}
import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const { googleUser } = useSelector((state) => state.google);

  const dispatch = useDispatch();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            {googleUser ? (
              <a href="/api/logout" className="sign-out">
                Sign out
              </a>
            ) : (
              <ul>
                <li>
                  <NavLink to="/google" activeClassName="active">
                    Google
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
```

### client/src/components/Google.js

```js:title=client/src/components/Google.js {numberLines}
import React from "react";

const Google = () => {
  return (
    <a href="/auth/google" className="google-link">
      <img src="google_signin.png" />
    </a>
  );
};

export default Google;
```

The ~~Sign in with Google~~ button can be downloaded at the link [here](https://developers.google.com/identity/branding-guidelines).

###### Learn how to create a custom Google sign-in button in my blog post [here](https://hemanta.io/building-a-custom-google-signin-button/).

### client/src/components/stateSlices/googleloginSlice.js

```js:title=client/src/components/stateSlices/googleloginSlice.js {numberLines}
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  googleUser: null,
  error: null,
};

export const googleLogin = createAsyncThunk(
  "google/googleLogin",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/currentUser");
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const googleloginSlice = createSlice({
  name: "google",
  initialState,
  reducers: {},
  extraReducers: {
    [googleLogin.pending]: (state, action) => {
      state.status = "loading";
    },
    [googleLogin.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.googleUser = action.payload;
    },
    [googleLogin.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload.message;
    },
  },
});

export default googleloginSlice.reducer;
```
