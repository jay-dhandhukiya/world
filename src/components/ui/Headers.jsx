import React from 'react'
import { MdFormatListBulleted } from "react-icons/md";

function Headers() {
  const handleNav = () => {
    const nav = document.querySelector('.nav')
    nav.classList.toggle('hidden')
  }
  return (
    <>
    <div className='fixed w-full flex justify-between items-center py-4 px-8 bg-gray-800 sm:px-[10%] xl:px-[15%]'>
      <div>
        <h1 className='text-2xl font-bold text-white md:text-3xl'>WorldAtlas</h1>
      </div>
      <ul className=' text-white gap-4 hidden sm:flex md:text-md'>
        <a href="/"><li className='hover:text-blue-500'>Home</li></a>
        <a href="/about"><li className='hover:text-blue-500'>About</li></a>
        <a href="/country"><li className='hover:text-blue-500'>Country</li></a>
        <a href="/contact"><li className='hover:text-blue-500'>Contact</li></a>
      </ul>
      <button onClick={handleNav} className='text-white text-2xl sm:hidden'><MdFormatListBulleted /></button>
    <div className='nav absolute top-16 left-0 hidden w-full py-6 bg-gray-800 sm:hidden'>
      <ul className='flex flex-col justify-center items-center text-white gap-4 md:text-md'>
        <a href="/"><li className='pb-3 hover:text-blue-500'>Home</li></a>
        <a href="/about"><li className='pb-3 hover:text-blue-500'>About</li></a>
        <a href="/country"><li className='pb-3 hover:text-blue-500'>Country</li></a>
        <a href="/contact"><li className='pb-3 hover:text-blue-500'>Contact</li></a>
      </ul>
    </div>
    </div>

    </>
  )
}

export default Headers
