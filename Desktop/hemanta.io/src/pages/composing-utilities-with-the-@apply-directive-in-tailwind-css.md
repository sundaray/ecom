---
title: "Composing Utilities With The @apply Directive in Tailwind CSS"
date: "2021-11-25"
excerpt: "@apply directive"
categories: ["Tailwind CSS"]
---

There are some UI elements such as buttons and form elements that are often used at multiple places in an application.

Below, we have styled two buttons using utility classes.

![Button](../images/apply/buttons.png)

```jsx:title=src/App.js {numberLines, 6-6, 9-9}
import React from "react"

const App = () => {
  return (
    <>
      <button className="bg-blue-400 text-white px-2 py-1 text-sm font-medium m-5 rounded hover:bg-blue-500 hover:shadow hover:-translate-y-0.5 transition transform">
        Login
      </button>
      <button className="w-20 bg-red-400 text-white px-2 py-1 text-sm font-medium m-5 rounded hover:bg-red-500 hover:shadow hover:-translate-y-0.5 transition transform">
        Register
      </button>
    </>
  )
}

export default App
```

In the code snippet above, we can see that there are some utility classes that are the same in both the buttons. We would apply these utility classes for the base styling of any variant of our buttons.

Imagine an application with 20 buttons. This means that we would have to write the common utility classes (_used for the base styling_ ) 20 times. This will also lead to maintenance issues. If we ever decide to change the common utility classes, we would have to make the changes at 20 different places.

In such scenarios, we can use the ~~@apply~~ directive to extract the common utility classes into custom CSS classes. This way, we can avoid the duplication of the common utility classes.

Below, we have extracted our common utility classes into the ~~btn~~ class.

```css:title=src/index.css {numberLines}
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn {
    @apply m-5 text-white px-2 py-1 text-sm font-medium rounded hover:shadow hover:-translate-y-0.5 transition transform;
  }
}
```

> Note that I have added the ~~m-5~~ utility class just to add margins. This is not really a base utility class for our buttons.

To avoid specificity issues, we wrap our custom component styles with the ~~@layer components {....}~~ directive to tell Tailwind what layer those styles belong to.

Tailwind will automatically move those styles to the same place as ~~@tailwind components~~, so we don’t have to worry about getting the order right in our source files.

With the common utlity classes extracted into the ~~btn~~ class, we now have the right level of abstraction for our utility classes.

```jsx:title=src/App.js {numberLines}
import React from "react"

const App = () => {
  return (
    <>
      <button className="btn bg-blue-400 hover:bg-blue-500">Login</button>
      <button className="w-20 btn bg-red-400 hover:bg-red-500">Register</button>
    </>
  )
}

export default App
```

Now, let's take the abstraction one level deeper. Below, we have created two more custom CSS classes: ~~btn-primary~~ & ~~btn-danger~~.

```css:title=src/index.css {numberLines, 10-12, 14-16}
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn {
    @apply m-5 text-white px-2 py-1 text-sm font-medium rounded hover:shadow hover:-translate-y-0.5 transition transform;
  }

  .btn-primary {
    @apply bg-blue-400 hover:bg-blue-500;
  }

  .btn-danger {
    @apply bg-red-400 hover:bg-red-500;
  }
}
```

As we can see, we have drastically reduced the number of utility classes for styling our buttons.

```jsx:title=src/App.js {numberLines, 6-7}
import React from "react";

const App = () => {
  return (
    <>
      <button className="btn btn-primary">Login</button>
      <button className="btn btn-danger w-20">Register</button>
    </>
  );
};

export default App;
```
