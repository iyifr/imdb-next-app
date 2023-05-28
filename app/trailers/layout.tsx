import React from "react"

export const metadata = {
	title: "Watch New Movie & Tv Trailers",
	description: "Rating , reviews and greatness",
}

const layout = ({ children }: { children: React.ReactNode }) => {
	return <section>{children}</section>
}

export default layout
