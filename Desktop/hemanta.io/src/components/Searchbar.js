import React from "react"
import { SearchIcon } from "@heroicons/react/outline"

const Searchbar = ({ searchQuery, handleInputChange }) => {
  return (
    <div className="w-9/12 md:w-2/5 h-8 mb-6 relative flex items-center justify-center m-auto">
      <div>
        <SearchIcon className="absolute top-1.5 left-1.5 w-5 h-5 text-gray-400" />
      </div>
      <input
        type="text"
        aria-label="Search"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        className="outline-none border border-gray-300 text-gray-500  shadow w-full h-8 rounded focus:border-blue-700 pl-7"
      />
    </div>
  )
}

export default Searchbar
