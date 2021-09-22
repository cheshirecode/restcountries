/** @jsx jsx */
import useFetch from '../hooks/useFetch';
import endpoints from '../utils/endpoints';
import type { Country, ErrorHttp, FetchResponse } from '../typings';
import consts from '../utils/const';
import countriesWithDetails from '../data/countriesWithDetails.json';
export interface CountriesByRegionFetchParams {
  fields?: string[];
  codes: string[];
}

const useCountriesByCodesFetch: (params: CountriesByRegionFetchParams) => FetchResponse<Country[], ErrorHttp> = (
  params,
) => {
  let { data, error } = useFetch<Country[]>(
    params?.codes ? endpoints.getCountryByCodes(params.codes, params?.fields ?? consts.COMMON_COUNTRY_FIELDS) : null,
  );
  // TODO - workaround for broken API
  if (!data && params?.codes) {
    data = (countriesWithDetails as Country[]).filter((x) => params?.codes.includes(x.alpha3Code));
    data = data.length ? data : undefined;
    error = undefined;
  }

  return [data, error];
};

export default useCountriesByCodesFetch;
