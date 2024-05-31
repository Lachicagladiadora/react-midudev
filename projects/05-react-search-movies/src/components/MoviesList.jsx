import withoutResults from '../mocks/no-results.json'

export const MoviesList = (movies) => {
  return (
    <ul>
      {movies.map((cur) => (
        <li key={cur.imdbID}>
          <h3>{cur.Title}</h3>
          <p>{cur.Year}</p>
          <img src={cur.Poster} alt="" />
        </li>
      ))}
    </ul>
  );
};

export const NotFoundMovie = () => {
  return <p>{withoutResults.Error}</p>
}