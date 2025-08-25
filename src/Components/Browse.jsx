import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptView from "./GptView";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
function Browse(){
  useNowPlayingMovies();
  useTopRatedMovies();
  useTrendingMovies();
  const ShowGptView=useSelector((store)=>store.gpt.showGptView)
  return (
    <div>
      <Header/>
      {
        ShowGptView ? (
          <GptView/>
        ):(
          <>
            <MainContainer/>
            <SecondaryContainer/>
          </> 
        )
      }
    
    </div>
  )
}
export default Browse;