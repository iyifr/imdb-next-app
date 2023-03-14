
import { Data } from "@/typings";  

// API endpoints (-get now playing, trending, popular , upcoming , top rated.. )
const endpoint = "https://api.themoviedb.org/3/movie/now_playing?api_key=3f70f3effc381814fe3dc447d15bb5c6&language=en-US&page=1"
const endpoint1 = "https://api.themoviedb.org/3/trending/movie/day?api_key=3f70f3effc381814fe3dc447d15bb5c6"
const endpoint2 = "https://api.themoviedb.org/3/movie/popular?api_key=3f70f3effc381814fe3dc447d15bb5c6&language=en-US&page=1"
const endpoint3 = "https://api.themoviedb.org/3/movie/top_rated?api_key=3f70f3effc381814fe3dc447d15bb5c6&language=en-US&page=1"
 
export const fetchMovies = async() => {
    
    const res = await fetch(endpoint , {next: {revalidate: 120}});
    const data = await res.json() ;
    const movies: Data[]= data.results;
    return movies 
   }

export const fetchTrendingMovies = async() => {
    
    const res = await fetch(endpoint1 , {next: {revalidate: 120}});
    const data = await res.json() ;
    const movies: Data[]= data.results;
    return movies 
   }


export const fetchPopularMovies = async() => {
   const res = await fetch(endpoint2 , {next: {revalidate: 120}});
    const data = await res.json() ;
    const movies: Data[]= data.results;
    return movies 
}

export const fetchTopRatedMovies = async () => {
   const res = await fetch(endpoint3 , {next: {revalidate: 120}});
    const data = await res.json() ;
    const movies: Data[]= data.results;
    return movies 
}


