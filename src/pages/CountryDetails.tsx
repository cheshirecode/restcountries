/** @jsx jsx */
import type { FC } from 'react';
import { jsx, Container, Box, Button, Flex, AspectImage, Heading, Text } from 'theme-ui';
import ApiResponseHandler from '../components/ApiResponseHandler';
import useCountryDetailsFetch from '../hooks/useCountryDetailsFetch';
import { cx } from '@emotion/css';

import type { BaseComponent } from '../typings';
import type { Country } from '../typings/country';

const CountryDetails: FC<BaseComponent & { params: Record<string, string> }> = ({ className, params }) => {
  const [data, error] = useCountryDetailsFetch({
    fullName: params.fullName,
    fields: [
      'name',
      'nativeName',
      'population',
      'continent',
      'subregion',
      'capital',
      'topLevelDomain',
      'currencies',
      'languages',
      'borders',
      'flag',
      'flags',
    ],
  });
  const {
    name,
    nativeName,
    population,
    continent,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
    flag,
    flags,
  } = (data ? data[0] : {}) as Country;

  const goBack = () => window.history.back();
  return (
    <ApiResponseHandler data={data} error={error}>
      {data ? (
        <Container className={cx(className, 'country-details')}>
          <Box>
            <Button px={4} onClick={goBack}>
              <span
                sx={{
                  display: 'inline-block',
                  transform: 'scaleX(2.5)',
                  mr: '1em',
                  fontSize: '0.875em',
                }}
              >
                ←
              </span>
              Back
            </Button>
          </Box>
          <Flex
            sx={{
              // flexDirection: 'column',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              pt: 4,
            }}
          >
            <Box
              sx={{
                width: ['full', '1/2'],
                py: [5, 4],
                pr: [5, 4],
              }}
            >
              <AspectImage className="list-country--image" ratio={3 / 2} src={flag || flags[0]} />
            </Box>
            <Box
              px={4}
              py={4}
              sx={{
                width: ['full', '1/2'],
              }}
            >
              <Heading as="h2" my={4}>
                {name}
              </Heading>
              <Text variant="value">
                <Text variant="name">Native Name</Text>
                {nativeName}
              </Text>
              <Text variant="value">
                <Text variant="name">Population</Text>
                {population.toLocaleString('en-SG')}
              </Text>
              <Text variant="value">
                <Text variant="name">Region</Text>
                {continent}
              </Text>
              <Text variant="value">
                <Text variant="name">Sub Region</Text>
                {subregion}
              </Text>
              <Text variant="value">
                <Text variant="name">Capital</Text>
                {capital}
              </Text>
              <Text variant="value">
                <Text variant="name">Top Level Domain</Text>
                {topLevelDomain}
              </Text>
              <Text variant="value">
                <Text variant="name">currencies</Text>
                {currencies.map((x) => x.name).join(', ')}
              </Text>
              <Text variant="value">
                <Text variant="name">Languages</Text>
                {languages.map((x) => x.name).join(', ')}
              </Text>
              <Text variant="value">
                <Text variant="name">Borders</Text>
                {borders.join(', ')}
              </Text>
            </Box>
          </Flex>
        </Container>
      ) : null}
    </ApiResponseHandler>
  );
};

export default CountryDetails;
