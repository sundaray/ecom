---
title: "staggerChildren in Framer Motion"
date: "2022-09-27"
excerpt: "Learn how to stagger the animation of child components."
categories: ["Framer Motion"]
---

In Framer Motion, when we use variants, we get access to ~~staggerChildren~~ (a ~~transition~~ prop) using which we can stagger the animation of child components by certain duration (in seconds).

```js {numberLines, 8-8, 14-14, 27-27}
import React from "react"
import { motion } from "framer-motion"

const boxVariants = {
  initial: { x: "-10rem" },
  animate: {
    x: 0,
    transition: { staggerChildren: 0.05, ease: "easeInOut", duration: 1 },
  },
}

const Box = () => {
  return (
    <motion.div variants={boxVariants} initial="initial" animate="animate">
      <motion.div
        variants={boxVariants}
        className="w-60 h-12 mb-6 bg-yellow-400"
      ></motion.div>
      <motion.div
        variants={boxVariants}
        className="w-60 h-12 mb-6 bg-green-400"
      ></motion.div>
      <motion.div
        variants={boxVariants}
        className="w-60 h-12 bg-blue-400"
      ></motion.div>
    </motion.div>
  )
}

export default Box
```

Above, notice that we don’t repeat the ~~initial~~ & ~~animate~~ props for the children ~~div~~ components. Because the parent ~~div~~ component has children, changes in variant flow down through the component hierarchy.
