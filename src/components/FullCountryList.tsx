/** @jsx jsx */
import type { FC } from 'react';
import { jsx, Spinner } from 'theme-ui';
import useCountryListFetch from '../hooks/useCountryListFetch';
import ApiResponseHandler from './ApiResponseHandler';

const FullCountryList: FC<{ className?: string }> = ({ className }) => {
  const [data, error] = useCountryListFetch();
  return (
    <ApiResponseHandler data={data} error={error} data-testid="full-country-list">
      <Spinner className={className} />
    </ApiResponseHandler>
  );
};

export default FullCountryList;
