import { IMAGE_URL } from "../Utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="min-w-[140px] h-[160px] rounded-lg overflow-hidden shadow-md">
      <img
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
        src={IMAGE_URL + posterPath}
        alt="movie poster"
      />
    </div>
  );
};

export default MovieCard;
