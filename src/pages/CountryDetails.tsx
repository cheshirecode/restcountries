/** @jsx jsx */
import type { FC } from 'react';
import { jsx, Container, Box, Button } from 'theme-ui';
import ApiResponseHandler from '../components/ApiResponseHandler';
import useCountryDetailsFetch from '../hooks/useCountryDetailsFetch';
import { cx } from '@emotion/css';

import type { BaseComponent } from '../typings';

const CountryDetails: FC<BaseComponent & { params: Record<string, string> }> = ({ className, params }) => {
  const [data, error] = useCountryDetailsFetch({
    fullName: params.fullName,
    fields: ['region'],
  });

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
        </Container>
      ) : null}
    </ApiResponseHandler>
  );
};

export default CountryDetails;
