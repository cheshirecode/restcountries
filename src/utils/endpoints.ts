import consts from './const';
import { getURI } from './';

const getAllCountries: (fields?: string[]) => string = (fields = []) => {
  return getURI(consts.API_ENDPOINTS.GET_ALL_COUNTRIES, fields);
};

const getCountriesByRegion: (region: string, fields?: string[]) => string = (region, fields = []) => {
  return getURI(`${consts.API_ENDPOINTS.GET_COUNTRIES_BY_REGION}/${region}`, fields);
};

const getCountriesByName: (name: string, fields?: string[]) => string = (name, fields = []) => {
  return getURI(`${consts.API_ENDPOINTS.GET_COUNTRIES_BY_NAME}/${name}`, fields);
};

const getCountryDetails: (name: string, fields?: string[]) => string = (fullName, fields = []) => {
  return getURI(`${consts.API_ENDPOINTS.GET_COUNTRIES_BY_NAME}/${fullName}?fullText=true`, fields);
};

const endpoints = {
  getAllCountries,
  getCountriesByRegion,
  getCountriesByName,
  getCountryDetails,
};

export default endpoints;
