import {useEffect} from "react";
import "./App.css"
import Movie from "./Components/Movie";
const API_URL = 'http://www.omdbapi.com?apikey=5a5d7903'
const App = () =>{
  const searchMovies = async (title)=>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    console.log(data.Search)
  }

  const movie1 = {
    Poster: "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg",
Title: "Spiderman in Cannes",
Type: "movie",
Year: "2016",
imdbID: "tt5978586"
  }

  useEffect(()=>{
    searchMovies('Spiderman')
  }, [])
  return(
    <div className="app">
        <h1>Movieeeee</h1>
        <div className="search font-mono h-16 ">
          <input placeholder="Hmmm...What to watch next ?" 
          value='Batman'
          onChange={()=>{}}
          type="text" />
          <img src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg" alt="search" onClick={() => searchMovies(searchTerm)} />
        </div>
        <div className="container">
          <Movie movie1={movie1} />
        </div>
    </div>
  )
}

export default App