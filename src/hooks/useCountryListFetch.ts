/** @jsx jsx */
import useFetch from '../hooks/useFetch';
import endpoints from '../utils/endpoints';
import type { Country, ErrorHttp, FetchResponse } from '../typings';

export interface CountryListFetchParams {
  fields?: string[];
}

const useCountryListFetch: (params?: CountryListFetchParams) => FetchResponse<Country[], ErrorHttp> = (params = {}) => {
  const { data, error } = useFetch<Country[]>(endpoints.getAllCountries(params?.fields));

  return [data, error];
};

export default useCountryListFetch;