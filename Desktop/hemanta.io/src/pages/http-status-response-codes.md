---
title: "HTTP Status Response Codes"
date: "2021-05-21"
excerpt: "Learn what different HTTP response status codes indicate."
categories: ["Express"]
---

```toc

```

Status codes are issued by a server in response to a client's request made to the server. They indicate whether a specific HTTP request has been successfully completed or not.

Responses are grouped in five classes:

- **Successful Responses**: 200-299
- **Client Errors**: 400-499
- **Server Error**: 500-599

### Ok 200

The request was fulfilled.

### Error 4xx 5xx

The 4xx codes are intended for cases in which the client seems to have erred, and the 5xx codes are intended for cases in which the server is aware that the server has erred.

### Bad request 400

The server could not understand the request due to invalid syntax.

### Unauthorized 401

This response means “unauthenticated”. That is the client must authenticate itself to get the requested response.

### Forbidden 403

The client identity is known to the server but the client does not have access rights to the content, that is, the server is refusing to give the requested resource.

### Not found 404

The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurrence on the web.

### Internal Error 500

The server encountered an unexpected situation it does not know how to handle.
