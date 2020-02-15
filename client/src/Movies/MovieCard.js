import React from 'react';
import { NavLink } from 'react-router-dom'

const MovieCard = ({ movie }) => {
  console.log('movie', movie)
  // console.log('movies', movies)

  // const { title, director, metascore, stars } = movie;
  return (
      <NavLink to={`/movies/${movie.id}`} >
        
        <div className="movie-card">
        <h2>{movie.title}</h2>
        <div className="movie-director">
          Director: <em>{movie.director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{movie.metascore}</strong>
        </div>
        <h3>Actors</h3>

        {movie.stars.map(star => (
          <div key={movie.star} className="movie-star">
            {star}
          </div>
        ))}
        </div>
        
      </NavLink> 
  );
}
export default MovieCard;
