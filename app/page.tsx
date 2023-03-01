import React from 'react'
import { fetchMovies } from '@/utils/trailerStore'
import Carousel from '@/components/Carousel'



const page = async () => {

const data = await fetchMovies()
console.log(data)
  
return (
    <div>
      <Carousel data = {data} />
    </div>
  )
}

export default page
