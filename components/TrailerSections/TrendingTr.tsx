'use client'

import React, {Suspense} from "react"
import { BsPlayCircle } from 'react-icons/bs'
import Image from 'next/image'
import { Data } from "@/typings"



type DataProps = {data?: Data[]}

export default function TrendingTr({data} : DataProps ) {
    return (
        <div className = "mt-12">
      <div className='max-w-7xl mx-auto grid grid-cols-6 gap-3 mt-1'> 
      
      {
    data ? data.map(card => 
      <div key = {card.id} className= "flex flex-col mt-8 group hover:shadow-lg cursor-pointer duration-0 hover:duration-400 hover:shadow-yellow-400/50">
                <Suspense fallback = {<p>Loading trailers...</p>}>
                <Image 
                  src = {`https://image.tmdb.org/t/p/original${card ? card.poster_path : ""}` }
                  alt = {`Poster for ${card.title}`}
                  width = {500}
                  height = {500}
                  className = "object-cover w-[200px] h-[22rem]"/> 
                  </Suspense>


              <div className='h-[29%] relative bg-gradient-to-t from-[#181818] via-[#121212] to-black top-0 py-2 px-1 bottom-4 w-[100%] rounded-b-lg'>
                  <BsPlayCircle className='text-2xl group-hover:text-yellow inline-block text-white my-2 mx-2'/>
                  <p className='text-white inline'> {
                  `${Math.floor(Math.random() * 4) + 1} : ${Math.floor(Math.random() * 20) + 30}` }</p>
                    <h2 className='text-lg group-hover:text-yellow-200/70 tracking-wide text-slate-200 font-semibold text-center'>{card.title} </h2> 
                </div>
              </div>
      ) : ''
    }
      </div>

    </div>

    )
}