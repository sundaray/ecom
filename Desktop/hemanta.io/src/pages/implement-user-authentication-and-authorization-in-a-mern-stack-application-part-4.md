---
title: "Implement User Authentication and Authorization in a MERN Stack Application - Part-4"
date: "2021-10-28"
excerpt: "Proxying API requests, state management using Redux Toolkit, React forms using Formik and yup, making authenticated API requests."
categories: ["User Authentication & Authorization"]
---

```toc

```

###### This blog post is part of a series. You must complete [part-1](https://hemanta.io/implement-user-authentication-and-authorization-in-a-mern-stack-application-part-1/) & [part-2](https://hemanta.io/implement-user-authentication-and-authorization-in-a-mern-stack-application-part-2/) & [part-3](https://hemanta.io/implement-user-authentication-and-authorization-in-a-mern-stack-application-part-3/) before continuing here.

In the ~~src~~ folder, create a folder named ~~components~~ and inside the ~~components~~ folder, create a file named ~~Signup.js~~.

### The Signup page

```js:title=client/src/components/Signup.js {numberLines}
import React from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "./stateSlices/signupSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { status, userRegistered, error } = useSelector(
    (state) => state.signup
  );
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Please enter your first name"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email address"),
      password: Yup.string()
        .min(5, "Must be 5 characters or more")
        .required("Please enter your password"),
    }),
    onSubmit: (values) => {
      dispatch(signupUser(values));
    },
  });

  if (userRegistered) {
    history.push("/signin");
  }

  return (
    <div className="register-form-container">
      <div className="col-10 col-sm-8 col-md-4 mx-auto">
        <h1 className="font-weight-bold">Register</h1>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group col-10 col-sm-8 col-md-4 mx-auto mt-5">
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <label htmlFor="firstName">First Name</label>
          <input
            className="form-control form-control-lg"
            id="firstName"
            name="firstName"
            type="text"
            {...formik.getFieldProps("firstName")}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <small className="form-text text-danger">
              {formik.errors.firstName}
            </small>
          ) : null}
        </div>
        <div className="form-group col-10 col-sm-8 col-md-4 mx-auto mt-3">
          <label htmlFor="email">Email</label>
          <input
            className="form-control form-control-lg"
            id="email"
            name="email"
            type="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <small className="form-text text-danger">
              {formik.errors.email}
            </small>
          ) : null}
        </div>
        <div className="form-group col-10 col-sm-8 col-md-4 mx-auto mt-3">
          <label htmlFor="password">Password</label>
          <input
            className="form-control form-control-lg"
            id="password"
            name="password"
            type="password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <small className="form-text text-danger">
              {formik.errors.password}
            </small>
          ) : null}
        </div>
        <div className="col-10 col-sm-8 col-md-4 mx-auto mt-3">
          <button
            type="submit"
            className="btn btn-lg btn-primary btn-block register-button"
          >
            {status === "loading" ? (
              <div className="spinner-border text-light" role="status">
                <span className="sr-only"></span>
              </div>
            ) : null}{" "}
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
export default Signup;
```

### The Signin page

In the ~~components~~ folder, create a file named ~~Signin.js~~.

```js:title=client/src/components/Signin.js {numberLines}
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signinUser } from "./stateSlices/signinSlice";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Signin = () => {
  const { status, loggedInUser, error } = useSelector((state) => state.signin);

  const dispatch = useDispatch();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email address"),
      password: Yup.string().required("Please enter your password"),
    }),
    onSubmit: async (values) => {
      dispatch(signinUser(values));
    },
  });

  if (loggedInUser) {
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    history.push("/");
  }
  return (
    <div className="login-form-container">
      <div className="col-10 col-sm-8 col-md-4 mx-auto">
        <h1 className="font-weight-bold">Login</h1>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group col-10 col-sm-8 col-md-4 mx-auto mt-5">
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <label htmlFor="email">Email</label>
          <input
            className="form-control form-control-lg"
            id="email"
            name="email"
            type="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <small className="form-text text-danger">
              {formik.errors.email}
            </small>
          ) : null}
        </div>
        <div className="form-group col-10 col-sm-8 col-md-4 mx-auto mt-3">
          <label htmlFor="password">Password</label>
          <input
            className="form-control form-control-lg"
            id="password"
            name="password"
            type="password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <small className="form-text text-danger">
              {formik.errors.password}
            </small>
          ) : null}
        </div>
        <div className="col-10 col-sm-8 col-md-4 mx-auto mt-3">
          <button type="submit" className="btn btn-lg btn-primary btn-block">
            {status === "loading" ? (
              <div className="spinner-border text-light" role="status">
                <span className="sr-only"></span>
              </div>
            ) : null}{" "}
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default Signin;
```

### The Users page

In the ~~components~~ folder, create a file named ~~Users.js~~.

```js:title=client/src/components/Users.js {numberLines}
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./stateSlices/usersSlice";
import { useHistory } from "react-router-dom";

const Users = () => {
  const { loggedInUser } = useSelector((state) => state.signin);
  const { status, users, error } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!loggedInUser || !loggedInUser.isAdmin) {
      history.push("/signin");
    }

    if (loggedInUser && loggedInUser.isAdmin) {
      dispatch(fetchUsers({ token: loggedInUser.token }));
    }
  }, [dispatch, loggedInUser]);

  return (
    <div className="col-10, col-sm-8, col-md-6 mx-auto">
      <h1>Registered Email IDs</h1>
      <table className="table table-striped table-bordered table-hover mt-3">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {users
            ? users.map((user) => (
                <tr>
                  <td>{user.firstName}</td>
                  <td>{user.email}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
```

### The Home page

In the ~~components~~ folder, create a file named ~~Home.js~~.

```js:title=client/src/components/Home.js {numberLines}
import React from "react";

const Home = () => {
  return <h1>Home</h1>;
};

export default Home;
```

### The Header component

In the ~~components~~ folder, create a file named ~~Header.js~~.

```js:title=client/src/components/Header.js {numberLines}
import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./stateSlices/signinSlice";
import { useHistory } from "react-router-dom";

const Header = () => {
  const { loggedInUser } = useSelector((state) => state.signin);

  const dispatch = useDispatch();
  const history = useHistory();

  const logoutSubmitHandler = () => {
    dispatch(logout());
    localStorage.removeItem("loggedInUser");
    history.push("/");
  };
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
            <NavLink to="/books" activeClassName="active">
              Books
            </NavLink>
          </li>
          <li>
            {loggedInUser ? (
              <button
                onClick={logoutSubmitHandler}
                className="btn btn-lg btn-primary btn-block"
              >
                Sign out
              </button>
            ) : (
              <ul>
                <li>
                  <NavLink to="/signup" activeClassName="active">
                    Sign up
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/signin" activeClassName="active">
                    Sign in
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

### The Books page

In the ~~components~~ folder, create a file named ~~Books.js~~.

```js:title=client/src/components/Books.js {numberLines}
import React from "react";
import { downloadBook } from "./stateSlices/bookSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Books = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { data } = useSelector((state) => state.book);
  const { loggedInUser } = useSelector((state) => state.signin);

  const downloadBookHandler = () => {
    if (!loggedInUser) {
      history.push("/signin");
    } else {
      dispatch(
        downloadBook({
          token: loggedInUser.token,
        })
      );
    }
  };

  return (
    <>
      <button
        className="btn btn-lg btn-primary btn-block"
        onClick={downloadBookHandler}
      >
        Download Book
      </button>
      <h4>{data ? data.status : null}</h4>
    </>
  );
};

export default Books;
```

### Creating a Redux store

In the ~~src~~ folder, create a file named ~~store.js~~.

```js:title=client/src/store.js {numberLines}
import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./components/stateSlices/signupSlice";
import signinReducer from "./components/stateSlices/signinSlice";
import downloadBookReducer from "./components/stateSlices/bookSlice";
import usersReducer from "./components/stateSlices/usersSlice";

const loggedInUserFromStorage = localStorage.getItem("loggedInUser")
  ? JSON.parse(localStorage.getItem("loggedInUser"))
  : null;
const preloadedState = {
  signin: {
    loggedInUser: loggedInUserFromStorage,
  },
};

export default configureStore({
  reducer: {
    signup: signupReducer,
    signin: signinReducer,
    book: downloadBookReducer,
    users: usersReducer,
  },
  preloadedState,
});
```

### Creating Redux state slices

In the ~~components~~ folder, create a folder named ~~stateSlices~~ and inside the ~~stateSlices~~ folder, create four files: ~~signupSlice.js~~, ~~signinSlice.js~~, ~~bookSlice.js~~ and ~~usersSlice.js~~.

```js:title=client/src/components/stateSlices/signupSlice.js {numberLines}
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  userRegistered: null,
  error: null,
};

export const signupUser = createAsyncThunk(
  "signup/signupUser",
  async (signupFormData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/signup", signupFormData);
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: {
    [signupUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [signupUser.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.userRegistered = true;
    },
    [signupUser.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload.message;
    },
  },
});

export default signupSlice.reducer;
```

```js:title=client/src/components/stateSlices/signinSlice.js {numberLines}
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  loggedInUser: null,
  error: null,
};
export const signinUser = createAsyncThunk(
  "signin/signinUser",
  async (signinFormData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/signin", signinFormData);
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const signinSlice = createSlice({
  name: "signin",
  initialState,
  reducers: {
    logout(state, action) {
      state.loggedInUser = null;
    },
  },
  extraReducers: {
    [signinUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [signinUser.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.loggedInUser = action.payload;
    },
    [signinUser.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload.message;
    },
  },
});

export const { logout } = signinSlice.actions;

export default signinSlice.reducer;
```

```js:title=client/src/components/stateSlices/bookSlice.js {numberLines}
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  data: null,
  error: null,
};
export const downloadBook = createAsyncThunk(
  "book/downloadBook",
  async ({ token }, { rejectWithValue }) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await axios.get("/api", config);
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: {
    [downloadBook.pending]: (state, action) => {
      state.status = "loading";
    },
    [downloadBook.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    },
    [downloadBook.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload.message;
    },
  },
});

export default bookSlice.reducer;
```

```js:title=client/src/components/stateSlices/usersSlice.js {numberLines}
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  users: [],
  error: null,
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async ({ token }, { rejectWithValue }) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axios.get("/api/users", config);
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.users = [...action.payload];
    },
    [fetchUsers.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload.message;
    },
  },
});

export default usersSlice.reducer;
```

### Proxying API requests in React

#### Proxying in development mode

![Development Mode](../images/userAuth/devMode.png)

In production, we run only the Express server. The ~~create-react-app~~ server doesn’t even exist.

![Production Mode](../images/userAuth/prodMode.png)

Before deploying our app to production, we will build our React project using the command ~~npm run build~~. The build process will result in an optimized production build of our React app in the ~~build~~ folder, which will contain all the JS files, CSS files and media assets.

In the event of a request coming from the client, we will serve the root ~~index.html~~ file, the ~~main.js~~ file, CSS files and the media assets created during the build process.

### The setupProxy.js file

In the ~~src~~ folder, create a file named ~~setupProxy.js~~.

```js:title=client/src/setupProxy.js {numberLines}
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/api/signin", "/api/signup"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
```

### The App.js file

Paste the following code snippets in the ~~App.js~~ file.

```js:title=client/src/App.js {numberLines}
import React from "react";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Books from "./components/Books";
import Header from "./components/Header";
import Users from "./components/Users";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/books">
            <Books />
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

### The index.js file

Paste the following code snippet in the ~~index.js~~ file.

```js:title=client/src/index.js {numberLines}
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
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

### The index.css file

Paste the following styles rules in the ~~index.css~~ file.

```css:title=src/index.css {numberLines}
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
  color: gainsboro;
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

/*****************************/
/******* REGISTER & LOGIN*****/
/*****************************/
.login-form-container {
  margin-top: 5rem;
}

.register-form-container {
  margin-top: 5rem;
}

label {
  font-size: 1.5rem;
}
/***********************************/
/*******END OF REGISTER & LOGIN*****/
/***********************************/
```

Our application is ready. ~~cd~~ into the ~~auth~~ folder and start both the servers using the following command:

```sh
PS C:\Users\Delhivery\Desktop\auth> npm run dev
```
