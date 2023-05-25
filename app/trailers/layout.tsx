import React from "react"

export const metadata = {
	title: "Watch New Movie & Tv Trailers",
	description: "Rating , reviews and greatness",
}

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<section>
			<div className='px-6'>
				<h1 className='text-4xl text-left text-white/90'>
					Watch New Movie & TV Trailers now
				</h1>
			</div>
			{children}
		</section>
	)
}

export default layout
