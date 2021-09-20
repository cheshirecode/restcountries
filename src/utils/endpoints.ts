import consts from './const';
import { getURI } from './';

const getAllCountries: (fields?: string[]) => string = (fields = []) => {
  return getURI(consts.API_ENDPOINTS.GET_ALL_COUNTRIES, fields);
};

const getCountriesByRegion: (region: string, fields?: string[]) => string = (region, fields = []) => {
  return getURI(`${consts.API_ENDPOINTS.GET_COUNTRIES_BY_REGION}/${region}`, fields);
};

const endpoints = {
  getAllCountries,
  getCountriesByRegion,
};

export default endpoints;
