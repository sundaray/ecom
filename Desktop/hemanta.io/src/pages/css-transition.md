---
title: "CSS Transition"
date: "2021-11-09"
excerpt: "Learn how to cause the animation of a CSS property or properties to occur smoothly over a period of time"
categories: ["CSS"]
---

We can control the speed of animation when changing CSS properties using the CSS ~~transition~~ property, which is a shorthand for the following CSS properties:

- **transition-property**: The name or names of the CSS properties to which transition should be applied
- **transition-duration**: The duration over which the transition should occur
- **transition-delay**: Defines how long to wait between the time a property is changed and the transition actually begins
- **transition-timing-function**: Specifies a function to define how intermediate values of the transition are calculated

The shorthand CSS syntax is written as follows:

```sh {numberLines}
transition: <property> <duration> <timing-function> <delay>
```

Let’s say we have a button:

![Button](../images/transition/download.png)

And on hover, we want to change the color of the button text and the background color of the button. In order to make these changes occur smoothly over a period of time, we can use use the ~~transition~~ property as shown below:

```html {numberLines, 11-11}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <button>Download</button>
  </body>
</html>
```

```css {numberLines, 20-20}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px;
  font-family: sans-serif;
}

button {
  margin: 5rem;
  width: 10rem;
  height: 3rem;
  background-color: #777;
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

button:hover {
  color: gainsboro;
  background-color: #555;
}
```

The keyword ~~all~~ means that the transition should apply to both the properties: ~~color~~ & ~~background-color~~.
