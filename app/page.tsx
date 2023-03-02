import React from 'react'
import { fetchMovies } from '@/utils/trailerStore'
import { sliceMovies } from '@/utils/spliceMovies'
import CarouselSection from '@/components/Carousel'
import VertCarousel from '@/components/VertCarousel'



const page = async () => {

const data = await fetchMovies()
const slicedData = await sliceMovies()
const [info, slicedInfo] = await Promise.all([data, slicedData])
console.log(slicedData)
  
return (
    <div>
      <CarouselSection data = {info} />
      <VertCarousel data = {slicedInfo} />
    </div>
  )
}

export default page
