---
title: "An Introduction to JSX"
date: "2022-01-17"
excerpt: "JSX - A syntax extension for JavaScript"
categories: ["React"]
---

```toc

```

JSX is a syntax extension for JavaScript. The term **Syntax Extension** means that JSX is not valid JavaScript and web browsers can’t read it. Therefore, a JavaScript file that contains JSX code must be compiled by a JSX compiler (_that will convert JSX into regular JavaScript_) before reaching the web browser.

JSX was written to be used with React and looks a lot like HTML.

### JSX Elements

A basic unit of JSX is called a JSX element.

Here is an example of a JSX element:

```jsx {numberLines}
<h1>An Introduction to JSX</h1>
```

JSX elements are treated as JavaScript expressions. They can go anywhere that JavaScript expressions can go. This means that a JSX element can be saved in a variable, passed to a function, stored in an object or array.

Here is an example of a JSX element being saved in a variable:

```jsx {numberLines}
const philosopher = <p>Schopenhauer was a German philosopher.</p>
```

Here’s an example of several JSX elements being stored in an object:

```jsx {numberLines}
const architects = {
  French: <li>Le Corbusier</li>,
  German: <li>Frei Otto</li>,
  British: <li>Zaha Hadid</li>,
  American: <li>Philip Johnson</li>,
}
```

### Attributes in JSX

JSX elements can have attributes, just like HTML elements can.

A JSX attribute is written using HTML like syntax: a name, followed by an equal sign, followed by a value.

The value should be wrapped in quotes like this:

```sh {numberLines}
my-attribute-name = "my-attribute-value"
```

Here are some JSX elements with attributes:

```jsx {numberLines}
<a href="https://www.google.com">Search Engine</a>
```

```jsx {numberLines}
const title = <h1 id="title">Introduction to React.js</h1>
```

A single JSX element can have many attributes, just like HTML:

```jsx {numberLines}
const laptop = (
  <img
    src="images/macbook.jpg"
    alt="Macbook Pro"
    width="600px"
    height="500px"
  />
)
```

### Nested JSX

You can nest JSX elements inside of other JSX elements, just like in HTML.

Here is an example of a JSX ~~\<h1>~~ element, nested inside of a JSX ~~\<a>~~ element.

```jsx {numberLines}
const blog = (
  <a href="https://www.hemanta.io">
    <h1>Hemanta Sundaray</h1>
  </a>
)
```

> Note: **If a JSX expression, takes up more than one line, then you must wrap the multiline JSX expression in parentheses**.

```jsx {numberLines}
const portfolio = (
  <a href="https://www.sundaray.io">
    <h1>PORTFOLIO</h1>
  </a>
)
```

Nested JSX expressions can be saved as variables, passed to functions etc., just like non-nested JSX expressions can! Here is an example of a nested JSX expression being saved as a variable:

```jsx {numberLines}
const example = (
  <a href="https://www.example.com">
    <h1>Example</h1>
  </a>
)
```

### JSX Outer Elements

A JSX expression must have exactly one outermost element. In other words, the first opening tag and the final closing tag of a JSX expression must belong to the same JSX element!

> Note: If a JSX expression has multiple outer elements, the solution is simple: wrap the JSX expression in a ~~\<div>~~.

### Rendering JSX

To render a JSX expression means to make it appear on screen.

The following code will render a JSX expression:

```jsx {numberLines}
ReactDOM.render(<h1>Hello world</h1>, document.getElementById("app"))
```

### ReactDOM.render()

~~ReactDOM~~ is the name of a JavaScript library. This library contains React specific methods, all of which deal with the DOM is some way or another.

~~ReactDOM.render()~~ is the most common way to render JSX. It takes a JSX expression, creates a corresponding tree of DOM nodes, and adds that tree to the DOM. This is the way to make a JSX expression appear on screen.

~~ReactDOM.render()~~’s first expression should be a JSX expression and it will be rendered to the screen.

The first argument does not literally have to be a JSX expression; it should evaluate to a JSX expression. The first argument could also be a variable, so long as the variable evaluates to a JSX expression.

The first argument is appended to whatever element is selected by the second argument. The element selected by the second argument acts as the container for ~~ReactDOM.render()~~’s first argument.

**The special thing about ~~ReactDOM.render()~~ is that it only updates DOM elements that have changed. This means if you render the exact same thing twice in a row, the second render will do nothing**. This is significant! Only updating the necessary DOM elements is what makes React so successful! React accomplishes this, thanks to something called the virtual DOM.
