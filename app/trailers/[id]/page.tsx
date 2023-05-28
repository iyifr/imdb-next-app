import { Data } from "@/typings"
import React, { Suspense } from "react"

type PageProps = {
	params: {
		id: number
	}
}

async function fetchByMovieId(id: number) {
	try {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/${id}?api_key=3f70f3effc381814fe3dc447d15bb5c6&append_to_response=videos`,
			{ next: { revalidate: 400 } }
		)
		const data: Data = await res.json()
		return data
	} catch (error: any) {
		throw new Error(error.message)
	}
}

const Page = async ({ params: { id } }: PageProps) => {
	const data = await fetchByMovieId(id)

	if (!data) {
		return null
	}

	return (
		<Suspense fallback={<p>loading...</p>}>
			<div>
				<p>Hi the name of the movie is {data.title}</p>
			</div>
		</Suspense>
	)
}

export default Page
