/** @jsx jsx */
import type { FC, ChangeEvent } from 'react';
import { useState, useMemo } from 'react';
import { jsx, Container, Flex } from 'theme-ui';
import FilteredCountryList from '../components/FilteredCountryList';
import FullCountryList from '../components/FullCountryList';
import RegionDropdown from '../components/RegionDropdown';
import { cx } from '@emotion/css';
import type { BaseComponent } from '../typings';
import { throttle } from 'lodash-es';

const Main: FC<BaseComponent> = ({ className }) => {
  const [region, setRegion] = useState<string>('');
  const [countryName, setCountrySearchStr] = useState<string>('');
  const throttledOnChange = useMemo(
    () =>
      throttle(
        (e: ChangeEvent<HTMLInputElement>) => {
          setCountrySearchStr(e.target.value);
        },
        300,
        {
          leading: true,
          trailing: true,
        },
      ),
    [setCountrySearchStr],
  );
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
        <Flex
          sx={{
            // minWidth: [null, null, '27em'],
            width: ['full', 'full', 'auto'],
          }}
        >
          <i
            sx={{
              transform: 'rotate(-45deg)',
              fontSize: '1.5em',
              position: 'absolute',
              ml: '3ch',
              mt: '.125em',
              color: 'text',
            }}
          >
            &#9906;
          </i>
          <input
            sx={{
              width: 'full',
              height: '2.5rem',
              pl: '8ch',
              color: 'text',
              backgroundColor: 'muted',
              border: 'none',
              boxShadow: 'none',
              WebkitAppearance: 'none',
            }}
            placeholder="Search for a country..."
            onChange={throttledOnChange}
          />
        </Flex>

        <RegionDropdown
          sx={{
            // override base values by writing the CSS later (order of apperance)
            minWidth: 32,
            width: ['full', 'full', '48'],
            mt: [5, 5, 0],
            height: '2.5rem',
          }}
          region={region}
          onRegionChange={setRegion}
        />
      </Flex>
      {countryName || region ? <FilteredCountryList region={region} countryName={countryName} /> : <FullCountryList />}
    </Container>
  );
};

export default Main;
