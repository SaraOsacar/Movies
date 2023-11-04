import '../styles/App.scss';
import React from 'react';
import Movie from './Movie';

function App() {

  const movies = ['1', '2', '3'];



  return (
    <div>
      {movies.map(movie => (
        <Movie />
      ))}
    </div>
  );
}

export default App;
