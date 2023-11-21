import React from 'react';
import MovieBox from './MovieBox';
const MovieGrid = ({ movies, onMovieClick }) => {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieBox key={movie.id} movie={movie} onMovieClick={onMovieClick} />
      ))}
    </div>
  );
};

export default MovieGrid;