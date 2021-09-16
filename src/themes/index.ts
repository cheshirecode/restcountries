const common = {
  fonts: {
    body: '"Nunito Sans", sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  // using typographic scale, set a root-level font size and specific length in CSS units (relative - em or absolute - rem)
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  // default breakpoints in CSS units
  breakpoints: ['40em', '52em', '64em'],
  // base scale for use with layout-related CSS properties like margin, padding, etc
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontWeights: {
    body: 300,
    heading: 600,
    display: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    display: {
      variant: 'text.heading',
      fontSize: [5, 6],
      fontWeight: 'display',
      letterSpacing: '-0.03em',
      mt: 3,
    },
  },
};

export interface Theme {
  colors: {
    text: string;
    background: string;
    primary: string;
    secondary: string;
    muted: string;
    highlight: string;
  };
  fonts: {
    body: string;
    heading: string;
    monospace: string;
  };
  fontSizes: number[];
  space: number[];
  fontWeights: {
    body: number;
    heading: number;
    display: number;
  };
  breakpoints: string[];
  [key: string]: Record<string, unknown> | number[] | string[];
}

const light: Theme = {
  ...common,
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#11e',
    secondary: '#c0c',
    highlight: '#e0e',
    muted: '#f6f6ff',
  },
};

const dark: Theme = {
  ...common,
  colors: {
    text: '#fff',
    background: '#000',
    primary: '#0fc',
    secondary: '#0cf',
    highlight: '#f0c',
    muted: '#011',
  },
};

const themes = { light, dark };

export default themes;
