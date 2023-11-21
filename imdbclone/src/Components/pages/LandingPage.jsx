import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieGrid from "./MovieGrid";
import MovieModal from "./MovieModal";

const LandingPage = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();

  useEffect(() => {
    axios.get(
      "https://api.themoviedb.org/3/movie/11?api_key=faf22cfb8c304217950ba49848d44401"
    )
    .then(res => {
        console.log(res)
        setMovies(res.data)
    })
    .catch(err => {
        console.log(err)
    })
  }, []);
  const movieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div>
    <h1>Movie Search</h1>
    {movies.length > 0 ? (
      <MovieGrid movies={movies} onMovieClick={movieClick} />
    ) : (
     
      <div className="skeleton-loader"></div>
    )}

    {selectedMovie && (
      <MovieModal movie={selectedMovie} onClose={closeModal} />
    )}
  </div>
  );
};

export default LandingPage;
