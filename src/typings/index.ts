// import type { Theme } from 'theme-ui';

export * from './country';
export interface BaseComponent {
  // theme?: Theme;
  className?: string;
  ['data-testid']?: string;
}
// doesn't need typings yet for generics to be passed in, would be overkill to require for now
export interface ComponentWithAPIResponseProps extends BaseComponent {
  error: FetchResponse<unknown, ErrorHttp>[1];
  data: unknown;
}

export interface ErrorHttp extends Error {
  response?: unknown;
}

export type FetchResponse<R, E> = [R | undefined, Promise<E> | undefined];
