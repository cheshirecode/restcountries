/** @jsx jsx */
import useFetch from '../hooks/useFetch';
import endpoints from '../utils/endpoints';
import type { Country, ErrorHttp, FetchResponse } from '../typings';
import consts from '../utils/const';
import countries from '../data/countries.json';
export interface CountriesByNameFetchParams {
  fields?: string[];
  name: string;
}

const useCountriesByNameFetch: (params: CountriesByNameFetchParams) => FetchResponse<Country[], ErrorHttp> = (
  params,
) => {
  let { data, error } = useFetch<Country[]>(
    endpoints.getCountriesByName(params.name, params?.fields ?? consts.COMMON_COUNTRY_FIELDS),
  );
  // TODO - workaround for broken API
  if (!data) {
    data = (countries as Country[]).filter((x) =>
      x.name?.toLocaleLowerCase().includes(params?.name.toLocaleLowerCase()),
    );
    error = undefined;
  }

  return [data, error];
};

export default useCountriesByNameFetch;
