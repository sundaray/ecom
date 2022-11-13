---
title: "How to Scroll to Top on Route Change Using React Router V6?"
date: "2022-10-13"
excerpt: "Scroll to top on every navigation."
categories: ["React"]
---

With client-side routing using react-router-v6, when you navigate to a page with a lot of content by clicking on a ~~\<Link>~~, you stay scrolled down.

This is a poor user experience. Instead, you want the page to be scrolled to the top.

We can achieve this with a ~~\<ScrollToTop>~~ component that will scroll the window up on every navigation.

```jsx {numberLines}
Import { useEffect } from "react";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return children;
};

export default ScrollToTop;
```

~~behavior: “smooth”~~ makes the scrolling animate smoothly.

###### Find more about useLocation in my blog post [here](https://hemanta.io/react-router-uselocation/).

Next, we need to wrap the ~~\<App>~~ component with the ~~\<ScrollToTop>~~ component.

```jsx:title=src/index.js {numberLines, 6-6, 12-12, 14-14}
import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom"
import ScrollToTop from "./components/commonUi/ScrollToTop"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </React.StrictMode>
)
```

And that’s it.

Now, when you navigate to a new route, the page is scrolled to the top.
