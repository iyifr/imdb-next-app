"use client"
import React from 'react'
import {useState , useEffect , useCallback} from "react"
import { Data } from '@/typings'



type DataProps = {data?: Data[][]}

const VertCarousel = ({data}: DataProps) => {

    const [index, setIndex] = useState(0)

    const handleNext = useCallback(() => {
        if(index < 3) {
            setIndex((prevIndex) => prevIndex + 1)
        }
        if(index === 3) setIndex(0)
    } , [index])

    useEffect(()=> {
        const interval = setInterval(()=> handleNext(), 8000);
        return () => clearInterval(interval)
    } , [handleNext])

  return (
    <div>
      {
        data ? data[index].map(card =>
            <h1 key={card.id} className = "text-white"> {card.title}</h1>
            )
      : ""}
    </div>
  )
}

export default VertCarousel
