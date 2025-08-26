// import { IMAGE_URL } from "../Utils/constants";

// const MovieCard = ({ posterPath }) => {
//   if (!posterPath) return null;

//   return (
//     <div className="min-w-[140px] h-[160px] rounded-lg overflow-hidden shadow-md">
//       <img
//         className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
//         src={IMAGE_URL + posterPath}
//         alt="movie poster"
//       />
//     </div>
//   );
// };

// export default MovieCard;

import { IMAGE_URL } from "../Utils/constants";

const MovieCard = ({ posterPath, title, description, rating, year }) => {
  if (!posterPath) return null;

  return (
    <div className="relative min-w-[140px] h-[200px] rounded-lg overflow-hidden shadow-md group">
      {/* Movie Poster */}
      <img
        className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
        src={IMAGE_URL + posterPath}
        alt={title}
      />

      {/* Hover Popup */}
      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-center">
        <h3 className="text-sm font-bold text-white">{title}</h3>
        <p className="text-xs text-gray-300 mt-1 line-clamp-3">{description}</p>
        <div className="mt-2 text-xs flex justify-between text-gray-200">
          <span>☆ {rating || "N/A"}</span>
          <span>{year || "Unknown"}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

