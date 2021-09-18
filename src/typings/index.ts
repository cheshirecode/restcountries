import type { Theme } from 'theme-ui';

export * from './country';
export interface BaseComponent {
  theme?: Theme;
  className?: string;
  ['data-testid']?: string;
}

export interface ErrorHttp extends Error {
  response?: unknown;
}

export type FetchResponse<R, E> = [R | undefined, Promise<E> | undefined];
