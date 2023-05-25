export type Todo = {
	userId: number
	id: number
	title: string
	completed: boolean
}

export type Data = {
	title: string
	adult: boolean
	backdrop_path: string
	id: number
	original_language: string
	overview: string
	popularity: string
	poster_path: string
	release_date: string
	video: false
	vote_average: number
	vote_count: number
}

type AsyncData<T> = {
	data: T[] | null
	error: Error | null
	isLoading: boolean
}
