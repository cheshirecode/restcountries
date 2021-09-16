const common = {
  fonts: {
    body: '"Nunito Sans", sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  // using typographic scale, set a root-level font size and specific length in CSS units (relative - em or absolute - rem)
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  // default breakpoints in CSS units
  breakpoints: ['40em', '56em', '64em'],
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
    default: {
      color: 'text',
      fontSize: [1, 2],
    },
    // caps: {
    //   textTransform: 'uppercase',
    //   letterSpacing: '0.2em',
    // },
  },
  // define convenient border style based on theme's text colour or fall back to black
  borders: {
    thick: '2px solid var(--theme-ui-colors-text, black)',
    thin: '1px solid var(--theme-ui-colors-text, black)',
  },
  config: {
    initialColorModeName: 'light',
    printColorModeName: 'light',
    useColorSchemeMediaQuery: true, // by default, follows prefers-color-scheme
    useLocalStorage: true,
  },
  colors: {
    text: '#000',
    background: '#fafafa',
    primary: '#07c',
    secondary: '#30c',
    highlight: '#b5d5ff',
    muted: '#fff',
    modes: {
      dark: {
        text: '#fff',
        background: '#222D37',
        primary: '#3cf',
        secondary: '#e0f',
        highlight: '#29112c',
        muted: '#2C3743',
      },
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
    },
  },
};

export default common;
