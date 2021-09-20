/** @jsx jsx */
import { useMemo } from 'react';
import type { FC } from 'react';
import { jsx, Alert } from 'theme-ui';
import Select from 'react-select';
import type { CSSObject } from '@emotion/serialize';
import useCountryListFetch from '../hooks/useCountryListFetch';
import ApiResponseHandler from './ApiResponseHandler';

const RegionDropdown: FC<{ className?: string }> = ({ className }) => {
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
    <ApiResponseHandler data={data} error={error} data-testid="country-list">
      {
        // show nothing if the list is empty
        options.length ? (
          <Select
            className={className}
            defaultValue={options[0]}
            options={options}
            // escape hatch to apply style to children from outside through classNames with set prefixes https://react-select.com/styles#using-classnames
            classNamePrefix={classNamePrefix}
            sx={{
              [`.${classNamePrefix}__indicator-separator`]: {
                visibility: 'hidden',
              },
              [`.${classNamePrefix}__control`]: {
                color: 'text',
              },
              [`.${classNamePrefix}__menu`]: {
                color: 'background',
              },
            }}
            // due to CSS specificity, the inner option styling needs to be reset
            styles={{
              option: (base: CSSObject) => ({
                ...base,
                color: 'inherit',
              }),
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
