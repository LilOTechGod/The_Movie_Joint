import React from 'react'
import './MovieCard.css';

export const MovieCard = ({movie, addMovie, removemovie, watchList}) => {

    let inWatchlist = watchList.filter(mov => {
        return mov.id === movie.id;
    });

    const button = inWatchlist.length === 0 ? (
    <button onClick={() => addMovie(movie)}>Add to List!</button>) : (
        <button onClick={() => removemovie(movie)}>Remove</button>
    )

  return (
    <div className='movie-card'>
        <div>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
            <h3>{movie.original_title}</h3>
        </div>
            {button}
    </div>
  )
}
