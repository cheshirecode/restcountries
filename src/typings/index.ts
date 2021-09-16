import type { Theme } from 'theme-ui';

export interface BaseComponent {
  theme?: Theme;
  className?: string;
  ['data-testid']?: string;
}
