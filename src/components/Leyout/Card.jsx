import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'
function Card({ country }) {
        const { flags, name, population, region, capital } = country;
        return (
              <li className="country-card  flex flex-col gap-4">
                <div className="w-[250px] px-8 py-6 bg-gray-800 text-white rounded-2xl sm:w-[280px] md:w-[280px] xl:w-[280px] 2xl:w-[300px]">
                  <img className='w-full h-[150px]' src={flags.svg} alt={flags.alt} />

                  <div className="countryInfo">
                    <p className="text-2xl pt-6 font-semibold md:text-3xl xl:text-4xl">
                      {name.common.length > 10
                        ? name.common.slice(0, 10) + "..."
                        : name.common}
                    </p>
                    <p className='text-white/60 pt-2 pb-1 md:text-lg lg:text-lg'>
                      <span className="text-white text-md md:text-lg lg:text-lg">Population :- </span>
                      {population.toLocaleString()}
                    </p>
                    <p className='text-white/60 pb-1 md:text-lg lg:text-lg'>
                      <span className="text-white text-md md:text-lg lg:text-lg">Region :- </span> {region}
                    </p>
                    <p className='text-white/60 pb-1 md:text-lg lg:text-lg'>
                      <span className="text-white text-md md:text-lg lg:text-lg">Capital :- </span>
                      {capital[0]}
                    </p>

                    <NavLink to={`/country/${name.common}`}>
                      <button className="flex items-center cursor-pointer gap-2 mt-4 py-2 rounded-full border border-white px-4 bg-gray-900 hover:border-gray-400 md:text-lg">Read More <FaLongArrowAltRight className='pt-1' /></button>
                    </NavLink>
                  </div>
                </div>
              </li>
        );
}

export default Card
