import React from "react"
import { Link, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/layout"

const Categories = ({ pageContext, data }) => {
  const { category } = pageContext
  const { edges } = data.allMarkdownRemark
  const categoryHeader = `Posts Under Category: ${category}`

  return (
    <>
      <Layout />
      <div className="categories-page-template rounded shadow-md w-11/12 sm:9/12 md:w-3/5 lg:w-1/2 m-auto">
        <div className="categories-page-template-header bg-gray-300 text-white font-bold flex justify-center items-center ">
          {categoryHeader}
        </div>
        <ul className="list-none flex flex-col flex-wrap">
          {edges.map(({ node }) => {
            const { slug } = node.fields
            const { title } = node.frontmatter
            return (
              <li key={slug}>
                <Link to={slug}>
                  <FontAwesomeIcon icon={faArrowRight} /> {title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Categories

export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
