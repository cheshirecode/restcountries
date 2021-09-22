/** @jsx jsx */
import useFetch from '../hooks/useFetch';
import endpoints from '../utils/endpoints';
import type { Country, ErrorHttp, FetchResponse } from '../typings';
import consts from '../utils/const';
import countries from '../data/countries.json';
export interface CountriesByRegionFetchParams {
  fields?: string[];
  region: string;
}

const useCountriesByRegionFetch: (params: CountriesByRegionFetchParams) => FetchResponse<Country[], ErrorHttp> = (
  params,
) => {
  let { data, error } = useFetch<Country[]>(
    params?.region
      ? endpoints.getCountriesByRegion(params.region, params?.fields ?? consts.COMMON_COUNTRY_FIELDS)
      : null,
  );
  // TODO - workaround for broken API
  if (!data && params?.region) {
    data = (countries as Country[]).filter((x) => x.continent === params?.region);
    data = data.length ? data : undefined;
    error = undefined;
  }

  return [data, error];
};

export default useCountriesByRegionFetch;
