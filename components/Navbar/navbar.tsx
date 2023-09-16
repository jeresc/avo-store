import Link from 'next/link'
import React from 'react'

export function Navbar() {
  return (
    <header>
      <nav>
        <menu>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </menu>
      </nav>
    </header>
  )
}
