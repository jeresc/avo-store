import React from 'react'
import { Navbar } from '@/components'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="w-full p-4">{children}</main>
      <footer className="w-full">This is the footer</footer>
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
