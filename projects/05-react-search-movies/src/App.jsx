import { useEffect, useState } from 'react'
import './App.css'
import { MoviesList } from './components/MoviesList'
import { useMovies } from './hooks/useMovies'



function App() {
  const { movies: mappedMovies } = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)


  const onSubmit = (e) => {
    e.preventDefault()
    console.log('search')
  }

  const onChange = (e) => {
    const newQuery = e.target.value
    if (newQuery.startsWith(' ')) return
    setQuery(e.target.value)
  }

  useEffect(() => {
    if (query === '') {
      setError("Write something for search")
      return
    }
    if (query.match(/^\d+$/)) {
      setError("Don't show number results")
      return
    }
    if (query.length < 3) {
      setError("the search had 3 characters and is not possible")
      return
    }

    setError(null)
  }, [query])

  return (
    <div>
      <header>
        <h1>Movies searcher</h1>
        <form onSubmit={(e) => onSubmit(e)}>
          <input value={query} onChange={onChange} type="text" placeholder='The farewell concubine, Your name engraved' />
          <button>Search</button>
        </form>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      </header>
      <main>
        <MoviesList movies={mappedMovies} />
      </main>
    </div >
  )
}

export default App
