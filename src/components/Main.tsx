/** @jsx jsx */
import type { FC } from 'react';
import { useState } from 'react';
import { jsx, Container, Input, Flex } from 'theme-ui';
import FilteredCountryList from './FilteredCountryList';
import FullCountryList from './FullCountryList';
import RegionDropdown from './RegionDropdown';
import { cx } from '@emotion/css';
import styled from '@emotion/styled';
import type { BaseComponent } from '../typings';

const Main: FC<BaseComponent> = ({ className }) => {
  const [region, setRegion] = useState<string>('');
  return (
    <Container className={cx(className, 'main')}>
      <Flex
        sx={{
          // flexDirection: 'column',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          pt: 4,
          mb: [5, 4],
        }}
      >
        <Input
          sx={{
            width: ['full', 'xs'],
          }}
        />

        <RegionDropdown
          sx={{
            // override base values by writing the CSS later (order of apperance)
            minWidth: 32,
            width: ['full', '48'],
          }}
          region={region}
          onRegionChange={setRegion}
        />
      </Flex>
      {region ? <FilteredCountryList region={region} /> : <FullCountryList />}
    </Container>
  );
};

const StyledMain = styled(Main)(() => ({}));

export default StyledMain;
