/** @jsx jsx */
import type { FC } from 'react';
import { useState } from 'react';
import { jsx, Container, Box, Flex } from 'theme-ui';
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
        <Flex>
          <i
            sx={{
              transform: 'rotate(-45deg)',
              fontSize: '1.5em',
              position: 'absolute',
              ml: 3,
              color: 'muted',
            }}
          >
            &#9906;
          </i>
          <input
            sx={{
              width: ['full', 'auto'],
              pl: '3rem',
              height: '2.5rem',
            }}
            placeholder="Search for a country..."
          />
        </Flex>

        <RegionDropdown
          sx={{
            // override base values by writing the CSS later (order of apperance)
            minWidth: 32,
            width: ['full', '48'],
            mt: [5, 0, 0],
            height: '2.5rem',
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
