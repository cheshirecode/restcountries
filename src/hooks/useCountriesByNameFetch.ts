/** @jsx jsx */
import useFetch from '../hooks/useFetch';
import endpoints from '../utils/endpoints';
import type { Country, ErrorHttp, FetchResponse } from '../typings';
import consts from '../utils/const';
export interface CountriesByNameFetchParams {
  fields?: string[];
  name: string;
}

const useCountriesByNameFetch: (params: CountriesByNameFetchParams) => FetchResponse<Country[], ErrorHttp> = (
  params,
) => {
  const { data, error } = useFetch<Country[]>(
    endpoints.getCountriesByName(params.name, params?.fields ?? consts.COMMON_COUNTRY_FIELDS),
  );

  return [data, error];
};

export default useCountriesByNameFetch;
