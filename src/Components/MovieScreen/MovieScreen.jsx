import './MovieScreen.css'
import React from 'react'
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieScreen = ({movie,page,setPage,watchList, addMovie, removemovie}) => {

    const decrement = () => setPage(page - 1);
    const increment = () => setPage(page + 1);

    let movieDisplay = movie.map((movie, index) => {
        return <MovieCard key={movie.id} movie={movie} watchList={watchList} addMovie={addMovie} removemovie={removemovie}/>;
    })

  return (
    <div className='page'>
        <h1>Oscar's Movie Theatre</h1>
        <h3>Add a movie to your watch list!</h3>
        <div className='btn-container'>
          <button onClick={page !== 1 && decrement}>Previous</button>
          <button onClick={increment}>Next</button>
        </div>
        <div className='movie-container'>
            {movieDisplay}
        </div>
    </div>
  )
}
