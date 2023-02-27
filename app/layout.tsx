import './globals.css'
import Header from './Navbar'
import Footer from './footer'
import React from 'react'
import Script from "next/script"

export const metadata = {
  title: 'IYIDb: Ratings, reviews and others ..',
  description: 'Rating , reviews and greatness',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Header />
        {children}
        <Footer />
        <Script src="../path/to/flowbite/dist/flowbite.min.js"/>
      </body>
    </html>
  )
}
