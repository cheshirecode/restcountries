/** @jsx jsx */
import useFetch from '../hooks/useFetch';
import endpoints from '../utils/endpoints';
import type { Country, ErrorHttp, FetchResponse } from '../typings';

export interface CountryListFetchParams {
  fields?: string[];
}
/** fetches all countries with minimal fields based on what country list design is, can override from outside  */
const useCountryListFetch: (params?: CountryListFetchParams) => FetchResponse<Country[], ErrorHttp> = (
  params = { fields: ['flag', 'name', 'population', 'region', 'capital'] },
) => {
  const { data, error } = useFetch<Country[]>(endpoints.getAllCountries(params?.fields));
  data?.sort((a, b) => a.name?.localeCompare(b.name));
  return [data, error];
};

export default useCountryListFetch;
