---
title: "CSS - Relative Measurements"
date: "2021-10-31"
excerpt: "em, rem"
categories: ["CSS"]
---

```toc

```

Relative measurements allow for the proportions of a website to remain intact regardless of screen size or layout.

### Em

~~em~~ represents the size of the base font being used. For example, if the base font of a browser is 16 pixels (_which is normally the default size of text in a browser_), then 1em is equal to 16 pixels. 2ems would equal 32 pixels, and so on.

```css {numberLines}
h1 {
  font-size: 2em;
}
```

In the example above, no base font has been specified, therefore the font size of the h1 element will be set relative to the default font size of the browser. Assuming the default font size is 16 pixels, then the font size of the h1 element will be 32 pixels.

```css {numberLines}
.heading-container {
  font-size: 18px;
}

.heading-container h1 {
  font-size: 1.5em;
}
```

In the example above, we have defined a base font size of 18px for all text within the ~~heading-container~~ element. The second CSS rule will set the font size of all h1 elements inside of the ~~heading-container~~ relative to the base font size of ~~heading-container~~ (18 pixels). The resulting font-size of h1 elements will be 27 pixels.

### Rem

The rem measurement is the best way to size elements consistently across an entire website. When we use rems, all elements are compared to the same font size value, making it easy to predict how large or small fonts will appear.

Rem stands for _root em_. It acts similar to em, but instead of checking parent elements to size font, it checks the root element. The root element is the \<html> tag.

**Most browsers set the font-size of \<html> to 16 pixels, so by default rem measurements will be compared to that value**. To set a different font size for the root element, you can add a CSS rule:

```css {numberLines}
html {
  font-size: 10px;
}

h1 {
  font-size: 2rem;
}
```

In the example above, the font size of the root element(\<html>) is set to 10 pixels. All subsequent rem measurements will now be compared to that value and the size of h1 elements in the example will be 20 pixels.
