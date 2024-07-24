import React from 'react'

const Movie = ({movie1}) => {
  return (
    <div className="movie" >
            <div>
              <p>{movie1.Year}</p>
            </div>
            <div>
              <img src={movie1.Poster} alt={movie1.Title} />
            </div>
            <div className="rounded-[30px] mb-2  mr-12 ml-12 ">
              <span className='flex justify-center' >
                {movie1.Type}
              </span>
              <h3>{movie1.Title}</h3>
            </div>
          </div>
  )
}

export default Movie