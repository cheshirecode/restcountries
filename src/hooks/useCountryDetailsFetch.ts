/** @jsx jsx */
import useFetch from '../hooks/useFetch';
import endpoints from '../utils/endpoints';
import type { Country, ErrorHttp, FetchResponse } from '../typings';
import consts from '../utils/const';
import countriesWithDetails from '../data/countriesWithDetails.json';

export interface CountryDetailsFetchParams {
  fullName: string;
  fields?: string[];
}
/** fetches all countries with minimal fields based on what country list design is, can override from outside  */
const useCountryDetailsFetch: (params?: CountryDetailsFetchParams) => FetchResponse<Country[], ErrorHttp> = (
  params,
) => {
  let { data, error } = useFetch<Country[]>(
    params?.fullName
      ? endpoints.getCountryDetails(params?.fullName, params?.fields ?? consts.COMMON_COUNTRY_FIELDS)
      : null,
  );
  // TODO - workaround for broken API
  if (!data && params?.fullName) {
    data = (countriesWithDetails as Country[]).filter((x) => x.name === params?.fullName);
    error = undefined;
  }
  return [data, error];
};

export default useCountryDetailsFetch;
