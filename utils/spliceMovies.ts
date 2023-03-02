import { Data } from "@/typings"
import { fetchMovies } from "./trailerStore";

function slicer (arr: Data[] , chunkSize: number) {
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

}