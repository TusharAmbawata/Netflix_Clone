import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className='w-full h-full'>
      <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="error" />
      <div className='bg-black/60 w-full h-screen fixed top-0 left-0'></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className='max-w-[450px] h-[500px] mx-auto bg-black/75 text-white'>
          <div className='max-w-[320px] mx-auto py-10'>
            <h1 className='text-3xl font-bold'>Sign Up</h1>
            <form className='w-full flex flex-col py-4'>
              <input className='bg-gray-600 p-3 my-2 rounded' type="email" placeholder='Email' />
              <input className='bg-gray-600 p-3 my-2 rounded' type="password" placeholder='Password' />
              <input className='bg-gray-600 p-3 my-2 rounded' type="password" placeholder='Confirm Password' />
              <button className='bg-red-600 text-white my-6 py-2 px-6 rounded cursor-pointer'>Sign Up</button>
              <div className='flex justify-between items-center text-gray-500'>
                <p><input className='mr-1' type="checkbox"/>Remember Me</p>
                <p>Need Help?</p>
              </div>
            </form>
            <p className='py-4'><span className='text-gray-500'>Already Subscried to Netflix?</span>{' '}<Link to='/SignIn'>Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
