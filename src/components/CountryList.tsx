/** @jsx jsx */
import type { FC } from 'react';
import { jsx, Grid, Card, AspectImage, Box, Heading, Text } from 'theme-ui';
import type { BaseComponent, Country } from '../typings';

const CountryList: FC<BaseComponent & { data: Country[] | undefined }> = ({ data, ...props }) => {
  return (
    <Grid gap={4} width={['100%', '15rem']} data-testid={props['data-testid'] ?? 'country-list'} as="ul">
      {data && data.length
        ? data.map(({ flag, name, population, region, capital }) => (
            <Card as="li" key={name}>
              <AspectImage ratio={3 / 2} src={flag} />
              <Box px={4} py={4}>
                <Heading as="h3" mb={4}>
                  {name}
                </Heading>
                <Text variant="value">
                  <Text variant="name">Population</Text>
                  {population.toLocaleString('en-SG')}
                </Text>
                <Text variant="value">
                  <Text variant="name">Region</Text>
                  {region}
                </Text>
                <Text variant="value">
                  <Text variant="name">Capital</Text>
                  {capital}
                </Text>
              </Box>
            </Card>
          ))
        : null}
    </Grid>
  );
};

export default CountryList;
