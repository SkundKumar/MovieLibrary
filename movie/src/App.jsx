import {useEffect, useState} from "react";
import "./App.css"
import Movie from "./Components/Movie";
const API_URL = 'http://www.omdbapi.com?apikey=5a5d7903'
const App = () =>{
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("")
  const searchMovies = async (title)=>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }

  const movie1 = {
    Poster: "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg",
Title: "Spiderman in Cannes",
Type: "movie",
Year: "2016",
imdbID: "tt5978586"
  }

  useEffect(()=>{
    searchMovies('Batman')
  }, [])
  
  return(
    <div className="app">
        <h1>Movieeeee</h1>
        <div className="search font-mono h-16 ">
          <input placeholder="Hmmm...What to watch next ?" 
          
          onChange={(e)=>{setSearch(e.target.value)}}
          type="text" />
          <img src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg" alt="search" onClick={()=>{searchMovies(search)}} />
        </div>
        {
          movies?.length>0? (
            <div className="container">
          {movies.map((movie) => (
            <Movie movie={movie}/>
          ))}
        </div>
          ) : 
          (
            <div className="empty">
                <h2>NO MOVIES</h2>
            </div>
          )
        }
        
    </div>
  )
}

export default App