import React from 'react';

function MoviePage({ movie }) {
  const {
    Title,
    Year,
    Rated,
    Runtime,
    Genre,
    Director,
    Actors,
    Poster,
    Metascore,
    imdbRating
  } = movie;

  return (
    <div className="movie-page">
      <img className="poster" src={Poster} alt={Title} />
      <div className="page-text">
        <h2>{Title}</h2>
        <div className="movie-director">
          Year: <em>{Year}</em>
        </div>
        <div className="movie-scores">
          <p>
            Metascore: <strong>{Metascore}</strong>
          </p>
          <p>
            imdb Rating: <strong>{imdbRating}</strong>
          </p>
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

export default MoviePage;
