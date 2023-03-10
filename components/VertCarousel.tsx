"use client"
import React, { useEffect, useState } from 'react'
import { Data } from '@/typings'
import Image from 'next/image'
import { BsPlayCircle } from 'react-icons/bs'
import { useNextStore } from '@/utils/spliceMovies'
import Link from 'next/link'


type DataProps = {data?: Data[][] , className: string}

const VertCarousel = ({data}: DataProps) => {
  const [pa , setPa] = useState(1)

  const irk = useNextStore((state)=> state.info)
  const main = useNextStore((state) => state.queueInfo)
  const update = useNextStore((state)=> state.update)

  useEffect(()=> {
    const timerId = setInterval(() => {
      setPa((prev)=> prev + 1)
      update()
    } , 10000)
    main()
    return () => clearInterval(timerId)
  }, [update, main])

return (
    <div className='absolute z-20 w-[25%] -mt-4 left-[60rem]'>
      <p className = "text-xl text-amber-400">Up next</p>
        <div className='bg-gradient-to-t from-black via-[#121212] to-[#191919] h-[75%] rounded py-3 px-2 text-white'>
            {
           irk ? irk[0].slice(0, 3).map(card =>
                <div key = {card.id} className= "flex flex-row space-x-3 p-3">
                  <Image 
                    src = {`https://image.tmdb.org/t/p/original${card ? card.poster_path : ""}`}
                    alt = {`Poster for ${card.title}`}
                    width = {500}
                    height = {500}
                    className = "object-cover w-[90px] h-[8rem]"/> 
                  
                  <div className='flex flex-col space-y-1'>
                    <BsPlayCircle className='text-3xl block my-2'/>
                    <h2 className='text-lg'>{card.title}</h2> 
                    <p className='text-gray-400 text-sm'>Watch the trailer</p>
                  </div>
                </div>
              )
        : ""}
        <Link className = "mx-3 font-semibold text-lg tracking-wide" href = {'/trailers'}> Browse trailers {'>'} </Link>
        </div>
    </div>
  )
}

export default VertCarousel
