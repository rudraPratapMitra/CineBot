import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const SecondaryContainer=()=>{
    const nowPlayingMovies=useSelector((store)=>store.movies.nowPlayingMovies)
    const trendingMovies=useSelector((store)=>store.movies.trendingMovies)
    const topRatedMovies=useSelector((store)=>store.movies.topRatedMovies)
    return (
         <div className="bg-black ">
            <div className="-mt-32 relative z-50"> 
                <MovieList title={"Now Playing"} movies={nowPlayingMovies}/>
            </div>
            <div className="bg-black">
                <MovieList title={"Trending"} movies={trendingMovies}/>
                <MovieList title={"Top Rated"} movies={topRatedMovies}/>
            </div>
        </div>
    )
   
}
export default SecondaryContainer;