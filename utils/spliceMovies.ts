import { Data } from "@/typings"
import { fetchMovies } from "./trailerStore";
import { create } from "zustand";
{/*function slicer (arr: Data[] , chunkSize: number) {
    const res = [];
    for(let i = 0 ; i < arr.length ; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize) ;
        res.push(chunk)
    }
    return res 
}

export const sliceMovies = async () => {
    try {
        const unSlicedMovies:Data[] =  await fetchMovies() ;
        const slicedMovies = slicer(unSlicedMovies , 3)
        return slicedMovies
    }
    catch (error: any) {
        console.log(`${error.name} : ${error.message}`)
    }

} */}

export async function Structurise () {
  const Main = []
  const Others:Array<any> = []
  const rawData: Data[] = await fetchMovies()
  Main.push(rawData)
  Main.push(Others)
  const res : Data[][] =  Main
  return res
}

export const queueData = (arr: Data[][]) => {
  if (arr? arr[0].length > 3: Boolean) {
    const first: any = arr[0].shift()
    arr[1].push(first)
    return arr
}
  if (arr?[0].length <= 3: Boolean) {
    const shifted = arr[1]
    arr[0].push(...shifted)
    arr[1].length = 0
    return arr
  }
}

const def = fetchMovies()

const Final = async () => {
  const weird = await Structurise()
  const slicedData =  queueData(weird) 
  return slicedData
}

interface NextStore {
  info : Data[][] ;
  queueInfo: () => void;
  update: () => void
}


export const useNextStore = create<NextStore>()((set, get) => ({
  info: [[], []],
  queueInfo: async () => 
{const datz = await Final()
  set(({info : datz})) } ,
  update: () =>  {
    const oldState:Data[][] = get().info
    set({info: queueData(oldState)})
  }

}))