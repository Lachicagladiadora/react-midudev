import { useRef } from 'react'
import './App.css'
import { MoviesList } from './components/MoviesList'
import { useMovies } from './hooks/useMovies'



function App() {
  const { movies: mappedMovies } = useMovies()

  const inputRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()
    const value = inputRef.current.value
    console.log('search')
    console.log({ value })
  }

  return (
    <div>
      <header>
        <h1>Movies searcher</h1>
        <form onSubmit={(e) => onSubmit(e)}>
          <input ref={inputRef} type="text" placeholder='The farewell concubine, Your name engraved' />
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
