import React from "react"
import bookCover from "./Express.jpg"

const LearnExpress = () => {
  return (
    <div className="learn-express w-full bg-gray-100 flex justify-around">
      <div className="w-80">
        <img src={bookCover} alt="Learn Express Book Cover" />
      </div>
      <div className="flex flex-col items-center justify-between">
        <h1 className="text-6xl font-bold text-rose-900 mb-2">
          Learn Express.js
        </h1>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Master the core features of Express
        </h2>
        <ul className="list-none text-gray-500 font-bold">
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="text-green-600 font-bold inline w-6 h-6 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Express Routes
          </li>
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="text-green-600 font-bold inline w-6 h-6 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Express Middleware
          </li>
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="text-green-600 font-bold inline w-6 h-6 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Express Router
          </li>
        </ul>
        <p className="text-xl font-bold text-gray-900 mb-2">
          Build production-ready web APIs in no time at all
        </p>
        <p className="text-center list-none text-gray-500 font-bold mb-2">
          I wrote a guide that will help you quickly get up-to-speed with
          Express.
        </p>
        <a href="https://hemanta.gumroad.com/l/learn-express" target="_blank">
          <button className="mb-4 font-bold bg-rose-700 text-gray-100 rounded px-2 py-2 shadow-md hover:shadow-lg hover:bg-rose-900 transition-all">
            Buy on Gumroad
          </button>
        </a>
      </div>
    </div>
  )
}

export default LearnExpress
