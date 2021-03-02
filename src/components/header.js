import React from "react"

export default function Header({ children }) {
  return (
    <header className="h-16">
      Test from the header component<br />
      {children}
    </header>
  )
}
