"use client"

import Carousel from "react-bootstrap/Carousel"
import { Data } from "@/typings"
import Image from "next/image"
import "bootstrap/dist/css/bootstrap.css"
import { HiOutlinePlay } from "react-icons/hi2"
import Link from "next/link"

type DataProps = { data?: Data[]; className: string }

const CarouselSection = ({ data }: DataProps) => {
	return (
		<div className='mx-4 w-7xl overflow-hidden p-2 group'>
			<Carousel
				indicators={false}
				interval={4000}
				controls={false}
				pause={false}
			>
				{data?.map((movie) => (
					<Carousel.Item key={movie.id}>
						<Link href={`/trailers/${movie.id}`}>
							<div className='h-[470px] w-[60vw] mt-3 cursor-pointer'>
								<Image
									className='block min-h-[450px] w-100 mx-auto object-cover'
									src={`https://image.tmdb.org/t/p/original${
										movie && movie.backdrop_path
									}`}
									alt={`Backdrop poster for ${movie.title} movie`}
									width={400}
									height={400}
									quality={95}
								/>
							</div>

							<Carousel.Caption className='flex flex-row space-x-5 h-[29%] w-[65vw] overflow-x bg-gradient-to-t from-[#121212] via-[#121212] w-[100%] bottom-0 left-0'>
								<div>
									<Image
										src={`https://image.tmdb.org/t/p/original${
											movie ? movie.poster_path : ""
										}`}
										alt={`Poster for ${movie.title}`}
										width={500}
										height={500}
										className='object-cover w-[150px] absolute z-20 ml-2 -top-24 left-0  h-[15rem] shadow shadow-lg shadow-[#121212]'
									/>
									<HiOutlinePlay className='text-white text-center group-hover:text-yellow-300 cursor-pointer ml-56 text-7xl' />
								</div>

								<div className='flex flex-col space-y-2 text-left px-12 mb-2'>
									<h3 className='text-grey-100 text-4xl group-hover:text-stone-400 font-bold'>
										{movie ? movie.title : ""}
									</h3>
									<p className='text-lg text-gray-400'>
										Watch the trailer here
									</p>
								</div>
							</Carousel.Caption>
						</Link>
					</Carousel.Item>
				))}
			</Carousel>
		</div>
	)
}

export default CarouselSection
