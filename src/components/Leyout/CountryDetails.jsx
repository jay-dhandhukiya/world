import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryByName } from "../../api/postAPI";

export const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryByName(params.id);
      console.log(res);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }

      console.log(Object.keys(res.data[0].name.nativeName));
    });
  }, []);


  console.log(params);
  return (
      <div className=" bg-black pt-10 flex items-center h-full w-full text-white md:h-[600px] ">
        {country && (
          <div className="w-full h-full gap-10 py-[10%] bg-linear-to-r from-gray-900 via-gray-700 to-gray-900 items-center grid grid-cols-1 sm:grid-cols-1 sm:h-full md:grid-cols-2 md:py-[0%] md:h-110 sm:flex-col px-[6%]  md:flex-row ">
            <img
              src={country.flags.svg}
              alt={country.flags.alt}
              className="w-full h-[180px]"
            />
            <div className="flex flex-col justify-center items-center sm:items-start ">
              <p className="text-2xl font-bold pb-2 md:text-2xl xl:text-3xl"> {country.name.official} </p>

              <div className="">
                <p className="text-white/60 pb-3">
                   Native Names :-
                  <span className="text-white text-md pl-1">
                  {Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common)
                    .join(", ")}
                  </span>
                </p>
                <p className="text-white/60 pb-3">
                   Population :- 
                  <span className="text-white text-md pl-1">
                  {country.population.toLocaleString()}
                  </span>
                </p>
                <p className="text-white/60 pb-3">
                   Region :-
                  <span className="text-white text-md pl-1">
                  {country.region}
                  </span>
                </p>
                <p className="text-white/60 pb-3">
                   Sub Region :-
                  <span className="text-white text-md pl-1">
                  {country.subregion}
                  </span>
                </p>
                <p className="text-white/60 pb-3">
                   Capital :-
                  <span className="text-white text-md pl-1">
                  {country.capital}
                  </span>
                </p>

                <p className="text-white/60 pb-3 ">
                  Top Level Domain :-
                  <span className="text-white text-md pl-1">
                  {country.tld[0]}
                  </span>
                </p>
                <p className="text-white/60 pb-3 ">
                  Currencies :-
                  <span className="text-white text-md pl-1">
                  {Object.keys(country.currencies)
                    .map((curElem) => country.currencies[curElem].name)
                    .join(", ")}
                  </span>
                </p>
                <p className="text-white/60 pb-3">
                  Languages :- 
                  <span className="text-white text-md pl-1">
                  {Object.keys(country.languages)
                    .map((key) => country.languages[key])
                    .join(", ")}
                  </span>
                </p>
              </div>
              
              <div className="flex justify-end pr-8">
                  <NavLink to="/country" className="backBtn">
                    <button className="flex items-center cursor-pointer gap-2 mt-2 py-1 rounded-xl border border-white px-4 bg-gray-900 hover:border-gray-400 md:text-lg">Go Back</button>
                  </NavLink>
              </div>

            </div>
          </div>
        )}
      </div>
  );
};

export default CountryDetails;