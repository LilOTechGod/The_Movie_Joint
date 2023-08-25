import React from 'react'
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieScreen = ({list,page,setPage,movieList}) => {
    let movieDisplay = movieList.map((movie, index) => {
        return <MovieCard movie={movie}/>;
    })

  return (
    <div className='page'>
        <h1>Oscar's Movie Theatre</h1>
        <h3>Add a movie to your watch list!</h3>
        <div className='movie-container'>
            {movieDisplay}
        </div>
    </div>
  )
}
