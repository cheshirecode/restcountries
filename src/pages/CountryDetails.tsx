/** @jsx jsx */
import type { FC } from 'react';
import { jsx, Container } from 'theme-ui';
import ApiResponseHandler from '../components/ApiResponseHandler';
import useCountryDetailsFetch from '../hooks/useCountryDetailsFetch';
import { cx } from '@emotion/css';
import styled from '@emotion/styled';
import type { BaseComponent } from '../typings';

const CountryDetails: FC<BaseComponent & { params: Record<string, string> }> = ({ className, params }) => {
  const [data, error] = useCountryDetailsFetch({
    fullName: params.fullName,
    fields: ['region'],
  });

  return (
    <ApiResponseHandler data={data} error={error}>
      <Container className={cx(className, 'country-details')}></Container>
    </ApiResponseHandler>
  );
};

const StyledMain = styled(CountryDetails)(() => ({}));

export default StyledMain;
