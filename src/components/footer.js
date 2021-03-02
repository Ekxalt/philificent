import React from "react"

export default function Footer({ children }) {
  return (
    <footer className="md:container md:mx-auto h-8">
      Footer time is the bestest time... probably <br />
      {children}
    </footer>
  )
}
