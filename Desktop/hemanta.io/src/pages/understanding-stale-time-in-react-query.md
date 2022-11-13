---
title: "Understanding staleTime in React Query"
date: "2021-07-12"
excerpt: "Learn how can you decide on the interval at which queries get refetched in React Query"
categories: ["React Query"]
---

```jsx {numberLines}
import React, { useState } from "react"
import { useQuery } from "react-query"
import { Link } from "react-router-dom"
import axios from "axios"

const Posts = () => {
  const { isLoading, isError, error, data } = useQuery(["posts"], async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    )
    return data
  })

  const posts = isLoading ? (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  ) : isError ? (
    <p>{error.message}</p>
  ) : (
    data?.map(post => (
      <li key={post.id}>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </li>
    ))
  )

  return (
    <div className="col-8 col-md-6 mx-auto">
      <h1>Blog Posts</h1>
      {posts}
    </div>
  )
}

export default Posts
```

In the code snippet above, we are fetching a list of 100 blog posts from a fake REST API endpoint. React Query will cache the list of posts and will consider it as ~~stale~~. By default, stale queries are automatically refetched in the background, for example, when window is refocused or network is reconnected.

Consider a scenario where the list of posts are not updated often. So, there is no point refetching the data everytime we refocus on our window.

We can decide the time interval at which our query will get refetched by adding a ~~staleTime~~ property in the configuration object.

```jsx {numberLines, 15-18}
import React, { useState } from "react"
import { useQuery } from "react-query"
import { Link } from "react-router-dom"
import axios from "axios"

const Posts = () => {
  const { isLoading, isError, error, data } = useQuery(
    ["posts"],
    async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      )
      return data
    },
    {
      staleTime: 2000,
    }
  )

  const posts = isLoading ? (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  ) : isError ? (
    <p>{error.message}</p>
  ) : (
    data?.map(post => (
      <li key={post.id}>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </li>
    ))
  )

  return (
    <div className="col-8 col-md-6 mx-auto">
      <h1>Blog Posts</h1>
      {posts}
    </div>
  )
}

export default Posts
```

If we pass in a ~~staleTime~~ value of 2000 (_in milliseconds_), for example, then our query will remain marked as ~~fresh~~ for two seconds before being marked as ~~stale~~. And the query will not get refetched on window refocus as long as it remains in ~~fresh~~ state.

If we pass in ~~staleTime~~ of ~~infinity~~, the query will never become stale.

###### Learn how to fetch data using React Query in my blog post [here](https://hemanta.io/react-query-a-guide-to-fetching-data/).
