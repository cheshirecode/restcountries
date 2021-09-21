/** @jsx jsx */
import useFetch from '../hooks/useFetch';
import endpoints from '../utils/endpoints';
import type { Country, ErrorHttp, FetchResponse } from '../typings';
import consts from '../utils/const';

export interface CountryListFetchParams {
  fields?: string[];
}
/** fetches all countries with minimal fields based on what country list design is, can override from outside  */
const useCountryListFetch: (params?: CountryListFetchParams) => FetchResponse<Country[], ErrorHttp> = (params) => {
  const { data, error } = useFetch<Country[]>(
    endpoints.getAllCountries(params?.fields ?? consts.COMMON_COUNTRY_FIELDS),
  );
  data?.sort((a, b) => a.name?.localeCompare(b.name));
  return [data, error];
};

export default useCountryListFetch;
