import Link from 'next/link'
import React from 'react'


export const metadata = {
  title: 'Watch New Movie & Tv Trailers',
  description: 'Rating , reviews and greatness',
}

const layout = ({children} : {children: React.ReactNode}) => {
  return (
    <section>
        <div className='mt-3 pt-4 px-3'>
            <h1 className = "text-4xl text-left text-yellow-400">Watch New Movie & TV Trailers</h1>
        </div>
        {children}
    </section>
  )
}

export default layout
