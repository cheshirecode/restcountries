/** @jsx jsx */
import type { FC } from 'react';
import { jsx } from 'theme-ui';
import CountryList from './CountryList';
import useCountryListFetch from '../hooks/useCountryListFetch';
import ApiResponseHandler from './ApiResponseHandler';

const FullCountryList: FC<{ className?: string }> = ({ className }) => {
  const [data, error] = useCountryListFetch();
  return (
    <ApiResponseHandler data={data} error={error}>
      <CountryList data={data} data-testid="full-country-list" />
    </ApiResponseHandler>
  );
};

export default FullCountryList;
