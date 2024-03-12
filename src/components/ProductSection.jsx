import React from 'react'

const ProductSection = () => {
  return (
      <div className='px-52'>
          <h2 className="bold rounded-md font-bold p-2 mt-24 w-fit" style={{ color: '#F73308', background: 'rgba(237, 237, 237, 0.49)'}}>Check Our Product</h2>
          <div className="flex items-center gap-6 justify-end">
              <button className='rounded-full w-40 text-sm font-bold p-3 border-2  text-black  hover:opacity-80 border-black'>
                 Best Seller
              </button>
              <li className='text-gray-500 poppin cursor-pointer hover:opacity-75'>Chair</li>
              <li className='text-gray-500 poppin cursor-pointer hover:opacity-75'>Table</li>
              <li className='text-gray-500 poppin cursor-pointer hover:opacity-75'>Bed</li>
              <li className='text-gray-500 poppin cursor-pointer hover:opacity-75'>Closet</li>
          </div>
          <h1 className='poppin font-extrabold text-black text-4xl'>Crafted with excellent material</h1>
    </div>
  )
}

export default ProductSection