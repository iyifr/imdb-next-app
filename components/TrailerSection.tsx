'use client'

import React from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import TrendingTr from './TrailerSections/TrendingTr'
import { Data } from '@/typings'


type DataProps = {data?: Data[]}

const TrailerSection = ({data} : DataProps) => {
  return (
    <div>
      <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab className = "font-semibold text-lg text-white active:border-b-yellow-500 active:font-bold uppercase tracking-wide" 
      eventKey="home" title="Trending Movies">
        <TrendingTr data = {data} /> 
      </Tab>
      <Tab className = " font-semibold text-lg text-white active:border-b-yellow-500 active:font-bold uppercase tracking-wide" 
      eventKey="profile" title="Profile">
        <TrendingTr data = {data} /> 
      </Tab>
      <Tab className = "font-semibold text-lg text-white active:border-b-yellow-500 active:font-bold uppercase tracking-wide" 
      eventKey="longer-tab" title="Loooonger Tab">
        <TrendingTr data = {data} /> 
      </Tab>
    </Tabs>
    </div>
  )
}

export default TrailerSection
