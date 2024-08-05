import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Row = ({ title, fetchUrl, rowID, style }) => {

    const [movies, setMovies] = useState([]);
    const [like, setLike] = useState(false);
    const [trailerUrl, setTrailerUrl] = useState("");

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    useEffect(() => {
        axios.get(fetchUrl).then((response) => {
            setMovies(response.data.results);
        });
    }, [fetchUrl])
    console.log(movies);

    const slideLeft = () => {
        let slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideRight = () => {
        let slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    const handleClick = (movie) => {
        // console.log(movie)
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.title || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                })
                .catch((error) => console.log(error));
        }
    }

    const handleChange = () => {
        console.log('liked');
        if (like === true) {

            setLike(false);
        }
        else {
            setLike(true);
        }
    }


    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className="relative flex items-center group mb-5">
                <MdChevronLeft onClick={slideLeft}
                    className='bg-white rounded-full left-0 text-4xl absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />
                <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies.map((item, id) => (
                        // <Movie key={id} item = {item}/>
                        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2' key={id} >
                            <img style={style} className='w-full h-auto block'
                                src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                                alt={item?.title} id={item.id}
                            />

                            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white' >
                                <p className='text-xs md:text-sm font-bold flex justify-center items-center h-full text-center' onClick={() => { handleClick(item) }}  >
                                    {item?.title}
                                </p>
                                {like ? (<FaHeart className='absolute top-4 left-4 text-red-500' onClick={handleChange}/>) : (<FaRegHeart className='absolute top-4 left-4 text-gray-200' onClick={handleChange}/>)}
                            </div>
                        </div>
                    ))}
                </div>
                <MdChevronRight onClick={slideRight}
                    className='bg-white rounded-full right-0 text-4xl absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </>
    )
}

export default Row
