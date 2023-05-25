import { Data } from "@/typings"
import { fetchMovies, now_playing } from "./trailerStore"
import { create } from "zustand"

interface NextStore {
	hovered: Boolean
	queueInfo: () => void
	update: () => void
}

export const useNextStore = create<NextStore>()((set, get) => ({
	hovered: false,
	queueInfo: async () => {
		set({ hovered: true })
	},
	update: () => {
		const oldState: Boolean = get().hovered
		set({ hovered: !oldState })
	},
}))
