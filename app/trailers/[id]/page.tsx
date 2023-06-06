import { Data } from "@/typings"
import { DotPulse } from "@uiball/loaders"
import React, { Suspense } from "react"

type PageProps = {
	params: {
		id: number
	}
}

async function fetchByMovieId(id: number) {
	try {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/${id}?api_key=3f70f3effc381814fe3dc447d15bb5c6&append_to_response=videos`
		)
		const data: Data = await res.json()
		return data
	} catch (error: any) {
		console.log(error)
	}
}

const Page = async ({ params: { id } }: PageProps) => {
	const data = await fetchByMovieId(id)

	if (!data) {
		return <DotPulse color='white' size={50} speed={2.5} />
	}

	return (
		<Suspense fallback={<DotPulse color={"white"} size={40} speed={2.5} />}>
			<div>
				<p className='text-white'>Hi the name of the movie is {data.title}</p>
				<p>{data.overview}</p>
			</div>
		</Suspense>
	)
}

export default Page
