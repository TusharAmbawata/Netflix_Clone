import React from 'react'

const MyList = (props) => {
    return (
        <>
        <p className='text-white'>List component</p>    
        <div className='text-white'>
            <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>

                <p className='text-white'>{localStorage.getItem('title')}</p>
                <img className='w-full h-auto block'
                    src={`https://image.tmdb.org/t/p/w500/${localStorage.getItem('img')}`}

                />
                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white' >
                                <p className='text-xs md:text-sm font-bold flex justify-center items-center h-full text-center' >
                                    {props.title}
                                </p>
                                {/* <p onClick={()=>{handleChange(item)}}>
                                    {like ? (<FaHeart className='absolute top-4 left-4 text-red-500' />) : (<FaRegHeart className='absolute top-4 left-4 text-gray-200' />)}
                                </p> */}
                            </div>
            </div>
        </div>
        </>
    )
}

export default MyList
