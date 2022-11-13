---
title: "Adding Global Base Styles on Top of Tailwind CSS"
date: "2021-11-27"
excerpt: "Using the @apply directive"
categories: ["Tailwind CSS"]
---

Tailwind includes a useful set of base styles out of the box. In addition, if you want to add some global styling, say to the ~~html~~ or ~~body~~ elements, you can do so as shown below:

```css:title=src/index.css {numberLines}
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-gray-50;
  }
}
```

The code snippet above will add a light gray background color to the ~~body~~ element.

###### Learn how to extract common utility classes into custom CSS classes using the ~~@apply~~ directive in my blog post [here](https://hemanta.io/composing-utilities-with-the-@apply-directive-in-tailwind-css/).
