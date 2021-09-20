/** @jsx jsx */
import type { FC } from 'react';
import { jsx, Spinner } from 'theme-ui';
import useCountriesByRegionFetch from '../hooks/useCountriesByRegionFetch';
import ApiResponseHandler from './ApiResponseHandler';

const FilteredCountryList: FC<{ className?: string; region: string }> = ({ className, region }) => {
  const [data, error] = useCountriesByRegionFetch({
    region,
  });
  return (
    <ApiResponseHandler data={data} error={error}>
      <Spinner className={className} data-testid="filtered-country-list" />
    </ApiResponseHandler>
  );
};

export default FilteredCountryList;
