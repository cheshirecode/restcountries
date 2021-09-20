/** @jsx jsx */
import { useMemo } from 'react';
import type { FC } from 'react';
import { jsx, Alert } from 'theme-ui';
import Select from 'react-select';
import type { CSSObject } from '@emotion/serialize';
import useCountryListFetch from '../hooks/useCountryListFetch';
import ApiResponseHandler from './ApiResponseHandler';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};
export interface RegionDropdownProps {
  className?: string;
  region?: string;
  onRegionChange?: (region: string) => void;
}

const RegionDropdown: FC<RegionDropdownProps> = ({ className, region, onRegionChange = noop }) => {
  const [data, error] = useCountryListFetch({
    fields: ['region'],
  });
  // take all regions from country list and turn them into a list
  const regions = useMemo(() => [...new Set(data?.map((d) => d.region).filter((x) => x))], [data]);
  regions.sort();
  const options: { id: string; value: string; label: string }[] = regions.map((x) => ({
    id: x,
    value: x,
    label: x,
  }));
  const classNamePrefix = 'react-select';
  return (
    <ApiResponseHandler data={data} error={error} data-testid="region-dropdown">
      {
        // show nothing if the list is empty
        options.length ? (
          <Select
            className={className}
            // escape hatch to apply style to children from outside through classNames with set prefixes https://react-select.com/styles#using-classnames
            classNamePrefix={classNamePrefix}
            placeholder="Filter by region"
            options={options}
            sx={{
              [`.${classNamePrefix}__indicator-separator`]: {
                visibility: 'hidden',
              },
              [`.${classNamePrefix}__control`]: {
                color: 'text',
                backgroundColor: 'muted',
                border: 'none',
              },
              [`.${classNamePrefix}__menu`]: {
                color: 'text',
                backgroundColor: 'muted',
                mt: 0,
              },
            }}
            // due to CSS specificity, the inner option styling needs to be reset
            styles={{
              singleValue: (base: CSSObject) => ({
                ...base,
                color: 'inherit',
                backgroundColor: 'inherit',
              }),
              option: (base: CSSObject, state) => ({
                ...base,
                ...(state.isFocused || state.isSelected
                  ? { color: 'background' }
                  : { backgroundColor: 'inherit', color: 'inherit' }),
              }),
            }}
            onChange={(option, action) => {
              if (action?.action === 'select-option') {
                onRegionChange(option?.id ?? '');
              }
            }}
          />
        ) : (
          <Alert role="alert">No regions</Alert>
        )
      }
    </ApiResponseHandler>
  );
};

export default RegionDropdown;
