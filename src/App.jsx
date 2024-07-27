import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from './Components/Movie';

const API_URL = 'http://www.omdbapi.com?apikey=5a5d7903';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    try {
      console.log('Searching for movies with title:', title);
      const response = await fetch(`${API_URL}&s=${title}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Fetched data:', data);
      setMovies(data.Search || []);
    } catch (error) {
      console.error('Failed to fetch movies:', error);
    }
  };

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className="app">
      <h1>Movieeeee</h1>
      <div className="search font-mono h-16">
        <input
          placeholder="Hmmm...What to watch next?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
        />
        <img
          src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <Movie key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>NO MOVIES</h2>
        </div>
      )}
    </div>
  );
};

export default App;
