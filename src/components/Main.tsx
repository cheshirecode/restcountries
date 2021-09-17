/** @jsxImportSource theme-ui */
import React from 'react';
import type { FC } from 'react';
import { Container, Alert, Spinner, Input, Select } from 'theme-ui';
import useFetch from '../hooks/useFetch';
import consts from '../utils/const';
import { cx } from '@emotion/css';
import styled from '@emotion/styled';

const CountriesList: FC<{ className?: string }> = ({ className }) => {
  const { data, error } = useFetch(consts.API_ENDPOINTS.GET_ALL_COUNTRIES);
  if (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return <Alert role="alert">API error</Alert>;
  }
  if (!data) return <Spinner />;
  // eslint-disable-next-line no-console
  console.log(data);
  return <Spinner />;
};

const Main: FC<{ className?: string }> = ({ className }) => {
  return (
    <Container className={cx(className, 'main')}>
      <Input />
      <Select />
      <CountriesList />
    </Container>
  );
};

const StyledMain = styled(Main)(() => ({}));

export default StyledMain;
