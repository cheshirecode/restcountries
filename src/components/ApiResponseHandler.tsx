/** @jsx jsx */
import type { FC } from 'react';
import { jsx, Alert, Spinner } from 'theme-ui';
import type { ComponentWithAPIResponseProps } from '../typings';

export const API_ERROR_TEXT = 'API error';

const ApiResponseHandler: FC<ComponentWithAPIResponseProps> = ({ error, data, children }) => {
  if (error) {
    // eslint-disable-next-line no-console
    // console.error(error);
    return <Alert role="alert">{API_ERROR_TEXT}</Alert>;
  }
  if (!data) return <Spinner data-testid="apiresponsehandler-spinner" />;
  // eslint-disable-next-line no-console
  // console.log('data', data);
  return children as React.ReactElement;
};

export default ApiResponseHandler;
