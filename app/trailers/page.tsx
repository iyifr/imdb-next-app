import React from "react"
import Trailertabs from "@/components/Trailertabs"

const page = async () => {
	return (
		<div className='mt-8'>
			<h1 className='text-4xl text-left text-white/90 my-4'>
				Watch New Movie & TV Trailers now
			</h1>
			<Trailertabs />
		</div>
	)
}

export default page
