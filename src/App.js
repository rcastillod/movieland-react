import { useEffect, useState } from "react"

import MovieCard from "./MovieCard"

import './App.css'
import SearchIcon from './search.svg'

// Api URL
const API_URL = 'http://www.omdbapi.com?apikey=cfbbcf50'

const App = () => {

  // States
  const [movies, setMovies] = useState([])
  const [searchTerms, setSearchTerms] = useState('')

  // Function to fetch movies from OMDB API
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search)
  }

  // useEffect is call when the app is loaded
  useEffect(() => {
    searchMovies()
  }, [])

  return (
    <div className="app">

      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Movies"
          value={searchTerms}
          onChange={(e) => { setSearchTerms(e.target.value) }}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => { searchMovies(searchTerms) }}
        />
      </div>

      {movies?.length > 0 ?
        (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }

    </div>
  )
}

export default App