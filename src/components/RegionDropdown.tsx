/** @jsx jsx */
import { useMemo } from 'react';
import type { FC } from 'react';
import { jsx, Select } from 'theme-ui';
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
      <Select defaultValue={regionOptions[0].displayName} className={className}>
        {regionOptions.map(({ id, displayName }) => (
          <option key={id}>{displayName}</option>
        ))}
      </Select>
    </ApiResponseHandler>
  );
};

export default RegionDropdown;
