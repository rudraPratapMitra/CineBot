const VideoTitle = ({ title, description }) => {
  return (
    <div className="absolute w-full aspect-video py-[20%] px-4 sm:px-12 text-white bg-gradient-to-r from-black">
      
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">{title}</h1>
      
      {/* Description - only visible on md and above */}
      <p className="hidden md:block md:py-6 text-lg w-1/2">{description}</p>
      
      {/* Buttons */}
      <div className="flex flex-wrap gap-3 mt-6">
        <button className="cursor-pointer bg-white hover:bg-white/80 text-black font-bold py-2 px-4 text-sm sm:py-4 sm:px-8 sm:text-lg rounded-lg">
          ▷ Play
        </button>
        <button className="cursor-pointer bg-gray-700/80 hover:bg-gray-700/50 text-white py-2 px-4 text-sm sm:py-4 sm:px-8 sm:text-lg rounded-lg">
          ⓘ More Info
        </button>
      </div>

    </div>
  );
};

export default VideoTitle;


