import React from "react"
import { Link } from "gatsby"
import "/node_modules/flag-icons/css/flag-icons.min.css"

export default function Layout() {
  return (
    <>
      <div className="w-full h-2 fixed top-0 left-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-40 mb-10"></div>
      <header className="shadow w-full bg-gray-50 px-4 md:px-6 flex items-center fixed top-2 left-0">
        <Link to="/" className="mr-auto">
          <h2 className="name text-gray-900 text-xl font-bold">
            Hemanta<span className="fi fi-in fis ml-2"></span>
          </h2>
        </Link>
        <nav>
          <ul>
            <li className="mr-4">
              <Link
                to="/about"
                className="text-gray-400 text-md font-medium"
                activeClassName="nav-link"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/"
                activeClassName="nav-link"
                className="text-gray-400 text-md font-medium"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
