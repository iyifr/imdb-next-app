import { Data } from "@/typings"

// API endpoints (-get now playing, trending, popular , upcoming , top rated.. )
export const now_playing =
	"https://api.themoviedb.org/3/movie/now_playing?api_key=3f70f3effc381814fe3dc447d15bb5c6&language=en-US&page=1"
export const todays_pick =
	"https://api.themoviedb.org/3/trending/movie/day?api_key=3f70f3effc381814fe3dc447d15bb5c6"
export const popular_picks =
	"https://api.themoviedb.org/3/movie/popular?api_key=3f70f3effc381814fe3dc447d15bb5c6&language=en-US&page=1"
export const top_rated =
	"https://api.themoviedb.org/3/movie/top_rated?api_key=3f70f3effc381814fe3dc447d15bb5c6&language=en-US&page=1"

export const fetchMovies = async (url: RequestInfo | URL) => {
	try {
		const foo = await fetch(url, { next: { revalidate: 250 } })
		const res = await foo.json()
		const data: Data[] = res.results
		return data
	} catch (error: any) {
		console.log(`${error.name} : ${error.message}`)
	}
}
