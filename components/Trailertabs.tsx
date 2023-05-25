/* eslint-disable react/no-unescaped-entities */
"use client"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import {
	now_playing,
	popular_picks,
	todays_pick,
	top_rated,
} from "@/utils/trailerStore"
//import "react-tabs/style/react-tabs.css"
import React from "react"
import MyTab from "./myTab"

const Trailertabs = () => {
	return (
		<Tabs>
			<TabList className='mx-auto max-w-7xl flex flex-row space-x-5 text-base text-slate-200'>
				<Tab>Trending</Tab>
				<Tab> Popular </Tab>
				<Tab> Upcoming </Tab>
				<Tab> Top rated </Tab>
			</TabList>

			<TabPanel>
				<MyTab url={now_playing} />
			</TabPanel>
			<TabPanel>
				<MyTab url={popular_picks} />
			</TabPanel>
			<TabPanel>
				<MyTab url={todays_pick} />
			</TabPanel>
			<TabPanel>
				<MyTab url={top_rated} />
			</TabPanel>
		</Tabs>
	)
}

export default Trailertabs
