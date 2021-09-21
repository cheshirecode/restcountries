/** @jsx jsx */
import type { FC } from 'react';
import { jsx } from 'theme-ui';
import CountryList from './CountryList';
import useCountriesByRegionFetch from '../hooks/useCountriesByRegionFetch';
import useCountriesByNameFetch from '../hooks/useCountriesByNameFetch';
import ApiResponseHandler from './ApiResponseHandler';
import { intersectionBy } from 'lodash-es';

const FilteredCountryList: FC<{ className?: string; region: string; countryName: string }> = ({
  region,
  countryName: name,
  ...props
}) => {
  let [data, error] = useCountriesByRegionFetch({
    region,
  });
  const [byNameData, byNameError] = useCountriesByNameFetch({
    name,
  });

  if (Array.isArray(data)) {
    // find the common countries of the 2 groups if both are lists
    if (Array.isArray(byNameData)) {
      data = intersectionBy(data, byNameData, (a) => a.name);
    }
  } else {
    data = byNameData;
    error = byNameError;
  }
  return (
    <ApiResponseHandler data={data} error={error}>
      <CountryList {...props} data={data} data-testid="filtered-country-list" />
    </ApiResponseHandler>
  );
};

export default FilteredCountryList;
