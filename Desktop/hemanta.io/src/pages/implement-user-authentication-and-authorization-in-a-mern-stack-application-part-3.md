---
title: "Implement User Authentication and Authorization in a MERN Stack Application - Part-3"
date: "2021-10-27"
excerpt: "Defining and creating the user model, setting up routes and creating route handlers, defining a custom error handler, defining authentication and authorization middleware, generating JWTs."
categories: ["User Authentication & Authorization"]
---

```toc

```

###### This blog post is part of a series. You must complete [part-1](https://hemanta.io/implement-user-authentication-and-authorization-in-a-mern-stack-application-part-1/) & [part-2](https://hemanta.io/implement-user-authentication-and-authorization-in-a-mern-stack-application-part-2/) before continuing here.

### Defining & creating the user model

Inside the ~~server~~ folder, create a folder named ~~models~~ and inside the ~~models~~ folder, create a file named ~~userModel.js~~.

```js:title=server/models/userModel.js {numberLines}
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  firstName: { type: String },
  email: {
    type: String,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.methods.matchPassword = async function (incomingPassword) {
  return await bcrypt.compare(incomingPassword, this.password);
};

userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
```

### Setting up routes and creating route handlers

Inside the ~~server~~ folder, create a folder named ~~routes~~ and inside the ~~routes~~ folder, create a file named ~~authRoutes.js~~.

```js:title=server/routes/authRoutes.js {numberLines, 11, 21-22}
const express = require("express");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const { generateToken } = require("../utils/generateToken");
const { requireAuth, requireAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

router.get(
  "/api",
  requireAuth,
  asyncHandler(async (req, res) => {
    res.send({
      status: "You can download the book now.",
    });
  })
);

router.get(
  "/api/users",
  requireAuth,
  requireAdmin,
  asyncHandler(async (req, res) => {
    const users = await User.find();

    if (users) {
      res.json(users);
    } else {
      const err = new Error("Users not found.");
      err.status = 404;
      next(err);
    }
  })
);

router.post(
  "/api/signup",
  asyncHandler(async (req, res, next) => {
    const { firstName, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      const err = new Error("User already registered.");
      err.status = 400;
      next(err);
    }

    const user = await User.create({
      firstName,
      email,
      password,
    });

    res.json({
      token: generateToken(user._id),
    });
  })
);
router.post(
  "/api/signin",
  asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        firstName: user.firstName,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      const err = new Error("Invalid email or password");
      err.status = 401;
      next(err);
    }
  })
);

module.exports = router;
```

**LINE:11:** The ~~/api~~ route is a protected route, protected by the ~~requireAuth~~ middleware. This means that _only_ a logged in user will be able to access this route.

**LINE:21-22:** The ~~/api/users~~ route is also a protected route, protected by both the ~~requireAuth~~ and the ~~requireAdmin~~ middlewares. This means that _only_ a logged in user having admin privileges will be able to access this route.

![Protected Routes](../images/userAuth/authRequest.png)

### Defining a custom error handler

Inside the ~~server~~ folder, create a folder named ~~middleware~~ and inside the ~~middleware~~ folder, create a file named ~~errorMiddleware.js~~.

```js:title=server/middleware/errorMiddleware.js {numberLines}
const globalErrorHandler = (err, req, res, next) => {
  err.status = err.status || 500;
  res.status(err.status).json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
module.exports = globalErrorHandler;
```

### Defining authentication and authorization middleware

Inside the ~~middleware~~ folder, create a file named ~~authMiddleware.js~~.

```js:title=server/middleware/authMiddleware.js {numberLines}
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const requireAuth = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id);
      next();
    } catch (err) {
      next(err);
    }
  }

  if (!token) {
    const err = new Error("Not Authorized, No Token");
    err.status = 401;
    next(err);
  }
});

const requireAdmin = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    const err = new Error("Not authorized as an admin");
    err.status = 401;
    next(err);
  }
});

module.exports = { requireAuth, requireAdmin };
```

### Generating JSON Web Tokens

Inside the ~~server~~ folder, create a folder named ~~utils~~ and inside the ~~utils~~ folder, create a file named ~~generateToken.js~~.

```js:title=server/utils/generateToken.js {numberLines}
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = { generateToken };
```

Next, add a ~~JWT_SECRET~~ key in the ~~.env~~ file as shown below:

```sh {numberLines, 3}
PORT = 5000
MONGO_URI = mongodb+srv://hemanta:ed58KbNRsXCkdXIw@google-oauth.flvhr.mongodb.net/oauth?retryWrites=true&w=majority
JWT_SECRET = abc@1234
```

Note that the value of the ~~JWT_SECRET~~ key can be anything you like.

### Updating the index.js file

Add the highlighted code snippets in the ~~index.js~~ file as shown below:

```js:title=server/index.js {numberLines, 2-2, 4-4, 15-15, 17-17}
const express = require("express");
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/db");
const globalErrorHandler = require("./middleware/errorMiddleware");
const dotenv = require("dotenv");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use(authRoutes);

app.use(globalErrorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
```

Continue to [part-4](https://hemanta.io/implement-user-authentication-and-authorization-in-a-mern-stack-application-part-4/)
