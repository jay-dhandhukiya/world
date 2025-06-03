import React from 'react'
import countryData from "../api/countryData.json";
function About() {
  return (
    <div className='h-full bg-black pb-10 pt-20 xl:px-[10%]'>
      <h2 className="container-title py-4 pb-6 text-center text-xl font-bold text-white line-clamp-2 space-x-2 sm:text-2xl md:text-2xl xl:text-3xl">
        Here are the Interesting Facts
        <br />
        we’re proud of
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
        {countryData.map((country) => {
          const { id, countryName, capital, population, interestingFact } = country;
          return (
                <div key={id} className='w-[280px] px-8 py-6 bg-gray-800 text-white rounded-2xl sm:w-[320px] xl:w-[350px]'>
                    <h1 className='text-2xl font-semibold'>{countryName}</h1>
                    <p className='text-white/60 pt-2 pb-1'>Capital :- <span className='text-white text-md'>{capital}</span></p>
                    <p className='text-white/60 pb-1'>Population :- <span className='text-white'>{population}</span></p>
                    <p className='text-white/60 pb-1'>Interesting Fact :- <span className='text-white'>{interestingFact}</span></p>
                </div>  
          );
        })}
      </div>
    </div>
  )
}

export default About
