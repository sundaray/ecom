---
title: "How to Handle Conditional Class Names in React?"
date: "2021-06-29"
excerpt: "Dynamically construct class names using the clsx package."
categories: ["React"]
---

We can dynamically construct class names in React using a library named ~~clsx~~.

### Installation

```sh
npm install --save clsx
```

### Syntax

```js
clsx({ "your-class-name": booleanValue })
```

We pass an object to the ~~clsx~~ function with class names that we want to apply to a specific element.

### Example

```jsx {numberLines, 2-2, 5-8    }
import React from "react"
import clsx from "clsx"

const App = () => {
  const className = clsx({
    className1: true,
    className2: true,
  })

  console.log(className)
  // "className1 className2"
  console.log(typeof className)
  // string

  return <h1>Hello World!</h1>
}

export default App
```

We have set the values of two class names - ~~className1~~ & ~~className2~~ - to ~~true~~. So, ~~clsx~~ returns a string (line 13) containing both class names separated by space (line 11).

```jsx {numberLines, 7-7, 11-11}
import React from "react"
import clsx from "clsx"

const App = () => {
  const className = clsx({
    className1: true,
    className2: false,
  })

  console.log(className)
  // "className1"
  console.log(typeof className)
  // string

  return <div></div>
}

export default App
```

Now, we have set the value of ~~className2~~ to ~~false~~, so the resulting string contains only ~~className1~~.

Let's consider an example.

We have the ~~App~~ component that receives a ~~theme~~ prop.

```jsx:title=src/App.js {numberLines, 5-8}
import React from "react";
import clsx from "clsx";

const App = ({ theme }) => {
  const className = clsx({
    welcome: true,
    [theme]: true,
  });

  return <h1 className={className}>Hello World</h1>;
};

export default App;
```

We want to apply two class names to the ~~h1~~ element: ~~welcome~~ and whatever is the value of the ~~theme~~ prop. On line 7, note that we have the ~~theme~~ prop in brackets ~~[]~~. This means that the name of the property will be computed based on the value of the ~~theme~~ prop.

Below, we have passed the ~~App~~ component a ~~theme~~ prop with the value of ~~light~~. So, the class name that will be applied to the ~~h1~~ element is ~~"welcome light"~~.

```jsx:title=src/index.js {numberLines, 8-8}
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <>
    <App theme="light" />
  </>,
  document.getElementById("root")
);
```

Then, we can style the ~~h1~~ element based on different class names applied to it.

```css:title=src/index.css {numberLines}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

.welcome {
  font-size: 2rem;
  margin: 2rem;
}

.dark {
  color: red;
}

.light {
  color: gold;
}
```

Because we have passed a ~~theme~~ prop to the ~~App~~ component with the value of ~~light~~ and in ~~index.css~~ we have applied the css rule ~~color: "gold';~~ to the ~~light~~ class, we see ~~Hello World~~ being rendered in gold color.

![Text in Light Mode](../images/clsx/clsx-light.png)

Now, pass the ~~theme~~ prop the value of ~~dark~~ and we get ~~Hello World~~ rendered in red color.

![Text in Dark Mode](../images/clsx/clsx-dark.png)
