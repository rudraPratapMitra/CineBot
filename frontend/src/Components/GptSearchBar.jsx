// import { useDispatch, useSelector } from "react-redux";
// import { API_OPTIONS, SUPPORTED_LANGUAGES } from "../Utils/constants";
// import { useRef } from "react";
// import { getGeminiResponse } from "../Utils/genAI";
// import { addGptMovieResult,setLoadingState } from "../Utils/GptSlice";

// const GptSearchBar=()=>{
//     const language=useSelector((store)=>store.language.language)
//     const currentLang = SUPPORTED_LANGUAGES.find((lang) => lang.value === language);
//     const searchText=useRef(null);
//     const dispatch=useDispatch();

//     const TMDBsearch=async(movie)=>{
//         const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,API_OPTIONS)
//         const json= await data.json();
//         return json.results;
//     }
//     const handleAISearch=async()=>{
//         const query = searchText.current.value;
//         if (!query.trim()) return;
//         try {
//         dispatch(setLoadingState(true));
//         const response = await getGeminiResponse(query); 
//         const recommendedMovies=response.split(",")
//         const recommendedMoviesPromises=recommendedMovies.map((movie)=>TMDBsearch(movie));
//         const tmdbResults=await Promise.all(recommendedMoviesPromises)
//         dispatch(addGptMovieResult(tmdbResults))

//         } catch (error) {
//         console.error(error);
//         }
//     }
// return(
//     <div className="pt-[10%] flex justify-center" >
//         <form 
//         className="w-1/2 bg-black grid grid-cols-12"
//         onSubmit={(e)=>e.preventDefault()}>
//             <input 
//             ref={searchText}
//             type="text" 
//             className="p-4 m-4 text-white col col-span-9 border border-gray-500 rounded-lg" 
//             placeholder={currentLang?.placeholder}/>
//             <button
//             type="button" 
//             className="m-4 col col-span-3 py-3 px-6 bg-red-600 text-white rounded-lg cursor-pointer hover:bg-red-700"
//             onClick={handleAISearch}>{currentLang?.btn_txt}</button>
//         </form>
//     </div>
// )
// }
// export default GptSearchBar;


import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, SUPPORTED_LANGUAGES } from "../Utils/constants";
import { useRef } from "react";
import { getGeminiResponse } from "../Utils/genAI";
import { addGptMovieResult, setLoadingState } from "../Utils/GptSlice";

const GptSearchBar = () => {
  const language = useSelector((store) => store.language.language);
  const currentLang = SUPPORTED_LANGUAGES.find(
    (lang) => lang.value === language
  );
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const TMDBsearch = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleAISearch = async () => {
    const query = searchText.current.value;
    if (!query.trim()) return;
    try {
      dispatch(setLoadingState(true));
      const response = await getGeminiResponse(query);

      // Safer split (line breaks or commas)
      const recommendedMovies = response
        .split(/\n|,/)
        .map((m) => m.trim())
        .filter(Boolean);

      const recommendedMoviesPromises = recommendedMovies.map((movie) =>
        TMDBsearch(movie)
      );
      const tmdbResults = await Promise.all(recommendedMoviesPromises);
      dispatch(addGptMovieResult(tmdbResults));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAISearch();
  };

  return (
    <div className="pt-[10%] flex justify-center px-4 sm:px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl flex flex-col sm:flex-row gap-4 bg-black/50 p-4 sm:p-5 rounded-xl"
      >
        <input
          ref={searchText}
          type="text"
          className="flex-1 p-3 sm:p-4 text-white border border-gray-500 rounded-lg bg-black/70 placeholder-gray-400"
          placeholder={currentLang?.placeholder}
        />
        <button
          type="submit"
          className="py-3 sm:py-4 px-6 bg-red-600 text-white rounded-lg cursor-pointer hover:bg-red-700 transition"
        >
          {currentLang?.btn_txt}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

