import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { motion, AnimatePresence } from "framer-motion"

const errorVariant = {
  initial: {
    opacity: 0,
    x: "-0.1rem",
  },
  animate: {
    opacity: 1,
    x: "0rem",
  },
  exit: {
    opacity: 0,
    x: "-0.1rem",
  },
}

const Subscribe = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
  })
  return (
    <div className="shadow-md bg-white rounded mt-12 flex flex-col px-4 sm:px-12 lg:px-24 py-6">
      <h1 className="text-center">
        Join the Newsletter{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="inline w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
          />
        </svg>
      </h1>
      <form
        method="post"
        data-netlify-honeypot="bot-field"
        data-netlify="true"
        name="newsletter"
      >
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-200"
          type="hidden"
          name="form-name"
          value="newsletter"
        />
        <div className="flex flex-col mb-6 relative">
          <input
            className="peer appearance-none border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-700 placeholder-transparent"
            placeholder="Name"
            id="name"
            name="name"
            type="text"
            {...formik.getFieldProps("name")}
          />
          <label
            className="absolute transition-all left-2 -top-2.5 bg-white text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:bg-white"
            htmlFor="name"
          >
            Name
          </label>
          <AnimatePresence>
            {formik.touched.name && formik.errors.name ? (
              <motion.span
                variants={errorVariant}
                initial="initial"
                animate="animate"
                exit="initial"
                className="mt-1 text-red-500 text-xs italic"
              >
                {formik.errors.name}
              </motion.span>
            ) : (
              ""
            )}
          </AnimatePresence>
        </div>
        <div className="flex flex-col mb-6 relative">
          <input
            className="peer appearance-none border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-700 placeholder-transparent"
            placeholder="Title"
            id="email"
            name="email"
            type="text"
            {...formik.getFieldProps("email")}
          />
          <label
            className="absolute transition-all left-2 -top-2.5 bg-white text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:bg-white"
            htmlFor="email"
          >
            Email
          </label>
          <AnimatePresence>
            {formik.touched.email && formik.errors.email ? (
              <motion.span
                variants={errorVariant}
                initial="initial"
                animate="animate"
                exit="initial"
                className="mt-1 text-red-500 text-xs italic"
              >
                {formik.errors.email}
              </motion.span>
            ) : (
              ""
            )}
          </AnimatePresence>
        </div>
        <div>
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
            type="submit"
            disabled={
              formik.errors.name ||
              formik.errors.email ||
              !formik.values.name ||
              !formik.values.email
            }
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  )
}
export default Subscribe
