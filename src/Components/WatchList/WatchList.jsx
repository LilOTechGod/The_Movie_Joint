import React from 'react'
import { MovieCard } from '../MovieCard/MovieCard'
import './WatchList.css'

export const WatchList = ({watchList, removemovie}) => {
    
    let movieDisplay = watchList.map((movie, index) => {
        return <MovieCard key={movie.id} movie={movie} removemovie={removemovie} watchList={watchList}/>
    })

  return (
    <div className='watchList'>
        <h1>My watch list</h1>
        <div className='movie-container'>
            {movieDisplay}
        </div>
    </div>
  )
}
