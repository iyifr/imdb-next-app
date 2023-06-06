import useAsyncData from "@/utils/hooks/useFetch"
import React, { Suspense } from "react"
import Image from "next/image"
import { BsPlayCircle } from "react-icons/bs"
import Link from "next/link"

type myTabProps = {
	url: RequestInfo | URL
}
const MyTab = ({ url }: myTabProps) => {
	// Data fetching hook call
	const { data, error } = useAsyncData(url)

	if (error) {
		return <div>Data failed to fetch!</div>
	}

	if (!data) {
		return null
	}

	return (
		<div className='max-w-7xl mx-auto grid grid-cols-6 gap-4 mt-1'>
			{data.map((card) => (
				<Link key={card.id} href={`/trailers/${card.id}`}>
					<div className='flex flex-col mt-6 cursor-pointer group hover:shadow-lg hover:duration-200 hover:shadow-blue-500/50'>
						<Image
							src={`https://image.tmdb.org/t/p/original${
								card ? card.poster_path : ""
							}`}
							alt={`Poster for ${card.title}`}
							width={500}
							height={500}
							className='object-cover w-[215px] h-[19rem]'
						/>
						<div className=' text-md h-[25%] relative bg-gradient-to-t from-[#181818] via-[#121212] to-black top-0 py-2 px-1 bottom-4 w-[100%] rounded-b-lg'>
							<BsPlayCircle className='text-2xl group-hover:text-blue-200 inline-block text-white my-2 mx-2' />
							<p className='text-white inline'>1:34</p>
							<h2 className='group-hover:text-blue-200 tracking-wide text-slate-200 font-semibold'>
								{card.title.length > 17
									? `${card.title.slice(0, 17)}..`
									: card.title}
							</h2>
						</div>
					</div>
				</Link>
			))}
		</div>
	)
}

export default MyTab
