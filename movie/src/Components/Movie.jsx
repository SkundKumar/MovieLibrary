import React from 'react'

const Movie = ({movie}) => {
  return (
    <div className="movie" >
            <div>
              <p>{movie.Year}</p>
            </div>
            <div>
              <img src={movie.Poster} alt={movie.Title} />
            </div>
            <div className="rounded-[30px] mb-4  mr-12 ml-12 ">
              <span className='flex justify-center' >
                {movie.Type}
              </span>
              <h3 className='flex justify-center '>{movie.Title}</h3>
            </div>
          </div>
  )
}

export default Movie