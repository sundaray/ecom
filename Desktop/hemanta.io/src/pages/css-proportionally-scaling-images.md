---
title: "CSS - Proportionally Scaling Images"
date: "2021-11-03"
excerpt: "center, no-repeat, cover"
categories: ["CSS"]
---

```toc

```

```jsx {numberLines}
import React from "react"

const App = () => {
  return (
    <div className="container">
      <img src="honda.jpg" alt="Honda 650R" />
    </div>
  )
}

export default App
```

```css {numberLines}
.container {
  width: 40rem;
  height: 20rem;
  border: 0.2rem solid red;
  overflow: hidden;
}

.container img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

![Honda Bike](../images/imageScale/honda.png)

The second CSS rule ensures that images scale with the width of the container.

The ~~height~~ property is set to ~~auto~~, meaning an image’s height will automatically scale proportionally with the width.

Finally, the last line will display images as block-level elements (_rather than inline-block, their default state_). This will prevent images from attempting to align with other content on the page (text), which can add unintended margin to the images.

### Scaling background Images

```css {numberLines, 4-5}
.container {
  width: 40rem;
  height: 20rem;
  background: url("./images/honda.jpg") center no-repeat;
  background-size: cover;
}
```

![Honda Bike](../images/imageScale/hondaBackground.png)

The third declaration instructs the CSS compiler to not repeat the image (_by default, images will repeat_) and centers the image within the element.

The final declaration scales the background image. The image will cover the entire background of the element, all while keeping the image in proportion.

If the dimensions of the image exceed the dimensions of the container then only a portion of the image will display.
