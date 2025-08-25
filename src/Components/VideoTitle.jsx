const VideoTitle=({title,description})=>{
    return (
        <div className="absolute w-full aspect-video py-[20%] px-12 text-white bg-gradient-to-r from-black">
           <h1 className="text-6xl font-bold">{title}</h1>
           <p className="py-6 text-lg w-1/2">{description}</p>
            <div>
                <button className="cursor-pointer bg-white/100 hover:bg-white/80 text-black font-bold p-4 px-16 text-lg rounded-lg">▷ Play</button> 
                <button className=" mx-3 cursor-pointer bg-gray-700/80 hover:bg-gray-700/50 text-white p-4 px-16 text-lg rounded-lg">ⓘ More Info</button>
            </div>
        </div>
    )
}
export default VideoTitle;