import responseMovies from '../mocks/with-results.json'

export const  useMovies = () => {
  const movies = responseMovies.Search

  const mappedMovies = movies.map((cur) => ({
    id: cur.imdbID,
    title: cur.Title,
    year: cur.Year,
    poster: cur.Poster
  }))

  return { movies: mappedMovies }
}