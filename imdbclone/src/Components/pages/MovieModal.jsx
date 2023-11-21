import React from 'react'

const MovieModal = ({ movie, onClose }) => {
  const { title, releaseYear, genre, trailer } = movie;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <h2>{title}</h2>
        <p>Year: {releaseYear}</p>
        <p>Genre: {genre}</p>
        <iframe title="movie-trailer" width="560" height="315" src={trailer} frameBorder="0" allowFullScreen></iframe>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
export default MovieModal;