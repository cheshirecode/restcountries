import consts from './const';

const getAllCountries: (fields?: string[]) => string = (fields = []) => {
  const url = new URL(consts.API_ENDPOINTS.GET_ALL_COUNTRIES);
  const params = url.searchParams;
  if (Array.isArray(fields) && fields.length) {
    params.append('fields', fields.join());
  }

  return url.toString();
};

const endpoints = {
  getAllCountries,
};

export default endpoints;
