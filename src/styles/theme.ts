const commonRootLayoutPaddings = {
  px: [3, 4],
  py: [4, 3],
};
const common = {
  fonts: {
    body: '"Nunito Sans", sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  // using typographic scale, set a root-level font size and specific length in CSS units (relative - em or absolute - rem)
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  // default breakpoints in CSS units 375px 896px 1440px
  breakpoints: ['23.4375em', '56em', '90em'],
  // base scale for use with layout-related CSS properties like margin, padding, grid-gap etc
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  // base scale for use with width, height, min-width, max-width, min-height, max-height. values from from tailwind
  sizes: {
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
    '40': '10rem',
    '48': '12rem',
    '56': '14rem',
    '64': '16rem',
    px: '1px',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '1/2': '50%',
    '1/3': '33.333333%',
    '2/3': '66.666667%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.666667%',
    '2/6': '33.333333%',
    '3/6': '50%',
    '4/6': '66.666667%',
    '5/6': '83.333333%',
    '1/12': '8.333333%',
    '2/12': '16.666667%',
    '3/12': '25%',
    '4/12': '33.333333%',
    '5/12': '41.666667%',
    '6/12': '50%',
    '7/12': '58.333333%',
    '8/12': '66.666667%',
    '9/12': '75%',
    '10/12': '83.333333%',
    '11/12': '91.666667%',
    full: '100%',
    screenHeight: '100vh',
    screenWidth: '100vw',
  },
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
    name: {
      fontWeight: 'heading',
      '::after': {
        content: '":"',
      },
      mr: 1,
    },
    value: {
      mb: 1,
      width: '100%',
      display: 'block',
    },
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
        secondary: '#D6DCE1',
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
  layout: {
    root: {
      // root-level font size for typographic scale
      fontSize: [1, 2],
    },
    header: {
      ...commonRootLayoutPaddings,
    },
    main: {
      ...commonRootLayoutPaddings,
    },
    mainDebug: {
      ...commonRootLayoutPaddings,
      border: 'thin',
    },
    footer: {
      ...commonRootLayoutPaddings,
    },
  },
  cards: {
    primary: {
      maxWidth: [null, '22rem'],
      backgroundColor: 'muted',
      listStyleType: 'none',
    },
  },
  alerts: {
    primary: {
      color: 'background',
      bg: 'primary',
    },
    muted: {
      color: 'text',
      bg: 'muted',
    },
  },
};

export default common;
