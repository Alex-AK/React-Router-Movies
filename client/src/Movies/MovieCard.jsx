import React from 'react';

function MovieCard({ movie }) {
  const { name, year, rating, stars, poster } = movie;

  return (
    <div className="movie-card">
      <img className="poster" src={poster} alt={name} />
      <div className="card-text">
        <h2>{name}</h2>
        <div className="movie-director">
          Year: <em>{year}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{rating}</strong>
        </div>
      </div>
      {/* <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))} */}
    </div>
  );
}

export default MovieCard;
