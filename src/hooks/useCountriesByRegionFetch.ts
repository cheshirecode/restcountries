/** @jsx jsx */
import useFetch from '../hooks/useFetch';
import endpoints from '../utils/endpoints';
import type { Country, ErrorHttp, FetchResponse } from '../typings';
import consts from '../utils/const';
export interface CountriesByRegionFetchParams {
  fields?: string[];
  region: string;
}

const useCountriesByRegionFetch: (params: CountriesByRegionFetchParams) => FetchResponse<Country[], ErrorHttp> = (
  params,
) => {
  const { data, error } = useFetch<Country[]>(
    params?.region
      ? endpoints.getCountriesByRegion(params.region, params?.fields ?? consts.COMMON_COUNTRY_FIELDS)
      : null,
  );

  return [data, error];
};

export default useCountriesByRegionFetch;
