/** @jsx jsx */
import type { FC } from 'react';
import { jsx, Container, Input, Select, Flex } from 'theme-ui';
import CountryList from './CountryList';
import { cx } from '@emotion/css';
import styled from '@emotion/styled';

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
      <CountryList />
    </Container>
  );
};

const StyledMain = styled(Main)(() => ({}));

export default StyledMain;
