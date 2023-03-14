/* eslint-disable react/no-unescaped-entities */
"use client"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React , {Suspense} from 'react'
import { Data } from '@/typings';
import Image from 'next/image';
import { BsPlayCircle } from 'react-icons/bs';

type TrailerProps = {trailers : Data[]}

const Trailertabs = ({trailers} : TrailerProps) => {
  return (
  <Tabs>
    <TabList className= "mx-auto max-w-7xl flex flex-row space-x-5 text-base font-semibold tracking-wide text-slate-200 uppercase">
      <Tab>Watch Trending Trailers</Tab>
      <Tab>Watch Upcoming Trailers </Tab>
      <Tab>Most Popular Trailers</Tab>
      <Tab>Most Watched Trailers</Tab>
    </TabList>

    <TabPanel>
      <p className='text-3xl my-4 mx-12 '> Watch the hottest trailers on the internet this week </p>
       <div className='max-w-7xl mx-auto grid grid-cols-6 gap-3 mt-1'> 
        { 
    trailers ? trailers.map(card => 
      <div key = {card.id} className= "flex flex-col mt-6 cursor-pointer group hover:shadow-lg hover:duration-200 hover:shadow-amber-500/50">
                <Suspense fallback = {<p className = "text-white text-5xl">Loading trailers...</p>}>
                <Image 
                  src = {`https://image.tmdb.org/t/p/original${card ? card.poster_path : ""}` }
                  alt = {`Poster for ${card.title}`}
                  width = {500}
                  height = {500}
                  className = "object-cover w-[200px] h-[22rem]"/> 
                  </Suspense>


              <div className='h-[29%] relative bg-gradient-to-t from-[#181818] via-[#121212] to-black top-0 py-2 px-1 bottom-4 w-[100%] rounded-b-lg'>
                  <BsPlayCircle className='text-2xl group-hover:text-yellow inline-block text-white my-2 mx-2'/>
                  <p className='text-white inline'> {
                  `${Math.floor(Math.random() * 4) + 1} : ${Math.floor(Math.random() * 20) + 30}` }</p>
                    <h2 className='text-[1.1rem] group-hover:text-amber-300 tracking-wide text-slate-200 font-semibold text-center'>{card.title} </h2> 
                </div>
              </div>
      ) : ''}
          </div>
    </TabPanel>
    <TabPanel>
      <div className='max-w-7xl mx-auto grid grid-cols-6 gap-3 mt-1'>
     { 
    trailers ? trailers.map(card => 
      <div key = {card.id} className= "flex flex-col mt-8 group hover:shadow-lg cursor-pointer duration-0 hover:duration-400 hover:shadow-yellow-400/50">
                <Suspense fallback = {<p className = "text-white text-5xl">Loading trailers...</p>}>
                <Image 
                  src = {`https://image.tmdb.org/t/p/original${card ? card.poster_path : ""}` }
                  alt = {`Poster for ${card.title}`}
                  width = {500}
                  height = {500}
                  className = "object-cover w-[200px] h-[22rem]"/> 
                  </Suspense>


              <div className='h-[29%] relative bg-gradient-to-t from-[#181818] via-[#121212] to-black top-0 py-2 px-1 bottom-4 w-[100%] rounded-b-lg'>
                  <BsPlayCircle className='text-2xl group-hover:text-yellow inline-block text-white my-2 mx-2'/>
                  <p className='text-white inline'> {
                  `${Math.floor(Math.random() * 4) + 1} : ${Math.floor(Math.random() * 20) + 30}` }</p>
                    <h2 className='text-[1.1rem] group-hover:text-yellow-300/20 tracking-wide text-slate-200 font-semibold text-center'>{card.title} </h2> 
                </div>
              </div>
      ) : ''
                  }    
        </div>
        </TabPanel>
    <TabPanel>
       <div className='max-w-7xl mx-auto grid grid-cols-6 gap-3 mt-1'> 
{ 
    trailers ? trailers.map(card => 
      <div key = {card.id} className= "flex flex-col mt-8 group hover:shadow-lg cursor-pointer duration-0 hover:duration-400 hover:shadow-yellow-400/50">
                <Suspense fallback = {<p className = "text-white text-5xl">Loading trailers...</p>}>
                <Image 
                  src = {`https://image.tmdb.org/t/p/original${card ? card.poster_path : ""}` }
                  alt = {`Poster for ${card.title}`}
                  width = {500}
                  height = {500}
                  className = "object-cover w-[200px] h-[22rem]"/> 
                  </Suspense>


              <div className='h-[29%] relative bg-gradient-to-t from-[#181818] via-[#121212] to-black top-0 py-2 px-1 bottom-4 w-[100%] rounded-b-lg'>
                  <BsPlayCircle className='text-2xl group-hover:text-yellow inline-block text-white my-2 mx-2'/>
                  <p className='text-white inline'> {
                  `${Math.floor(Math.random() * 4) + 1} : ${Math.floor(Math.random() * 20) + 30}` }</p>
                    <h2 className='text-[1.1rem] group-hover:text-yellow-300/20 tracking-wide text-slate-200 font-semibold text-center'>{card.title} </h2> 
                </div>
              </div>
      ) : ''
                  } 
          </div>
        </TabPanel>
    <TabPanel>
      <div className='max-w-7xl mx-auto grid grid-cols-6 gap-3 mt-1'>
     { 
    trailers ? trailers.map(card => 
      <div key = {card.id} className= "flex flex-col mt-8 group hover:shadow-lg cursor-pointer duration-0 hover:duration-400 hover:shadow-yellow-400/50">
                <Suspense fallback = {<p className = "text-white text-5xl">Loading trailers...</p>}>
                <Image 
                  src = {`https://image.tmdb.org/t/p/original${card ? card.poster_path : ""}` }
                  alt = {`Poster for ${card.title}`}
                  width = {500}
                  height = {500}
                  className = "object-cover w-[200px] h-[22rem]"/> 
                  </Suspense>


              <div className='h-[29%] relative bg-gradient-to-t from-[#181818] via-[#121212] to-black top-0 py-2 px-1 bottom-4 w-[100%] rounded-b-lg'>
                  <BsPlayCircle className='text-2xl group-hover:text-yellow inline-block text-white my-2 mx-2'/>
                  <p className='text-white inline'> {
                  `${Math.floor(Math.random() * 4) + 1} : ${Math.floor(Math.random() * 20) + 30}` }</p>
                    <h2 className='text-[1.1rem] group-hover:text-yellow-300/20 tracking-wide text-slate-200 font-semibold text-center'>{card.title} </h2> 
                </div>
              </div>
      ) : ''
                  }
        </div>
    </TabPanel>
  </Tabs>
  )
}

export default Trailertabs
