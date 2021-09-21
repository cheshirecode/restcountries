/** @jsx jsx */
import type { FC } from 'react';
import { jsx } from 'theme-ui';
import CountryList from './CountryList';
import useCountriesByRegionFetch from '../hooks/useCountriesByRegionFetch';
import ApiResponseHandler from './ApiResponseHandler';

const FilteredCountryList: FC<{ className?: string; region: string }> = ({ className, region }) => {
  const [data, error] = useCountriesByRegionFetch({
    region,
  });
  return (
    <ApiResponseHandler data={data} error={error}>
      <CountryList data={data} data-testid="filtered-country-list" />
    </ApiResponseHandler>
  );
};

export default FilteredCountryList;
