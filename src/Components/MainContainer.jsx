import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!nowPlayingMovies || nowPlayingMovies.length === 0) return null;

  // always take the first movie
  const mainMovie = nowPlayingMovies[0];
  const { title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={title} description={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
