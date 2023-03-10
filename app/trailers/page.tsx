import React , {Suspense} from 'react'
import { fetchMovies } from '@/utils/trailerStore'
import TrailerSection from '@/components/TrailerSection'
import { Data } from '@/typings'




const page = async () => {
const trailerCards: Data[] = await fetchMovies()
  return (
      <>
        <TrailerSection data = {trailerCards}/>
      </>
  )
}

export default page
