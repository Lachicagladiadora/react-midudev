import withoutResults from '../mocks/no-results.json'

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map((cur) => (
        <li key={cur.id}>
          <h3>{cur.title}</h3>
          <p>{cur.year}</p>
          <img src={cur.poster} alt={`poster from ${cur.title}`} />
        </li>
      ))}
    </ul>
  );
};

export const NotFoundMovie = () => {
  return <p>{withoutResults.Error}</p>
}