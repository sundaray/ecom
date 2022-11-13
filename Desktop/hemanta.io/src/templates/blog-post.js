import React from "react"
import { Link, graphql } from "gatsby"
import Subscribe from "../components/Subscribe"
import ScrollToTop from "../components/scroll"
import Comments from "../components/comments"
import Seo from "../components/seo"
import BlogLayout from "../components/BlogLayout"
import LearnExpressBlog from "../components/LearnExpressBlog"

export default function BlogPost({ data, pageContext }) {
  const { next, prev } = pageContext
  const post = data.markdownRemark

  return (
    <>
      <LearnExpressBlog />
      <div>
        <BlogLayout />
        <div className="single_post_page w-11/12 sm:9/12 md:w-3/5 lg:w-1/2 m-auto mt-12">
          <Seo
            title={post.frontmatter.title}
            description={post.frontmatter.excerpt}
          />
          <div>
            <h1 className="text-2xl font-bold">{post.frontmatter.title}</h1>
            <p>By Hemanta Sundaray on {post.frontmatter.date}</p>
            <div className="single_post_page_line_break"></div>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>

          <div className="single_post_page_line_break"></div>

          <div className="w-1/2 m-auto mb-4 flex justify-between">
            {prev && (
              <Link to={prev.fields.slug}>
                <button className="bg-gray-300 rounded px-1 py-0.5 hover:bg-gray-400">
                  Previous
                </button>
              </Link>
            )}
            {next && (
              <Link to={next.fields.slug}>
                <button className="bg-gray-300  rounded px-1 py-0.5 hover:bg-gray-400">
                  Next
                </button>
              </Link>
            )}
          </div>
          <ScrollToTop />
          <Subscribe />
          <Comments />
        </div>
      </div>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
