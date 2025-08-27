import { useState } from "react";
import { IMAGE_URL } from "../Utils/constants";

const MovieCard = ({ posterPath, title, description, rating, year }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!posterPath) return null;

  return (
    <> 
      {/* Movie Poster */}
      <div
        className="min-w-[140px] h-[200px] rounded-lg overflow-hidden shadow-md cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img
          className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
          src={IMAGE_URL + posterPath}
          alt={title}
        />
      </div>

      {/* Popup */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={() => setIsOpen(false)} // close on background click
        >
          <div
            className="bg-gray-900 rounded-xl p-6 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white text-xl"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>

            {/* Popup Content */}
            <img
              src={IMAGE_URL + posterPath}
              alt={title}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-xl font-bold text-white mt-4">{title}</h3>
            <p className="text-gray-300 mt-2 line-clamp-4">{description}</p>
            <div className="mt-2 flex justify-between text-gray-200 text-sm">
              <span>⭐ {rating || "N/A"}</span>
              <span>{year || "Unknown"}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;
