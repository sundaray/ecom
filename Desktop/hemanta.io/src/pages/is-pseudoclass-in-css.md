---
title: ":is() Pseudo-class in CSS"
date: "2021-07-09"
excerpt: ":is() pseudo-class allows us to write large selectors in a more compact form."
categories: ["CSS"]
---

The CSS ~~:is~~ pseudo-class is useful for writing large selectors in a more compact form.

The ~~:is()~~ function takes a selector list as its argument, and selects any element that can be selected by one of the selectors in that list.

Below, we have an ~~App~~ component.

```jsx {numberLines}
import React from "react"

const App = () => {
  return (
    <div className="wrapper">
      <header>
        <p>Header</p>
      </header>
      <main>
        <p>Main Content</p>
      </main>
      <footer>
        <p>All Rights Reserved</p>
      </footer>
    </div>
  )
}
export default App
```

We can style the paragraphs inside the ~~header~~, ~~main~~ and ~~footer~~ tags as follows:

```css {numberLines}
header p,
main p,
footer p {
  font-size: 1.4rem;
  font-weight: 700;
  color: gray;
}
```

This is the usual approach. However, we can write our selectors in a more compact form using the ~~:is~~ pseudo-class as follows:

```css {numberLines}
/* Selects any paragraph inside a header, main or footer tag. */

:is(header, main, footer) p {
  font-size: 1.4rem;
  font-weight: 700;
  color: gray;
}
```
