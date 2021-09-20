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
    <ApiResponseHandler data={data} error={error} data-testid="filtered-country-list">
      <Spinner className={className} />
    </ApiResponseHandler>
  );
};

export default FilteredCountryList;
