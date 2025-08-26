// import { useSelector } from "react-redux";
// import MovieList from "./MovieList";

// const GptMovie=()=>{
//     const gptRecommendedMovies=useSelector((store)=>store.gpt.gptMovies)
//      if (!gptRecommendedMovies || gptRecommendedMovies.length === 0) {
//     return null; 
//   }
// return(
//     <div className="p-4 m-4 w-full bg-black/50">
//        {gptRecommendedMovies.map((m, idx) => (
//         m.length > 0 && (
//             <MovieList 
//             key={idx} 
//             title={m[0]?.title || "Recommended"} 
//             movies={m} 
//             />
//         )
// ))}

//     </div>
// )
// }
// export default GptMovie;
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import ShimmerCard from "./ShimmerCard";

const GptMovie = () => {
  const gptRecommendedMovies = useSelector((store) => store.gpt.gptMovies);
  const isLoading = !gptRecommendedMovies || gptRecommendedMovies.length === 0;

  return (
    <div className="p-4 m-4 w-full bg-black/50">
      {isLoading ? (
        // Show shimmer rows while loading
        Array.from({ length: 3 }).map((_, idx) => (
          <div key={idx} className="mb-4 px-6">
            {/* Shimmer Title */}
            <div className="text-2xl font-bold mb-2 animate-pulse bg-gray-700 h-6 w-32 rounded"></div>

            {/* Shimmer Cards */}
            <div className="flex space-x-3 overflow-x-scroll no-scrollbar">
              {Array.from({ length: 6 }).map((__, i) => (
                <ShimmerCard key={i} />
              ))}
            </div>
          </div>
        ))
      ) : (
        // Show actual movie lists once data is available
        gptRecommendedMovies
          .filter((m) => m.length > 0)
          .map((m, idx) => (
            <MovieList
              key={idx}
              title={m[0]?.title || "Recommended"}
              movies={m}
            />
          ))
      )}
    </div>
  );
};

export default GptMovie;
