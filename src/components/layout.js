import React from "react"
import Helmet from "react-helmet"

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <html lang="en" className="min-h-full" />
        <body className="dark:bg-gray-900 dark:text-white min-h-full font-sans" />
      </Helmet>

      <main className="md:container md:mx-auto min-h-full">
        { children }
      </main>
    </>
  )
}