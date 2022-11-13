import React from "react"
import { Link } from "gatsby"
const _ = require("lodash")

const Postlist = ({ list, searchResult, searchQuery }) => {
  return (
    <div className="w-11/12 sm:9/12 md:w-3/5 lg:w-1/2 m-auto">
      {!searchQuery
        ? list.map(({ node }) => (
            <div key={node.id} className="mb-6">
              <div className="flex">
                <span className="text-blue-700 mr-2 text-sm flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="inline w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>
                  {node.frontmatter.date}
                </span>{" "}
                <span className="text-blue-700 text-sm flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="inline w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {node.fields.readingTime.text}
                </span>{" "}
              </div>
              <Link to={node.fields.slug}>
                <h1 className="text-gray-900 text-2xl font-bold hover:bg-gray-900 hover:text-gray-50">
                  {node.frontmatter.title}
                </h1>
              </Link>
              <p className="text-gray-700">{node.frontmatter.excerpt}</p>
            </div>
          ))
        : searchResult.map(({ node }) => (
            <div key={node.id} className="mb-6">
              <span className="text-blue-700 text-sm">
                {node.frontmatter.date},
              </span>{" "}
              <span className="text-blue-700 text-sm">
                {node.fields.readingTime.text}
              </span>{" "}
              <Link to={node.fields.slug}>
                <h1 className="text-gray-900 text-2xl font-bold hover:text-blue-900">
                  {node.frontmatter.title}
                </h1>
              </Link>
              <p className="text-gray-700">{node.frontmatter.excerpt}</p>
            </div>
          ))}
    </div>
  )
}

export default Postlist
