/** @jsx jsx */
import useFetch from '../hooks/useFetch';
import consts from '../utils/const';
import type { Country, ErrorHttp } from '../typings';

const useCountryListFetch: () => [Country[] | undefined, Promise<ErrorHttp> | undefined] = () => {
  const { data, error } = useFetch<Country[]>(consts.API_ENDPOINTS.GET_ALL_COUNTRIES);

  return [data, error];
};

export default useCountryListFetch;
