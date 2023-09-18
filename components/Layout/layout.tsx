import React from 'react'
import { Navbar } from '@/components'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <footer>This is the footer</footer>
      {/*
        <style jsx>{`
          footer {
            background-color: #947fff;
          }
        `}</style>
      */}
    </>
  )
}
