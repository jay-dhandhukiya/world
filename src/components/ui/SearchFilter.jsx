import React from 'react'

function SearchFilter({search, setSearch, filter, setFilter, countries, setCountries}) {
     const handleSearch = (e) =>{
      e.preventDefault();
      setSearch(e.target.value);
     }

     const handleFilter = (e) => {
      e.preventDefault();
      setFilter(e.target.value);
     }

     const sortCountries = (order) => {
      const sortedCountries = [...countries].sort((a, b) => {
          return order === 'asc'
          ? a.name.common.localeCompare(b.name.common)
          : b.name.common.localeCompare(a.name.common);
      });
      setCountries(sortedCountries);
     }

  return (
    <div className='bg-black h-full pt-20 w-full flex flex-col md:flex-row gap-4 justify-between items-center sm:flex-col px-[8%] xl:px-[15%]'>
      <input 
      type="text" 
      value={search}
      placeholder='Search Country'
      className='py-2 text-white px-4 w-60 rounded-full border-2 border-gray-600'
      onChange={handleSearch}
      />
      <div>
          <button className='flex items-center text-white cursor-pointer gap-2 py-1 rounded-xl border-2 px-4 bg-black border-gray-600 md:text-lg' onClick={() => sortCountries('asc')}>Asc</button>
      </div>
      <div>
          <button className='flex items-center text-white cursor-pointer gap-2 py-1 rounded-xl border-2 px-4 bg-black border-gray-600 md:text-lg' onClick={() => sortCountries('desc')}>Desc</button>
      </div>
      <div>
        <select 
        className='py-2 px-4 text-white w-full rounded-md border-2 border-gray-600'
        value={filter}
        onChange={handleFilter}
        >
          <option className='text-black' value="All">All</option>
          <option className='text-black' value="Africa">Africa</option>
          <option  className='text-black' value="America">America</option>
          <option className='text-black' value="Asia">Asia</option>
          <option className='text-black' value="Europe">Europe</option>
          <option className='text-black' value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  )
}

export default SearchFilter
