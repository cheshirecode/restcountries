// broke as of 2021-09-22
// const consts = {
//   API_BASE_URL: 'https://restcountries.eu',
//   API_ENDPOINTS: {
//     GET_ALL_COUNTRIES: 'https://restcountries.eu/rest/v2/all',
//     GET_COUNTRIES_BY_REGION: '/rest/v2/region',
//     GET_COUNTRIES_BY_NAME: '/rest/v2/name',
//   },
//   COMMON_COUNTRY_FIELDS: ['flag', 'name', 'population', 'region', 'capital'],
//   FIELDS_SEPARATOR: ';',
// };

// using https://restcountries.com instead
const consts = {
  API_BASE_URL: 'https://restcountries.com',
  API_ENDPOINTS: {
    GET_ALL_COUNTRIES: '/v2/all',
    GET_COUNTRIES_BY_REGION: '/v2/region',
    GET_COUNTRIES_BY_NAME: '/v2/name',
    GET_COUNTRIES_DETAILS: '/v2/name',
    GET_COUNTRIES_BY_CODES: '/v2/alpha',
  },
  COMMON_COUNTRY_FIELDS: ['flag', 'name', 'population', 'region', 'capital', 'flags', 'continent'],
  DETAILED_COUNTRY_FIELDS: [
    'name',
    'nativeName',
    'population',
    'region',
    'continent',
    'subregion',
    'capital',
    'topLevelDomain',
    'currencies',
    'languages',
    'borders',
    'flag',
    'flags',
  ],
  FIELDS_SEPARATOR: ',',
};

export default consts;
