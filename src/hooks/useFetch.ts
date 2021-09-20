import useSWR from 'swr';
import fetch from 'unfetch';
import type { ErrorHttp } from '../typings';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const fetcher = (url: string) =>
  fetch(url)
    .then((response) => {
      // 200 response
      /* c8 ignore next 10 */
      if (response.ok) {
        return response;
      }
      // very hard to test error handling
      const error: ErrorHttp = new Error(response.statusText); // non-2xx HTTP responses into errors
      error.response = response;
      return Promise.reject(error);
    })
    .then((response) => response.json());

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useFetch = <T>(url: string) => useSWR<T, Promise<ErrorHttp>>(url, fetcher);

export default useFetch;
