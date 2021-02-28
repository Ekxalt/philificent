import React from "react"
import Helmet from "react-helmet"

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <html lang="en" className="h-full" />
        <body className="dark:bg-gray-900 dark:text-white h-full font-sans" />
        <title>Home | Philificent.com</title>
      </Helmet>

      <main className="md:container md:mx-auto h-full">
        {children}
      </main>
    </>
  )
}