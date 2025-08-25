import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, SUPPORTED_LANGUAGES } from "../Utils/constants";
import { useRef } from "react";
import { getGeminiResponse } from "../Utils/genAI";
import { addGptMovieResult } from "../Utils/GptSlice";

const GptSearchBar=()=>{
    const language=useSelector((store)=>store.language.language)
    const currentLang = SUPPORTED_LANGUAGES.find((lang) => lang.value === language);
    const searchText=useRef(null);
    const dispatch=useDispatch();

    const TMDBsearch=async(movie)=>{
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,API_OPTIONS)
        const json= await data.json();
        return json.results;
    }
    const handleAISearch=async()=>{
        const query = searchText.current.value;
        if (!query.trim()) return;
        try {
        const response = await getGeminiResponse(query); // call Gemini
        const recommendedMovies=response.split(",")
        const recommendedMoviesPromises=recommendedMovies.map((movie)=>TMDBsearch(movie));
        const tmdbResults=await Promise.all(recommendedMoviesPromises)
        dispatch(addGptMovieResult(tmdbResults))

        } catch (error) {
        console.error(error);
        }
    }
return(
    <div className="pt-[10%] flex justify-center" >
        <form 
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e)=>e.preventDefault()}>
            <input 
            ref={searchText}
            type="text" 
            className="p-4 m-4 text-white col col-span-9 border border-gray-500 rounded-lg" 
            placeholder={currentLang?.placeholder}/>
            <button
            type="button" 
            className="m-4 col col-span-3 py-3 px-6 bg-red-600 text-white rounded-lg cursor-pointer hover:bg-red-700"
            onClick={handleAISearch}>{currentLang?.btn_txt}</button>
        </form>
    </div>
)
}
export default GptSearchBar;