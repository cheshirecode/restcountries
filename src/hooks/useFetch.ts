import useSWR from 'swr';
import fetch from 'unfetch';
import type { ErrorHttp } from '../typings';

const fetcher = (url: string) =>
  fetch(url)
    .then((response) => {
      // 200 response
      if (response.ok) {
        return response;
      }
      // non-2xx HTTP responses into errors
      const error: ErrorHttp = new Error(response.statusText);
      error.response = response;
      return Promise.reject(error);
    })
    .then((response) => response.json());

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useFetch = <T>(url: string) => useSWR<T, Promise<ErrorHttp>>(url, fetcher);

export default useFetch;
