import React from "react"
import Helmet from "react-helmet"

/*
  TODO
  - Add components for sidebar, TOC, or some-such majesty and elegance
*/

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <html lang="en" className="min-h-full" />
        <body className="dark:bg-gray-900 dark:text-white min-h-full font-sans" />
      </Helmet>

      <main className="md:container md:mx-auto">
        {children}
      </main>
    </>
  )
}