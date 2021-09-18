/** @jsx jsx */
import type { FC } from 'react';
import { jsx, Alert, Spinner } from 'theme-ui';
import useCountryListFetch from '../hooks/useCountryListFetch';

const CountryList: FC<{ className?: string }> = ({ className }) => {
  const [data, error] = useCountryListFetch();
  if (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return <Alert role="alert">API error</Alert>;
  }
  if (!data) return <Spinner />;
  // eslint-disable-next-line no-console
  console.log('data', data);
  return <Spinner className={className} />;
};

export default CountryList;
