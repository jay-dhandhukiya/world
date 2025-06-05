import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
function HeroSection() {
  return (
      <div className="h-full gap-4 py-25 text-white bg-black w-full flex flex-col justify-center items-center sm:flex-col px-[10%]  md:flex-row xl:px-[15%]">
        <div className="w-full h-full pt-20">
          <h1 className="text-xl font-bold sm:text-2xl md:text-2xl xl:text-4xl">Explore the World, One Country at a Time.</h1>
          <p className="text-md mt-4 md:text-md xl:text-xl">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>
          <button className="flex items-center cursor-pointer gap-2 mt-4 py-2 rounded-full border border-white px-4 bg-gray-900 hover:border-gray-400 md:text-lg">
            <NavLink to="/country" className="backBtn">
            Start Exploring <FaLongArrowAltRight className='pt-1' />
            <NavLink />
          </button>
        </div>
        <div className="w-full h-full md:pt-15">
          <img
            src="./world.png"
            alt="world is beauty"
            className="h-[250px] w-full"
          />
        </div>
      </div>
  )
}

export default HeroSection
