import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="px-6 py-4">
      {/* Title */}
      <h1 className="text-2xl text-white font-bold mb-3">{title}</h1>
      {/* Scrollable Row */}
        <div className="flex overflow-x-scroll no-scrollbar space-x-3">
        <div className="flex overflow-x-scroll no-scrollbar space-x-3">
        {movies.map((m) => (
          <MovieCard
            key={m.id}
            posterPath={m.poster_path}
            title={m.title}
            description={m.overview}
            rating={m.vote_average}
            year={m.release_date?.split("-")[0]}
          />
        ))}
</div>

      </div>
      
    </div>
  );
};

export default MovieList;

