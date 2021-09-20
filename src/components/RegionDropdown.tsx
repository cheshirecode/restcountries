/** @jsx jsx */
import { useMemo } from 'react';
import type { FC } from 'react';
import { jsx, Select, Alert } from 'theme-ui';
import useCountryListFetch from '../hooks/useCountryListFetch';
import ApiResponseHandler from './ApiResponseHandler';

const RegionDropdown: FC<{ className?: string }> = ({ className }) => {
  const [data, error] = useCountryListFetch({
    fields: ['region'],
  });
  // take all regions from country list and turn them into a list
  const regions = useMemo(() => [...new Set(data?.map((d) => d.region).filter((x) => x))], [data]);
  regions.sort();
  const regionOptions: { id: string; displayName: string }[] = regions.map((x) => ({
    id: x,
    displayName: x,
  }));
  return (
    <ApiResponseHandler data={data} error={error} data-testid="country-list">
      {
        // show nothing if the list is empty
        regionOptions.length ? (
          <Select defaultValue={regionOptions[0]?.displayName} className={className}>
            {regionOptions.map(({ id, displayName }) => (
              <option key={id}>{displayName}</option>
            ))}
          </Select>
        ) : (
          <Alert role="alert">No regions</Alert>
        )
      }
    </ApiResponseHandler>
  );
};

export default RegionDropdown;
