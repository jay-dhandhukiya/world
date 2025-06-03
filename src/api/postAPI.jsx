import axios from "axios";

export const postAPI = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

//get all countries
export const getAllCountries = async () => {
  const response = await postAPI.get("/all?fields=name,capital,population,region,flags");
  return response.data;
};

//get country by name
export const getCountryByName = (name) => {
  return postAPI.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
);
};