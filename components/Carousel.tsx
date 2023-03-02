"use client"

import Carousel from "react-bootstrap/Carousel"
import React from 'react'
import {useEffect} from "react"
import { Data } from '@/typings'
import Script from 'next/script'
import Image from "next/image"
import 'bootstrap/dist/css/bootstrap.css'
import {BsPlayCircle} from "react-icons/bs"

type DataProps = {data?: Data[]}

const CarouselSection = ({data}: DataProps) => {

  return (
    <div className='mx-4'>
        <Carousel indicators = {false} interval = {8000}>
            
            {
                data?.map(movie => 
                <Carousel.Item  key={movie.id}>
                <div className ="h-[470px] w-[65vw] mt-3 group cursor-pointer">
                     <Image
                    className="block min-h-[450px] w-100 m-auto object-cover"
                    src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}
                    alt= {`Backdrop poster for ${movie.title} movie`}
                    width={600} 
                    height = {600}
                    quality = {95}
                    />
                </div>  
                
                <Carousel.Caption className = ' flex flex-row  space-x-5 h-[29%] w-[65vw] overflow-x bg-gradient-to-t from-[#121212] via-[#121212] w-[100%] bottom-0 left-0'>
                    <div>
                      <Image 
                            src = {`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`}
                            alt = {`Poster for ${movie.title}`}
                            width = {500}
                            height = {500}
                            className = "object-cover w-[150px] absolute z-20 ml-3 -top-24 left-0  h-[15rem] shadow shadow-lg shadow-[#121212]"/> 
                      <BsPlayCircle className = "text-amber-400 text-center group-hover:text-green-400 cursor-pointer ml-56 text-7xl"/>
                    </div>
                    
                    <div className = "flex flex-col space-y-2 text-left px-12 mb-2">
                      <h3 className = "text-grey-100 text-4xl font-bold">{ movie ? movie.title : ""}</h3>
                      <p className="text-lg text-gray-400">Watch the trailer now</p>   
                    </div>
                </Carousel.Caption>
                </Carousel.Item> )
                }

        </Carousel>
      
    </div>
  )
}

export default CarouselSection
