import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovie=()=>{
    const gptRecommendedMovies=useSelector((store)=>store.gpt.gptMovies)
     if (!gptRecommendedMovies || gptRecommendedMovies.length === 0) {
    return null; 
  }
return(
    <div className="p-4 m-4 w-full bg-black/50">
       {gptRecommendedMovies.map((m, idx) => (
        m.length > 0 && (
            <MovieList 
            key={idx} 
            title={m[0]?.title || "Recommended"} 
            movies={m} 
            />
        )
))}

    </div>
)
}
export default GptMovie;