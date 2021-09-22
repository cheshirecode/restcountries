/** @jsx jsx */
import type { FC } from 'react';
import { jsx, Container, Box, Button, Flex, AspectImage, Heading, Text } from 'theme-ui';
import ApiResponseHandler from '../components/ApiResponseHandler';
import { Link } from 'wouter';
import useCountryDetailsFetch from '../hooks/useCountryDetailsFetch';
import useCountriesByCodesFetch from '../hooks/useCountriesByCodesFetch';
import { cx } from '@emotion/css';

import type { BaseComponent } from '../typings';
import type { Country } from '../typings/country';

const CountryDetails: FC<BaseComponent & { params: Record<string, string> }> = ({ className, params }) => {
  let [data, error] = useCountryDetailsFetch({
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
  const [byCodesData, byCodesError] = useCountriesByCodesFetch({
    codes: [params.alpha3],
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
  if (!data) {
    data = byCodesData;
    error = byCodesError;
  }

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
  } = (data ? data[0] ?? {} : {}) as Country;

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
                width: ['full', null, '1/2'],
                py: [5, 4],
                pr: [5, 4],
              }}
            >
              <AspectImage className="list-country--image" ratio={3 / 2} src={flag || flags[0]} />
            </Box>
            <Flex
              px={4}
              py={4}
              sx={{
                width: ['full', null, '1/2'],
                flexWrap: 'wrap',
              }}
            >
              <Heading as="h2" my={4} sx={{ width: '100%' }}>
                {name}
              </Heading>
              <Box
                sx={{
                  width: ['full', null, null, '1/2'],
                }}
              >
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
              </Box>
              <Box
                sx={{
                  width: ['full', null, null, '1/2'],
                  mt: [4, null, null, 0],
                }}
              >
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
              </Box>
              <Flex
                as="ul"
                sx={{
                  '> li': { listStyleType: 'none' },
                  pl: 0,
                  flexWrap: 'wrap',
                  gap: [2, 3],
                  mt: [4, 5],
                }}
              >
                <Text
                  variant="name"
                  as="li"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Borders
                </Text>
                {borders.map((x) => (
                  <li key={x}>
                    <Link href={`/country-details/alpha3/${x}`}>
                      <Button px={4}>{x}</Button>
                    </Link>
                  </li>
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Container>
      ) : null}
    </ApiResponseHandler>
  );
};

export default CountryDetails;
