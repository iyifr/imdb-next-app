import './globals.css'
import Header from '../components/Navbar'
import Footer from '../components/footer'
import React from 'react'

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
      </body>
    </html>
  )
}
