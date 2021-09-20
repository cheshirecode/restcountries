/** @jsx jsx */
import type { FC } from 'react';
import { jsx, Container, Input, Flex } from 'theme-ui';
import CountryList from './CountryList';
import RegionList from './RegionDropdown';
import { cx } from '@emotion/css';
import styled from '@emotion/styled';
import type { BaseComponent } from '../typings';

const Main: FC<BaseComponent> = ({ className }) => {
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

        <RegionList
          sx={{
            minWidth: 32,
            width: ['full', '48'],
            mb: 4,
          }}
        />
      </Flex>
      <CountryList />
    </Container>
  );
};

const StyledMain = styled(Main)(() => ({}));

export default StyledMain;
