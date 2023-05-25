"use client"
import React, { useEffect, useState } from "react"
import { Data } from "@/typings"
import Image from "next/image"
import { HiOutlinePlay } from "react-icons/hi2"

type DataProps = { data?: Data[]; className: string }

const VertCarousel = ({ data }: DataProps) => {
	const [index, setIndex] = useState(0)
	const windowSize = 3

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((index + 1) % 19)
		}, 4500)
		return () => {
			clearInterval(interval)
		}
	}, [data, index])

	const previewItems = data?.slice(index + 1, index + 1 + windowSize)

	return (
		<div className='absolute left-[70vw] z-10 rounded-md p-1 float-right'>
			<p className='text-xl text-amber-400'>Up next</p>

			{previewItems?.map((item, index) => (
				<div
					key={item.id}
					className='flex flex-row cursor-pointer space-x-3 p-3'
				>
					<Image
						src={`https://image.tmdb.org/t/p/original${
							item ? item.poster_path : ""
						}`}
						alt={`Poster for ${item.title}`}
						width={500}
						height={500}
						className='object-cover w-[90px] h-[8rem]'
					/>

					<div className='flex flex-col space-y-1'>
						<HiOutlinePlay className='text-3xl block my-2' />
						<h2 className='text-lg'>{item.title}</h2>
						<p className='text-gray-400 text-sm'>Watch the trailer</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default VertCarousel
