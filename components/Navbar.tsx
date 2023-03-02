"use client"
import React from 'react'
import imdbLogo from "../assets/imdb.png"
import Image from 'next/image'
import {FaBars} from "react-icons/fa"
import {useState} from "react" ;
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import Link from 'next/link'



const Header = () => {
  const [show , setShow] = useState("hidden")

  const handleShow = ()=> {
    if(show === "hidden") {
      setShow("absolute")
    }
    if(show === "absolute") {
      setShow("hidden")
    }
  }

  const removeShow = () => {
    setShow("hidden")
  }

  return (
    <div className='w-full m-0 bg-gradient-to-b from-black to-[#121212] p-3'>
        <div className='flex flex-row space-x-5 max-w-7xl mx-auto'>
          <Image
            src={imdbLogo}
            alt= "Imdb company logo"
            className='w-16 h-16 mt-1 rounded object-contain'
          />
        
          
          <div className='mt-4 flex flex-inline'>
            <FaBars className='text-base inline mr-2 mt-1 text-white'/> 
            <h4 className = "text-base font-bold  text-white">Menu</h4>
          </div>

            
  <form>
      <div className="flex mt-3 ml-6">
          <label role="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
          <button id="dropdown-button" data-dropdown-toggle="dropdown" onClick = {handleShow}
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg " type="button">All
            <svg aria-hidden="true" className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>

          <div className = {show} onMouseLeave = {removeShow}>
            <div id = "dropdown" className='z-10 absolute top-10  bg-[#191917] rounded-lg divide-y divide-dashed shadow shadow-lg w-48 dark:bg-gray-700'>
                <ul className="py-2 text-base font-semibold text-gray-300 text-base" aria-labelledby="dropdown-button">
              <li>
                  <button type="button" className="inline-flex w-full px-4 py-2 text-yellow-500 ">All Movies</button>
              </li>
              <li>
                  <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-stone-800">Series</button>
              </li>
              <li>
                  <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-stone-800">Tv Shows</button>
              </li>
              <li>
                  <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-stone-800">Podcasts</button>
              </li>
              </ul>
            </div>
              
          </div>

          <div className="relative w-full">
              <input type="search" id="search-dropdown" 
              className="block p-2.5 w-[48vw] z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-amber-500 focus:border-amber-500" placeholder="Search IMDb" />
              <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-amber-500 rounded-r-lg border border-amber-500 hover:bg-amber-400">
                  <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  <span className="sr-only">Search Imdb now</span>
              </button>
          </div> 
      </div>
  </form>

        <div className='ml-3 flex flex-inline space-x-5 mt-4 text-white'>
        <p className = "text-md font-semibold mx-5"><BsFillBookmarkPlusFill className = "text-white inline text-2xl mr-1 -mt-1"/> Watchlist</p>
            <Link className='text-md' href={"/"}>Sign In</Link> 
          
    </div>
      </div>
    </div>
  ) 
}

export default Header
