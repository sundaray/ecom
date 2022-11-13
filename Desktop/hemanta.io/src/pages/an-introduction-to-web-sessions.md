---
title: "An Introduction to Web Sessions"
date: "2022-05-08"
excerpt: "Web sessions."
categories: ["Web Development"]
---

HTTP(S) protocol on its own is stateless, meaning requests and responses are just relaying information back and forth with no knowledge of a specific user.

But we want to create engaging, personalized experiences for users. This means there needs to be a system that associates the requests with a specific user and does so in a secure way. This is where sessions come in.

A web session refers to a series of user interactions over a time frame. Session data is stored server-side and associated with a session ID.

We can think of a session as a short-term memory for a web application.

### Sessions & Cookies

It’s a bit clunky for the client to remember to tack the session ID onto every request. Because of this, the session ID is often kept client-side in the form of session cookies.

Cookies are tiny pieces of data (text files of max 4kb) that the browser stores that are automatically sent with HTTP requests to a web application.

Cookies are set by the HTTP response header in key-value pairs:

```sh {numberLines}
Set-Cookie = key=value
```

A session cookie is sent with the first HTTP response from the server and persists until the browser is closed or the cookie expires. They look like this in the HTTP header:

```sh {numberLines}
Set-Cookie = sessionID=34kL64h
```

This is roughly how a session is implemented with cookies:

- A user goes to a site. The web server creates a session and session ID.
- In the server’s response, it tells the browser to store a cookie with the session ID (should not include any personal information).
- The session ID cookie automatically attaches to each subsequent HTTP request to the server.
- When the server reads the session ID cookie sent with the next HTTP request, it returns the session data associated with the ID.
- The process continues as long as the session is active.
- The session and session ID cookie expires after a user closes out the browser, logs out, or a predetermined session length passes.
