// import { useState } from "react";
// import { IMAGE_URL } from "../Utils/constants";

// const MovieCard = ({ posterPath, title, description, rating, year }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   if (!posterPath) return null;

//   return (
//     <> 
//       {/* Movie Poster */}
//       <div
//         className="min-w-[140px] h-[200px] rounded-lg overflow-hidden shadow-md cursor-pointer"
//         onClick={() => setIsOpen(true)}
//       >
//         <img
//           className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
//           src={IMAGE_URL + posterPath}
//           alt={title}
//         />
//       </div>

//       {/* Popup */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
//           onClick={() => setIsOpen(false)} // close on background click
//         >
//           <div
//             className="bg-gray-900 rounded-xl p-6 max-w-md w-full relative"
//             onClick={(e) => e.stopPropagation()} 
//           >
//             {/* Close Button */}
//             <button
//               className="absolute top-2 right-2 text-white text-xl"
//               onClick={() => setIsOpen(false)}
//             >
//               ×
//             </button>

//             {/* Popup Content */}
//             <img
//               src={IMAGE_URL + posterPath}
//               alt={title}
//               className="w-full h-48 object-cover rounded"
//             />
//             <h3 className="text-xl font-bold text-white mt-4">{title}</h3>
//             <p className="text-gray-300 mt-2 line-clamp-4">{description}</p>
//             <div className="mt-2 flex justify-between text-gray-200 text-sm">
//               <span>⭐ {rating || "N/A"}</span>
//               <span>{year || "Unknown"}</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default MovieCard;

import { useState } from "react";
import { IMAGE_URL } from "../Utils/constants";

const MovieCard = ({ posterPath, title, description, rating, year }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!posterPath) return null;

  return (
    <>
      {/* Movie Poster - Optimized mobile size */}
      <div
        className="flex-shrink-0 w-32 h-48 sm:w-36 sm:h-54 md:w-40 md:h-60 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform duration-200 hover:scale-105 snap-start"
        onClick={() => setIsOpen(true)}
      >
        <img
          className="w-full h-full object-cover"
          src={IMAGE_URL + posterPath}
          alt={title}
          loading="lazy"
        />
      </div>

      {/* Mobile-optimized Popup */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          {/* Mobile: Bottom sheet, Desktop: Center modal */}
          <div
            className="bg-gray-900 w-full sm:w-96 sm:rounded-xl p-5 max-h-[85vh] overflow-y-auto rounded-t-2xl sm:rounded-t-xl animate-slide-up sm:animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-1 bg-gray-600 rounded-full sm:hidden mx-auto"></div>
              <button
                className="text-white text-2xl hover:text-gray-300 transition-colors sm:absolute sm:top-4 sm:right-4 p-1"
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>
            </div>

            {/* Movie Image */}
            <div className="relative mb-4">
              <img
                src={IMAGE_URL + posterPath}
                alt={title}
                className="w-full h-56 sm:h-64 object-cover rounded-lg"
              />
              {/* Rating badge */}
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-md flex items-center">
                <span className="text-yellow-400 text-sm mr-1">★</span>
                <span className="text-white text-sm font-medium">
                  {rating ? rating.toFixed(1) : "N/A"}
                </span>
              </div>
            </div>

            {/* Movie Info */}
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-white leading-tight flex-1">
                  {title}
                </h3>
                <span className="text-gray-400 text-sm ml-3 flex-shrink-0">
                  {year || "Unknown"}
                </span>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                {description || "No description available."}
              </p>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button className="flex-1 bg-white text-black font-semibold py-3 rounded-md hover:bg-gray-200 transition-colors flex items-center justify-center">
                  <span className="mr-2">▶</span>
                  Play
                </button>
                <button className="px-4 py-3 border border-gray-600 text-white rounded-md hover:bg-gray-800 transition-colors">
                  <span>+</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;