---
title: "How to Create a Hamburger Menu Using GSAP & React?"
date: "2021-06-11"
excerpt: "Learn how to create a hamburger menu using GSAP & React."
categories: ["GSAP", "React"]
---

###### Learn GSAP fundmentals in my blog post [here](https://hemanta.io/gsap-notes/).

When I made my first portfolio site months ago using plain JavaScript, I used ~~GSAP~~ for doing all the animations. Since then, I have tried couple of other animation libraries. Out of them all, GSAP remains my all-time favorite. The timeline feature in particular is simply awesome.

Over time, my techstack has evolved. Now, I use React & Framer Motion, extensively, for all of my frontend projects. I use Framer Motion, not GSAP, because I find integrating GSAP with React a bit challenging. I could easily find answers to all of my GSAP-React related questions in the GSAP forum. But, to be honest, I have not really put that much effort into going to the forum and asking questions.

Having said that, because I love GSAP so much, I will be recreating all the animations that I did in GSAP and plain JavaScript in React in the coming months. My plan is to eventually switch from Framer Motion to GSAP.

Anyway, in this post, we will recreate the hamburger menu of my portfolio site using React.

You can take a look at the hamburger menu at the following link.

<https://hksportfolio.netlify.app>

I will give you the code samples. Then, I will briefly explain the key GSAP portions of the code. If you know GSAP fundamentals, you are good to go.

###### Understand the fundamentals of GSAP in my blog post [here](https://hemanta.io/gsap-notes/).

You can install GSAP in your React project using the following command:

```sh
npm i gsap
```

```jsx:title=src/index.js {numberLines}
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Menu from "./Menu";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Menu />
  </Router>,
  document.getElementById("root")
);
```

```css:title=src/index.css {numberLines}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  font-family: sans-serif;
}

.menu {
  position: fixed;
  top: 6%;
  right: 0;
  width: 6rem;
  height: 4rem;
  background-color: red;
  display: flex;
  justify-content: stretch;
  align-items: center;
  z-index: 1;
}

.menu-line-wrapper {
  width: 3rem;
  height: 2rem;
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  overflow: hidden;
  z-index: 1000;
}

.menu-line-wrapper:hover .menu-line-2 {
  width: 70%;
}

.menu-line {
  width: 90%;
  height: 0.2rem;
  background-color: black;
  transform-origin: center;
  transition: width 0.3s;
}

nav {
  position: fixed;
  top: 6%;
  width: 90%;
  height: 4rem;
  background-color: red;
  display: flex;
  justify-content: center;
  z-index: 10;
}

nav ul {
  width: 60%;
  height: 100%;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav li {
  position: relative;
}

.nav-link {
  font-family: "Roboto Mono", monospace;
  text-decoration: none;
  font-size: 1.3rem;
  color: black;
  cursor: pointer;
}

.nav-link::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 0%;
  height: 0.1rem;
  background-color: black;
  display: block;
  transition: width 0.3s;
}

.nav-link:hover::after {
  width: 100%;
}

nav a:link,
nav a:active,
nav a:visited {
  color: black;
  text-decoration: none;
}

nav span {
  color: black;
  font-size: 1.5rem;
}
```

```jsx:title=src/Menu.js {numberLines}
import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Link } from "react-router-dom"

const animation = gsap.timeline({ paused: true, reversed: true })

const Menu = () => {
  const navRef = useRef()
  const menuRef = useRef()

  useEffect(() => {
    const menuLine1 = menuRef.current.querySelector(".menu-line-1")
    const menuLine2 = menuRef.current.querySelector(".menu-line-2")
    const menuLine3 = menuRef.current.querySelector(".menu-line-3")

    animation
      .from(navRef.current, { x: "-100%", ease: "expo.inOut" })
      .to(menuLine1, { rotate: "45deg", y: ".9rem" }, "<")
      .to(menuLine2, { x: "-100%" }, "<")
      .to(menuLine3, { rotate: "-45deg", y: "-.9rem" }, "<")
  })

  const handleMenuClick = () => {
    animation.reversed() ? animation.play() : animation.reverse()
  }

  const handleNavLinkClick = () => {
    animation.reverse()
  }

  return (
    <>
      <div className="menu" ref={menuRef} onClick={handleMenuClick}>
        <div className="menu-line-wrapper">
          <div className="menu-line menu-line-1"></div>
          <div className="menu-line menu-line-2"></div>
          <div className="menu-line menu-line-3"></div>
        </div>
      </div>

      <nav ref={navRef}>
        <ul>
          <li onClick={handleNavLinkClick}>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <span>|</span>
          </li>
          <li onClick={handleNavLinkClick}>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>
          <li>
            <span>|</span>
          </li>
          <li onClick={handleNavLinkClick}>
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
          </li>
          <li>
            <span>|</span>
          </li>
          <li onClick={handleNavLinkClick}>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
export default Menu
```

**LINE 5**: The animation is paused and reversed at the start. The animation plays only when we click on the hamburger menu.

**LINE 23**: Clicking on the hamburger menu triggers the ~~handleMenuClick~~ handler. Inside the handler, we use JavaScript ternary operator to check whether ~~animation.reversed()~~ is truthy or falsy.
If truthy, we play the animation; or else, we reverse it.

**LINE 27**: When we click on the hamburger menu, the menu animates from a X value of -100%. On the menu, when we click on any navigation link, we get directed to that particular page and the menu animates back to its original position. This is handled by the ~~handleNavLinkClick~~ handler.

In a future blog post, we will recreate the exact hamburger menu animation using Framer Motion.
