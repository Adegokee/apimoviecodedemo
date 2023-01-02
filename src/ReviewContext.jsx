import {createContext, useState} from 'react'
const imgPath = 'https://image.tmdb.org/t/p/w500/'


export const  ReviewContext=createContext();

const ReviewMovie = ({children}) => {
  const[movie, setMovie] = useState('');
  const [searchKey, setSearchKey] = useState('');
  const[selectMovie, setSelectMovie] = useState('');
  


  return (
    <ReviewContext.Provider value={{movie, setMovie, setSelectMovie, searchKey, setSearchKey}}>
      {children}
      <div className="movie-wrapper" style= {{backgroundImage: `url(${imgPath}${selectMovie.backdrop_path})`}}>

        <div className="hero-content">
          <h1 className='hero-title'>{selectMovie.title}</h1>
          <div className="hero-">{selectMovie.overview}</div>
          
        </div>

      </div>
      
    </ReviewContext.Provider>
  )
}

export default ReviewMovie
