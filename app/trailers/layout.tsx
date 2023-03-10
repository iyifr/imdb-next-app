import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: 'Watch New Movie & Tv Trailers',
  description: 'Rating , reviews and greatness',
}

const layout = ({children} : {children: React.ReactNode}) => {
  return (
    <section>
        <div className='mt-3 bg-black pt-4 px-3'>
          <div className = "p-2">
            <h1 className = "text-3xl text-left text-yellow-400">Watch New Movie & TV Trailers</h1>
            <div className='flex flex-row space-x-5 mt-4 pb-2'></div>
            <Link href = {'/'} className = "mx-3 font-semibold text-lg text-white active:border-b-yellow-500 active:font-bold uppercase tracking-wide">Trending trailers</Link>
            <Link href = {'/'} className = "mx-3 font-semibold text-lg text-white hover:border-b-yellow-500 uppercase tracking-wide">Most anticipated</Link>
            <Link href = {'/'} className = "mx-3 font-semibold text-lg text-white hover:border-b-yellow-500 uppercase tracking-wide">Most popular</Link>
            <Link href = {'/'} className = "mx-3 font-semibold text-lg text-white hover:border-b-yellow-500 uppercase tracking-wide">Recently added</Link>
          </div>
        </div>
        {children}
    </section>
  )
}

export default layout
