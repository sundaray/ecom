---
title: "Cookies vs. localStorage vs. sessionStorage"
date: "2022-05-06"
excerpt: "Cookies, localStorage & sessionStorage"
categories: ["Web Development"]
---

![Cookies vs localStorage vs sessionStorage](../images/storage/storage.png)

~~localStorage~~ & ~~sessionStorage~~ are meant to be accessed directly by JavaScript &
not directly sent to the server like cookies.

Also, cookie expiration can be configured through code, but ~~localStorage~~ & ~~sessionStorage~~
expiration work differently and more so dependent on browser operations.

Cookies hold 4KB per domain, whereas ~~localStorage~~ & ~~sessionStorage~~ have greater capacity per domain.
