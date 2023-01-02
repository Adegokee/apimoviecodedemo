import React from 'react'
const imgPath = 'https://image.tmdb.org/t/p/w500'
const unavailable = 'https://www.movienewz.com/img/films/poster-holder.jpg'

const ReviewItem = ({film}) => {
  return (
    <div>
      <img src={film.poster_path ? `${imgPath}${film.poster_path}`:unavailable} alt={film.title}/>
      <h4 className="movie-title">{film.title}</h4>
      <span className="rating">{film.vote_average}</span>
      
      {/* https://api.themoviedb.org/3/movie/550?/search/query/

      https://api.themoviedb.org/3/
      movie?api_key=bf5595cb127233997340c64248b9a09abf5595cb127233997340c64248b9a09a
      https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg */}
  </div>
  )
}

export default ReviewItem



