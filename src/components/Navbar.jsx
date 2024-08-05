import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  let location = useLocation();

  return (
    <>
      <div className='flex items-center justify-between p-4 w-full z-[100] absolute'>
        <Link to='/'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
        </Link>
        <div>
          <Link to='/SignIn'>
          <button className={`text-white cursor-pointer px-6 ${location.pathname==='/SignIn'?'hidden':'inline'}`}>Sign In</button>
          </Link>
          <Link to='/SignUp'>
          <button className={`bg-red-600 text-white py-2 px-6 rounded cursor-pointer ${location.pathname==='/SignUp'?'hidden':'inline'}`}>Sign Up</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
