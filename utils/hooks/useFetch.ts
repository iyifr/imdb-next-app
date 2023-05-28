import { useState, useEffect, useRef } from "react"
import { AsyncData, Data } from "@/typings"

type Props = {
	initialData: AsyncData<Data[]>
}
const useAsyncData = (url: RequestInfo | URL) => {
	const initialData: Props = {
		initialData: {
			data: null,
			error: null,
			isLoading: false,
		},
	}
	const [data, setData] = useState(initialData.initialData.data)
	const [loading, setLoading] = useState(initialData.initialData.isLoading)
	const [error, setError] = useState(initialData.initialData.error)

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			try {
				const newData = await (await fetch(url)).json()
				setData(newData.results)
			} catch (err: any) {
				setError(err.message)
			} finally {
				setLoading(false)
			}
		}
		fetchData()
	}, [url])
	return { data, loading, error }
}

export default useAsyncData
