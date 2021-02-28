import React from "react"
import Helmet from "react-helmet"

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <body className="dark:bg-gray-800 dark:text-white" />
        <title>Post | Philificent.com</title>
      </Helmet>

      <main className="md:container md:mx-auto">
        {children}
      </main>
    </>
  )
}