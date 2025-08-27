import GptSearchBar from "./GptSearchBar"
import GptMovie from "./GptMovie"
import { NETFLIX_COVER } from "../Utils/constants";

const GptView = () => {
    return (
        <div className="relative w-full min-h-screen overflow-x-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${NETFLIX_COVER})` }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>

            {/* Hero Section (Search Bar) */}
            <div className="relative z-20 flex items-center justify-center min-h-[60vh] px-4 sm:px-8 lg:px-16">
                <div className="w-full max-w-md sm:max-w-xl lg:max-w-2xl">
                    <GptSearchBar />
                </div>
            </div>

            {/* Movie List Section */}
            <div className="relative z-20 px-4 sm:px-8 lg:px-16 pb-12">
                <GptMovie />
            </div>
        </div>
    )
}

export default GptView;
