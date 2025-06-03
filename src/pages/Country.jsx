import React from 'react'
import { useEffect, useTransition,useState } from 'react'
import { getAllCountries } from '../api/postAPI'
import Card from '../components/Leyout/Card'
import SearchFilter from '../components/ui/SearchFilter';

function Country() {
  const [isPanding, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    startTransition(async() => {
      const res = await getAllCountries();
      setCountries(res);
      console.log(res);
    })
  },[])
  if (isPanding) {
    return (
        <div class="flex-col h-screen bg-black gap-4 w-full flex items-center justify-center">
          <div
            class="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
          >
            <div
              class="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
            ></div>
          </div>
        </div>
    )
  }

const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  // here is the main logic
  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );
  return (
    <>
    <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countries={countries} setCountries={setCountries} />
    <div className="h-full bg-black pb-10 pt-20 xl:px-[10%] grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 justify-items-center ">
      {filterCountries.map((country) => {
        return <Card country={country} />
      })}
    </div>
    </>
  )
}

export default Country
