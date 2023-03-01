import React from 'react'
import { Data } from '@/typings'

type DataProps = {data?: Data[]}

const Carousel = ({data}: DataProps) => {
  return (
    <div className='text-white font-bold'>
      {
        data?.map(movie => (
            <div key= {movie.id}> {movie.title} and i am movie number {movie.id} </div>
        ))
      }
    </div>
  )
}

export default Carousel
