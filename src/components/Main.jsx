import React, { useEffect, useState } from 'react'
import request from '../Request'
import axios from 'axios';

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(request.requestPopular).then((response) => {
      setMovies(response.data.results)
    })
  }, [])
  console.log(movie)

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };


  return (
    <>
      <div className='w-full h-[550px] text-white'>
        <div className="w-full h-full">
          <div className="w-full h-[550px] absolute bg-gradient-to-r from-black"></div>
          <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />

          <div className='absolute w-full top-1/4 p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
            <div className="my-4">
              <button className='bg-gray-200 border border-gray-200 text-black py-2 px-5' >Play</button>
              <button className='border border-gray-200 text-gray-200 py-2 px-5 ml-5 hover:bg-gray-200 hover:text-black'>Watch Later</button>
            </div>
            <p className='text-sm text-gray-300'>Released: {movie?.release_date}</p>
            <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-100'>{truncateString(movie?.overview, 150)}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
