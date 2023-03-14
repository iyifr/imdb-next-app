import React , {Suspense} from 'react'
import { fetchMovies } from '@/utils/trailerStore'
import { Data } from '@/typings'
import Trailertabs from '@/components/Trailertabs'

const page = async () => {
const trailerCards: Data[] = await fetchMovies()
  return (
    <div className = "mt-12">
      <Trailertabs trailers = {trailerCards}/>
    </div>

  )
}

export default page
