import React, { useState } from "react"
import Layout from "../components/layout"
import Subscribe from "../components/Subscribe"
import { Link, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { motion, AnimatePresence } from "framer-motion"
const _ = require("lodash")

const categoryVariant = {
  initial: {
    // y: -5,
    opaciy: 0,
    transition: {
      duration: 0.2,
    },
  },
  animate: {
    // y: 5,
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

const About = ({ data }) => {
  const categories = data.categories.group

  const [categoryOpen, setCategoryOpen] = useState(false)

  const showCategoryClick = () => {
    setCategoryOpen(!categoryOpen)
  }

  return (
    <>
      <Layout />
      <div className="w-11/12 sm:9/12 md:w-3/5 lg:w-1/2 m-auto mt-28 mb-24">
        <p className="text-gray-700 mb-6">
          Hello, I'm Hemanta, a fashion retail strategist with a passion for
          software engineering and data science. Welcome to my blog.
        </p>
        <p className="text-gray-700 mb-6">
          Never in my wildest dreams had I ever thought that I would take a
          liking to programming. Yet here I am - knee-deep inside the world of
          web development. Creating stuff using code gives me an immense sense
          of satisfaction.
        </p>
        <p className="text-gray-700 mb-6">
          I have been programming fairly consistently over the last one and half
          years. Currently, I am focused on learning Next.js and TypeScript.
        </p>
        <h2 className="text-gray-900 text-2xl font-bold mb-1">Blogging</h2>
        <p className="text-gray-700 mb-6">
          Writing this blog has been the most consistent thing that I have ever
          done in my life. More importantly, it has become a medium to share my
          learnings and to document my journey as a front-end engineer. Now that
          you are here, why not pick a category and browse some blog posts!
        </p>
        <div className="categories-about rounded shadow border border-gray-300">
          <div className="categories-header">
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
                className="flex flex-wrap list-none m-auto p-1"
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

        <h2 className="text-gray-900 text-2xl font-bold mb-1">Interests</h2>
        <p className="text-gray-700 mb-6">
          I used to read a lot of books. These days however, most of my time is
          spent learning to code and writing blog posts. The last book I read
          was "Consider this" by Chuck Palahniuk.
        </p>
        <h2 className="text-gray-900 text-2xl font-bold mb-1">Projects</h2>
        <p className="text-gray-700 mb-6">
          All the projects that I have developed until now are inside private
          GitHub repositories. I have never really taken the time to curate them
          and put them in a portfolio site. I am planning to build my portfolio
          site using Next.js within the next two to three months.
        </p>
        <h2 className="text-gray-900 text-2xl font-bold mb-1">Newsletter</h2>
        <p className="text-gray-700 mb-6">
          I publish blog posts frequently. If you want to get notified and
          follow me on my journey, consider subscribing to my newsletter.
        </p>
        <Subscribe />
      </div>
    </>
  )
}

export default About

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            excerpt
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
            readingTime {
              text
            }
          }
        }
      }
    }
    categories: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`
