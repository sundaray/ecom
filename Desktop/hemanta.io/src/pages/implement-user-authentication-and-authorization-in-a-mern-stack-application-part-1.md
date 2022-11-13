---
title: "Implement User Authentication and Authorization in a MERN Stack Application - Part-1"
date: "2021-10-26"
excerpt: "Application preview and tech stack"
categories: ["React"]
---

```toc

```

### Application preview

We will learn how to implement user authentication and authorization by building a MERN stack application from scratch.

Here is the preview of the application that we are going to build.

The ~~Books~~ page displays a ~~Download Book~~ button.

![Books Page](../images/userAuth/previewBooks.png)

If you are not logged in, clicking on the button will redirect you to the ~~Signin~~ page.

![Sign in Page](../images/userAuth/previewSignin.png)

After you sign in, clicking on the ~~Download Book~~ button will display the text ~~You can download the book now.~~

![Sign out Page](../images/userAuth/previewSignout.png)

A first-time user of the application can sign up using the Sign up form.

![Sign up Page](../images/userAuth/previewSignup.png)

Also, a logged in user having ~~admin~~ privileges can access the ~~/users~~ route, which displays a list of registered users.

![Users](../images/userAuth/users.png)

Finally, you can sign out of the application by clicking on the ~~Sign out~~ button.

### Tech stack

We will build the application using the following tech stack:

![Frontend Tech Stack](../images/userAuth/frontend.png)

![Backend Tech Stack](../images/userAuth/backend.png)

Continue to [part-2](https://hemanta.io/implement-user-authentication-and-authorization-in-a-mern-stack-application-part-2/)
