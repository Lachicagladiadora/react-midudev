import './App.css'
import responseMovies from './mocks/with-results.json'
import withoutResults from './mocks/no-results.json'
import { useState } from 'react'

function App() {
  const [inputSearch, setInputSearch] = useState('')
  const movies = responseMovies.Search
  // const hasMovies = movies.length() > 0
  const hasMovies = true
  console.log(movies)


  const onSubmit = (e) => {
    e.preventDefault()
    console.log({ inputSearch })
  }

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
          <ul>
            {movies.map((cur) => (
              <li key={cur.imdbID}>
                <h3>{cur.Title}</h3>
                <p>{cur.Year}</p>
                <img src={cur.Poster} alt="" />
              </li>
            ))}
          </ul>
        ) : (
          <p>{withoutResults.Error}</p>
        )}
      </main>
    </div>
  )
}

export default App
