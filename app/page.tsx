import React from "react"
import { fetchMovies, now_playing } from "@/utils/trailerStore"
import CarouselSection from "@/components/Carousel"
import VertCarousel from "@/components/VertCarousel"
import { Data } from "@/typings"

const page = async () => {
	const data: Data[] | undefined = await fetchMovies(now_playing)

	return (
		<div className='flex'>
			<CarouselSection data={data} className='w-2/3 overflow-hidden' />
			<VertCarousel className='' data={data} />
		</div>
	)
}

export default page
