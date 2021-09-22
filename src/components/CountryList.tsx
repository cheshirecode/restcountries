/** @jsx jsx */
import type { FC } from 'react';
import { jsx, Grid, Card, AspectImage, Box, Heading, Text, Message, Link } from 'theme-ui';
import { Link as RouterLink } from 'wouter';
import type { BaseComponent, Country } from '../typings';

const CountryList: FC<BaseComponent & { data: Country[] | undefined }> = ({ data, ...props }) => {
  return (
    <Grid gap={4} width={['100%', '15rem']} data-testid={props['data-testid'] ?? 'country-list'} as="ul" pl={0}>
      {data && data.length ? (
        data.map(({ flag, name, population, capital, flags, continent }) => (
          <Card as="li" key={name}>
            <RouterLink href={`/country-details/full-name/${name}`}>
              <Link>
                <AspectImage
                  className="list-country--image"
                  ratio={3 / 2}
                  src={flag || flags[0]}
                  role="link"
                  aria-label={name}
                />
              </Link>
            </RouterLink>
            <Box px={4} py={4}>
              <Heading as="h2" mb={4}>
                {name}
              </Heading>
              <Text variant="value">
                <Text variant="name">Population</Text>
                {population.toLocaleString('en-SG')}
              </Text>
              <Text variant="value">
                <Text variant="name">Region</Text>
                {continent}
              </Text>
              <Text variant="value">
                <Text variant="name">Capital</Text>
                {capital}
              </Text>
            </Box>
          </Card>
        ))
      ) : (
        <Card as="li" variant="full">
          <Message>No countries found...</Message>
        </Card>
      )}
    </Grid>
  );
};

export default CountryList;
