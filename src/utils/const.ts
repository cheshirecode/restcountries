const consts = {
  API_BASE_URL: 'https://restcountries.eu',
  API_ENDPOINTS: {
    GET_ALL_COUNTRIES: 'https://restcountries.eu/rest/v2/all',
    GET_COUNTRIES_BY_REGION: '/rest/v2/region',
    GET_COUNTRIES_BY_NAME: '/rest/v2/name',
  },
  COMMON_COUNTRY_FIELDS: ['flag', 'name', 'population', 'region', 'capital'],
};

export default consts;
