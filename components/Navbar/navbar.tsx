import Link from 'next/link'
import React from 'react'

export function Navbar() {
  return (
    <header className="w-full">
      <nav>
        <menu className="flex items-center justify-evenly">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </menu>
      </nav>
    </header>
  )
}
