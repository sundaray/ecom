import React, { useState } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { motion, AnimatePresence } from "framer-motion"
const _ = require("lodash")

const categoryVariant = {
  initial: {
    y: "-0.5rem",
    opaciy: 0,
    transition: {
      duration: 0.2,
    },
  },
  animate: {
    y: "0rem",
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
}

const arrowVariant = {
  initial: {
    rotate: 0,
    transition: {
      duration: 0.2,
    },
  },
  animate: {
    rotate: 180,
    transition: {
      duration: 0.2,
    },
  },
}

const Categories = ({ categories }) => {
  const [categoryOpen, setCategoryOpen] = useState(false)

  const showCategoryClick = () => {
    setCategoryOpen(!categoryOpen)
  }

  return (
    <div className="categories rounded border border-gray-300 shadow w-11/12 sm:9/12 md:w-3/5 lg:w-1/2 m-auto">
      <div
        className={`${
          categoryOpen === true ? "border-b border-gray-300" : null
        } categories-header`}
      >
        <p>Categories</p>
        <motion.div
          className="arrow"
          variants={arrowVariant}
          initial="initial"
          animate={categoryOpen ? "animate" : "initial"}
          onClick={showCategoryClick}
        >
          <FontAwesomeIcon icon={faArrowDown} />
        </motion.div>
      </div>
      <AnimatePresence>
        {categoryOpen && (
          <motion.ul
            className="flex flex-wrap m-auto p-1 list-none"
            key="dropdown"
            variants={categoryVariant}
            initial="initial"
            animate={categoryOpen ? "animate" : "initial"}
            exit="initial"
          >
            {categories.map(category => (
              <li key={category.fieldValue}>
                <Link
                  to={`/categories/${_.kebabCase(category.fieldValue)}/`}
                  className="bg-gray-100 rounded mr-2 text-sm text-gray-500 p-1 hover:font-bold"
                >
                  {category.fieldValue} ({category.totalCount})
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Categories
