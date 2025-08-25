import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../Utils/movieSlice";

const useMovieTrailer=(movieId)=>{

    const dispatch=useDispatch();
    const trailer=useSelector((store)=>store.movies.trailerVideo)
    const getMovieVideos= async()=>{
        const data=await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,API_OPTIONS)
        const json=await data.json();
        const trailerObj= json.results.find(v=>v.type==='Trailer')
        dispatch(addTrailerVideo(trailerObj));
    }

    useEffect(()=>{
        !trailer&&getMovieVideos();
    },[])
}
export default useMovieTrailer;
