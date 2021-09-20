/** @jsx jsx */
import type { FC } from 'react';
import { jsx, Spinner } from 'theme-ui';
import useCountryListFetch from '../hooks/useCountryListFetch';
import ApiResponseHandler from './ApiResponseHandler';

const CountryList: FC<{ className?: string; region?: string }> = ({ className, region }) => {
  const [data, error] = useCountryListFetch();
  return (
    <ApiResponseHandler data={data} error={error} data-testid="country-list">
      <Spinner className={className} />
    </ApiResponseHandler>
  );
};

export default CountryList;
