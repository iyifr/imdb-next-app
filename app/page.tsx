import React from 'react'
import { fetchMovies } from '@/utils/trailerStore'
import CarouselSection from '@/components/Carousel'
import VertCarousel from '@/components/VertCarousel'
import { Data } from '@/typings'



const page = async () => {

const data: Data[] = await fetchMovies()
  
return (
    <div className = "flex">
      <CarouselSection data = {data} className = "w-2/3" />
      <VertCarousel  className = "w-1/3"/>
    </div>
  )
}

export default page
