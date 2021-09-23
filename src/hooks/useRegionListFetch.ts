/** @jsx jsx */
import useFetch from '../hooks/useFetch';
import endpoints from '../utils/endpoints';
import type { Country, ErrorHttp, FetchResponse } from '../typings';
import regions from '../data/regions.json';

export interface CountryListFetchParams {
  fields?: string[];
}
/** fetches all countries with minimal fields based on what country list design is, can override from outside  */
const useRegionListFetch: (params?: CountryListFetchParams) => FetchResponse<Country[], ErrorHttp> = (params) => {
  let { data, error } = useFetch<Country[]>(endpoints.getAllCountries(['continent']));

  // TODO - workaround for broken API
  if (!data) {
    data = regions as Country[];
    error = undefined;
  }
  data?.sort((a, b) => a.name?.localeCompare(b.name));
  return [data, error];
};

export default useRegionListFetch;
