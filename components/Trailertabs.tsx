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
import React, { Suspense } from "react"
import MyTab from "./myTab"
import { MrMiyagi } from "@uiball/loaders"

const Trailertabs = () => {
	return (
		<Tabs>
			<TabList className='mx-auto max-w-7xl flex flex-row space-x-5 text-base text-slate-200'>
				<Tab>Now playing</Tab>
				<Tab> Popular </Tab>
				<Tab> Upcoming </Tab>
				<Tab> Top rated </Tab>
			</TabList>

			{/* Movie Category Tabs */}

			<Suspense fallback={<MrMiyagi color={"white"} />}>
				<TabPanel>
					<MyTab url={now_playing} />
				</TabPanel>
			</Suspense>

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
