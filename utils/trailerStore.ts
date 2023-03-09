
import { Data } from "@/typings";  

const endpoint = "https://api.themoviedb.org/3/movie/now_playing?api_key=3f70f3effc381814fe3dc447d15bb5c6&language=en-US&page=1"


 export const fetchMovies = async() => {
    
    const res = await fetch(endpoint , {next: {revalidate: 120}});
    const data = await res.json() ;
    const movies: Data[]= data.results;
    return movies 
   }

