import './App.css'
import { RESPONSE_NOT_FOUND } from './mocks/notFound'
import { RESPONSE } from './mocks/response'

function App() {
  const [response, setResponse] = useState()

  const existResponse = () => {
    if (response.length() > 0) {
      setResponse(RESPONSE.Search)
      return true
    } else {
      setResponse(RESPONSE_NOT_FOUND)
      return false
    }
  }

  return (
    <div>
      <header>
        <h1>Movies searcher</h1>
        <form >
          <input type="text" placeholder='The farewell concubine, Your name engraved' />
          <button>Search</button>
        </form>
      </header>
      <main>
        {existResponse() ? (
          response.map((cur) => (
            <div key={cur.imdbID}>
              <h1>{cur.Title}</h1>
              <img src={cur.Poster} alt={`poster from ${cur.Title}`} />
              <div>
                <p>{cur.Type}</p>
                <p>{cur.Year}</p>
              </div>
            </div>
          ))
        ) : (
          <p>{response.Error}</p>
        )}

      </main>
    </div>
  )
}

export default App
