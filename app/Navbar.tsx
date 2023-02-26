import React from 'react'
import imdbLogo from "../assets/imdb.png"
import Image from 'next/image'
import {FaBars} from "react-icons/fa"

const Header = () => {
  return (
    <div className='w-full m-0 bg-gradient-to-b from-black to-[#121212] p-3'>
        <div className='flex flex-row space-x-5 max-w-7xl mx-auto'>
          <Image
            src={imdbLogo}
            alt= "Imdb company logo"
            className='w-16 h-16 rounded object-contain'
          />
        
          
          <div className='mx-3 mt-4 flex flex-inline'>
            <FaBars className='text-base inline mr-3 mt-2 text-white'/>
            <h4 className = "text-base font-bold mt-1 text-white">Menu</h4>
          </div>
      </div>
    </div>
  ) 
}

export default Header
