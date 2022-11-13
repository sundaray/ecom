import React, { useState, useMemo } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Categories from "../components/Categories"
import Searchbar from "../components/Searchbar"
import Postlist from "../components/Postlist"
import Pagination from "../components/Pagination"
import LearnExpress from "../components/LearnExpress"
import AdBanner from "./../components/AdBanner"
const _ = require("lodash")

let pageSize = 10

const Home = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const posts = data.allMarkdownRemark.edges
  const categories = data.categories.group

  const paginatedPosts = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize
    const lastPageIndex = firstPageIndex + pageSize
    if (posts) return posts.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, posts])

  const handleInputChange = e => {
    setSearchQuery(e.target.value)
  }

  const searchResult = () => {
    let filteredPosts
    if (searchQuery) {
      filteredPosts = posts.filter(({ node }) =>
        node.frontmatter.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    return filteredPosts
  }

  return (
    <>
      <div className="mt-28">
        <Layout />
        <div>
          <Categories categories={categories} />
          <Searchbar
            searchQuery={searchQuery}
            handleInputChange={handleInputChange}
          />
          <Seo metaDescription="I am Hemanta Sundaray, a full-stack JavaScript engineer. This is my blog where I share my learnings on full-stack web development." />
          <AdBanner />
          <Postlist
            list={paginatedPosts}
            searchResult={searchResult()}
            searchQuery={searchQuery}
          />
          {!searchQuery && (
            <Pagination
              currentPage={currentPage}
              totalCount={posts ? posts.length : 0}
              pageSize={pageSize}
              onPageChange={page => setCurrentPage(page)}
            />
          )}
        </div>
      </div>
      <LearnExpress />
    </>
  )
}

export default Home

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
            categories
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
