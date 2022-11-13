---
title: "Loading External JavaScript - Async vs Defer"
date: "2021-07-13"
excerpt: "The difference between async and defer attributes in the script tag."
categories: ["JavaScript"]
---

```toc

```

The HTML ~~script~~ tag is used to embed or refer to JavaScript code.

Before the browser can render a page, it has to build the DOM tree by parsing the HTML markup.

By default, JavaScript execution is **“parser blocking”**: when the browser encounters a script in the document, it does not have any idea what the script is planning to do on page. Therefore, it assumes the worst case scenario and blocks the parser.

It must pause DOM construction, hand over control to the JavaScript runtime and let the script execute before proceeding with DOM construction.
In the case of an external script, the parser is also forced to wait for the resource to download, which may incur one or more network round trips.

### async

In the presence of the ~~async~~ attribute, the script is fetched in parallel to parsing and evaluated as soon as it is available.

Adding the ~~async~~ keyword to the script tag signals to the browser that the script does not need to be executed at the exact point where it’s referenced and that the browser can continue to construct the DOM and let the script execute when it’s ready, for example after the file is fetched from the cache or remote server. This significantly improves performance.

### defer

The ~~defer~~ attribute is used to indicate to the browser that the script is meant to be executed after the document has been parsed but before firing ~~DOMContentLoaded~~.
