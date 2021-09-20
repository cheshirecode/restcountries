/** @jsx jsx */
import useFetch from '../hooks/useFetch';
import endpoints from '../utils/endpoints';
import type { Country, ErrorHttp, FetchResponse } from '../typings';
export interface CountryByRegionFetchParams {
  fields?: string[];
  region: string;
}

const useCountriesByRegionFetch: (params: CountryByRegionFetchParams) => FetchResponse<Country[], ErrorHttp> = (
  params,
) => {
  const { data, error } = useFetch<Country[]>(endpoints.getCountriesByRegion(params.region));

  return [data, error];
};

export default useCountriesByRegionFetch;
