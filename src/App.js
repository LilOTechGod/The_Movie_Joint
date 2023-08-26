import React, {useState, useEffect} from 'react';
import './App.css';
import {Header} from './Components/Header/Header'
import axios from 'axios';
import { MovieScreen } from './Components/MovieScreen/MovieScreen';
import { WatchList } from './Components/WatchList/WatchList';


function App({}) {
const [movie, setMovie] = useState([]);
const [watchList, setWatchList] = useState([]);
const [page, setPage] = useState(1);

const getData = () => {
  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
    .then(res => {
      console.log(res.data.results);
      setMovie(res.data.results);
    });
};
  useEffect(() => {
    getData();
  }, [page]);

  let addMovie = (movie) => {
    setWatchList([...watchList, movie]);
  }

  let removeMovie = (movie) => {
    let newState = watchList.filter((mov) => {
      return mov !== movie;
    });
    setWatchList(newState);
  };

  return (
    <div className="App">
        <Header />
        <main className='row'>
          <MovieScreen 
            movie={movie}
            page={page}
            setPage={setPage}
            watchList={watchList}
            addMovie={addMovie}
            removemovie={removeMovie}
            />
          <WatchList watchList={watchList}
          removemovie={removeMovie}
          />
        </main>
    </div>
  );
}

export default App;
