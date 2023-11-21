import React from 'react'

const MovieBox = ({ movie, onMovieClick }) => {
  const { title, releaseYear, genre, thumbnail } = movie;

  const handleClick = () => {
    onMovieClick(movie);
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <img src={thumbnail} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <p>{releaseYear}</p>
        <p>{genre}</p>
      </div>
    </div>
  );
};

export default MovieBox;