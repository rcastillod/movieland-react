const MovieCard = ({movie}) => {
  return (
    <div className="movie">
      {/* Year */}
      <div>
        <p>{movie.Year}</p>
      </div>
      {/* Image */}
      <div>
        <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
      </div>
      {/* Title */}
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  )
}

export default MovieCard