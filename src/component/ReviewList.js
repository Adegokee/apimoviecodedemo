import {useContext, useEffect} from 'react'
import {ReviewContext} from '../ReviewContext'
import ReviewItem from './ReviewItem'

const ReviewList = () => {
  
  const {movie, setMovie, setSelectMovie, searchKey}=useContext(ReviewContext)
  const url ='https://api.themoviedb.org/3/'
//  const url='https://www.themoviedb.org/3/'
  const join ='/movie?api_key=bf5595cb127233997340c64248b9a09a&query='

  // 'https://api.themoviedb.org/3/search/movie?api_key=bf5595cb127233997340c64248b9a09afeadbb&query'
  

 useEffect(()=> {
  const getMovie= async () => {
    const type = searchKey? 'search': 'discover'
    const response = await fetch(`${url}${type}${join}${searchKey}`)
    const movie= await response.json();
    setMovie(movie.results)
    setSelectMovie(movie.results[0])
    // console.log(movie.results)
}
getMovie();

 },[setMovie, setSelectMovie, searchKey])

if (! movie || movie.length === 0){
  return 'loading...'
}

  
  return (
    <div>
      {movie.map((film) => (
        <ReviewItem key={film.id} film={film}/>
      ))}
    </div>
  )
}

export default ReviewList
