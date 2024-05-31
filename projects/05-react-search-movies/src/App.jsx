import './App.css'
import responseMovies from './mocks/with-results.json'
import { useState } from 'react'
import { MoviesList, NotFoundMovie } from './components/MoviesList'

function App() {
  const [inputSearch, setInputSearch] = useState('')
  const movies = responseMovies.Search
  // const hasMovies = movies.length() > 0
  const hasMovies = true


  const onSubmit = (e) => {
    e.preventDefault()
    console.log({ inputSearch })
  }

  console.log(movies)
  return (
    <div>
      <header>
        <h1>Movies searcher</h1>
        <form onSubmit={(e) => onSubmit(e)}>
          <input type="text" placeholder='The farewell concubine, Your name engraved' value={inputSearch} onChange={e => setInputSearch(e.target.value)} />
          <button>Search</button>
        </form>
      </header>
      <main>
        {hasMovies ? (
          <MoviesList movies={movies} />
        ) : (
          <NotFoundMovie />
        )}
      </main>
    </div >
  )
}

export default App
