import './globals.css'
import Header from './Navbar'
import Footer from './footer'

export const metadata = {
  title: 'Iyidb',
  description: 'Imdb clone yessirski',
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
