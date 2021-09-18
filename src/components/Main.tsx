/** @jsx jsx */
import type { FC } from 'react';
import { jsx, Container, Alert, Spinner, Input, Select, Flex } from 'theme-ui';
import useCountryListFetch from '../hooks/useCountryListFetch';
import { cx } from '@emotion/css';
import styled from '@emotion/styled';

const CountriesList: FC<{ className?: string }> = ({ className }) => {
  const [data, error] = useCountryListFetch();
  if (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return <Alert role="alert">API error</Alert>;
  }
  if (!data) return <Spinner />;
  // eslint-disable-next-line no-console
  console.log('data', data);
  return <Spinner />;
};

const Main: FC<{ className?: string }> = ({ className }) => {
  return (
    <Container className={cx(className, 'main')}>
      <Flex
        sx={{
          // flexDirection: 'column',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          pt: 4,
        }}
      >
        <Input
          sx={{
            width: ['full', 'xs'],
            mb: [5, 4],
          }}
        />

        <Select
          sx={{
            minWidth: 32,
            width: ['full', '48'],
            mb: 4,
          }}
          defaultValue="Hello"
        >
          <option>Hello</option>
          <option>Hi</option>
          <option>Beep</option>
          <option>Boop</option>
        </Select>
      </Flex>
      <CountriesList />
    </Container>
  );
};

const StyledMain = styled(Main)(() => ({}));

export default StyledMain;
