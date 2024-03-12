import React from 'react'
import Details from './Details'

const Navbar = () => {
  return (
    <>
      <Details />
      <div className="px-56 flex items-center justify-between mt-4">
        <h1 className="text-4xl font-semibold poppin">
          Furniture</h1>
        <div className="links flex items-center gap-10">
          <li className='text-gray-500 poppin'>Home</li>
          <li className='text-gray-500 poppin'>About</li>
          <li className='text-gray-500 poppin'>Furniture</li>
          <li className='text-gray-500 poppin'>Car Catalogue</li>
          <li className='text-gray-500 poppin'>FAQ</li>
        </div>
        <div className="flex items-center gap-4 poppin">
          <button className='text-orang underline hover:opacity-90 hover:no-underline'>Sing In</button>
          <button className='rounded-full back-orang text-white p-3 w-28 font-medium text-sm transition duration-500 hover:opacity-90 hover:scale-110 hover:transition hover:duration-500'>Sing Up</button>
        </div>
      </div>

    </>
  )
}

export default Navbar