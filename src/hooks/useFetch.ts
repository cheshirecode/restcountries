import useSWR from 'swr';
import fetch from 'unfetch';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useFetch = (url: string) => useSWR(url, fetcher);

export default useFetch;
