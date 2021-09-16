import type { Theme } from '../themes';

export interface BaseComponent {
  theme?: Theme;
  className?: string;
  ['data-testid']?: string;
}
