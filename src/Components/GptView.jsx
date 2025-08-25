import GptSearchBar from "./GptSearchBar"
import GptMovie from "./GptMovie"
import { NETFLIX_COVER } from "../Utils/constants";

const GptView = () => {
    return (
        <div className="relative w-full min-h-screen overflow-x-hidden">
            <div 
                className="absolute inset-0 w-full h-full bg-cover "
                style={{ backgroundImage: `url(${NETFLIX_COVER})` }}
            />
            
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black"></div>

            <div className="relative z-20 px-4 pt-4">
                <GptSearchBar />
            </div>

            <div className="relative z-20 px-4 pt-4 pb-8">
                <GptMovie />
            </div>
        </div>
    )
}

export default GptView;