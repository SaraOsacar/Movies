import React from 'react';
import { Link } from 'react-router-dom';
const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 6) {
    return 'blue';
  } else {
    return 'red';
  }
};

const Movie = ({
  title,
  poster_path,
  overview,
  vote_average,
  original_language,
}) => (
  <div className="movie">
    <img
      src={
        poster_path
          ? IMG_API + poster_path
          : 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWVzfGVufDB8fDB8fHww'
      }
      alt={title}
    />
    <div className="movie-info">
      <h3>{title}</h3>
      <span className={`tag ${setVoteClass(vote_average)}`}>
        {vote_average}
      </span>
    </div>
    <div className="movie-over">
      <h2>Overview</h2>
      <p>{overview}</p>
      <span>{original_language}</span>
    </div>
  </div>
);
export default Movie;
