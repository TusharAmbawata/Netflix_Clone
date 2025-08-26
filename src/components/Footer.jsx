import React from 'react'

const Footer = () => {
  return (
    <>
      <hr className='border-[3px] border-gray-500' />
      <div className='bg-black w-full h-full p-4'>
        <p className='text-gray-200 mt-5 ml-14'>Questions? Call <a className='underline' href="tel:000-800-919-1694">000-800-919-1694</a></p>
      <div className="flex justify-around">
        <div className='text-gray-200 p-4'>
          <ul className='space-y-4'>
            <li className='underline'><a href="#">FAQ</a></li>
            <li className='underline'><a href="#">Investor Relations</a></li>
            <li className='underline'><a href="#">Privacy</a></li>
            <li className='underline'><a href="#">Speed Test</a></li>
          </ul>
        </div>
        <div className='text-gray-200 p-4'>
          <ul className='space-y-4'>
            <li className='underline'><a href="#">Help Centre</a></li>
            <li className='underline'><a href="#">Jobs</a></li>
            <li className='underline'><a href="#">Cookie Preferences</a></li>
            <li className='underline'><a href="#">Legal Notices</a></li>
          </ul>
        </div>
        <div className='text-gray-200 p-4'>
          <ul className='space-y-4'>
            <li className='underline'><a href="#">
Account</a></li>
            <li className='underline'><a href="#">Ways to Watch</a></li>
            <li className='underline'><a href="#">Corporate Information</a></li>
            <li className='underline'><a href="#">Only on Netflix</a></li>
          </ul>
        </div>
        <div className='text-gray-200 p-4'>
          <ul className='space-y-4'>
            <li className='underline'><a href="#">Media Centre</a></li>
            <li className='underline'><a href="#">Terms of Use</a></li>
            <li className='underline'><a href="#">
Contact Us</a></li>
          </ul>
        </div>
      </div>
      <p className='text-gray-300 p-4 ml-14'>WatchWave</p>
      </div>
    </>
  )
}

export default Footer

