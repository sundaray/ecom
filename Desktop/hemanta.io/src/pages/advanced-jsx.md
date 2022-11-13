---
title: "Advanced JSX"
date: "2022-01-23"
excerpt: "className, self-closing tags, curly braces & variables in JSX, event listeners & keys"
categories: ["React"]
---

```toc

```

### className

In HTML, it’s common to use ~~class~~ as an attribute name. In JSX, you can’t use the word ~~class~~. You have to use ~~className~~ instead:

```jsx {numberLines}
<h1 className="greeting">Hello World!</h1>
```

This is because JSX gets translated into JavaScript, and ~~class~~ is a reserved word in JavaScript. When JSX is rendered, JSX ~~className~~ attributes are automatically rendered as ~~class~~ attributes.

### Self-Closing Tags

When you write a self-closing tag in HTML, it is optional to include a forward-slash immediately before the final angle-bracket. But in JSX, you have to include the slash. Or else, you will raise an error.

```sh {numberLines}
FINE IN JSX

<img />

NOT FINE AT ALL IN JSX

<img>
```

### Curly braces in JSX

Any code in between the tags of a JSX element will be read as JSX, not as regular JavaScript! If you want to treat the code located in between JSX tags like ordinary JavaScript, you can do so by wrapping them in curly braces.

```jsx {numberLines}
// Everything inside of the curly braces will be treated as regular JavaScript.

<p>{2 + 3}</p>
```

> **Note:** The curly braces themselves won’t be treated as JSX nor as JavaScript. They are markers that signal the beginning and end of a JavaScript injection into JSX, similar to the quotation marks that signal the boundaries of a string.

### Variables in JSX

When you inject JavaScript into JSX, that JavaScript is part of the same environment as the rest of the JavaScript in your file.

This means that you can access variables while inside of a JSX expression, even if those variables were declared on the outside:

```jsx {numberLines}
const name = "Hemanta"

const greeting = <h1>Hello {name}</h1>
```

### Event listeners

You create an event listener by giving a JSX element a special attribute. Here’s an example:

```jsx {numberLines}
<button onClick={myFunc}>Submit</button>
```

An event listener attribute’s name should be something like ~~onClick~~ or ~~onFocus~~: the word ~~on~~, plus the type of event that you’re listening for.

An event listener attribute’s value should be a function. The above example would only work if ~~myFunc~~ were a valid function that had been defined elsewhere.

**Example:**

```jsx {numberLines, 6-8, 13-13}
import React, { useState } from "react"

const App = () => {
  const [counter, setCounter] = useState(0)

  const handleAddClick = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleAddClick}>Add</button>
    </div>
  )
}
export default App
```

> Note that in HTML, event listener names are written in all lowercase, such as ~~onclick~~ or ~~onmouseover~~. In JSX, event listener names are written in camelCase, such as ~~onClick~~ or ~~onMouseOver~~.

### Keys

A key is a JSX attribute. The attribute’s name is ~~key~~. The attribute’s value should be something unique, similar to an id attribute.

keys don’t do anything that you can see! React uses them internally to keep track of lists.

If you don’t use keys when you’re supposed to, React might accidentally scramble your list-items into the wrong order.

Not all lists need to have keys. A list needs keys if either of the following are true:

- The list-items have memory from one render to the next. For instance, when a to-do list renders, each item must "remember" whether it was checked off. The items shouldn’t get amnesia when they render.

- A list’s order might be shuffled. For instance, a list of search results might be shuffled from one render to the next.

- If neither of these conditions are true, then you don’t have to worry about keys. If you aren’t sure then it never hurts to use them!

**Example:**

```jsx {numberLines, 21-21}
import React from "react"
import { Row, Col } from "react-bootstrap"
import { useSelector } from "react-redux"
import Product from "./Product"
import Loader from "./Loader"
import Message from "./Message"

const Products = () => {
  const { status, products, error } = useSelector(state => state.products)

  return (
    <>
      <h1>Latest Products</h1>
      {status === "loading" ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map(product => (
            <Col key={product._id}>
              <Product item={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default Products
```
