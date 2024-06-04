import { useEffect, useRef, useState } from 'react'
import './App.css'
import { MoviesList } from './components/MoviesList'
import { useMovies } from './hooks/useMovies'



function App() {
  const { movies: mappedMovies } = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  // const inputRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()
    const value = inputRef.current.value
    console.log('search')
    console.log({ value })
  }

  const onChange = (e) => {
    setQuery(e.target.value)
  }

  useEffect(() => {
    if (query === '') {
      setError("Don't show void results")
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
      </header>
      <main>
        <MoviesList movies={mappedMovies} />
      </main>
    </div >
  )
}

export default App
