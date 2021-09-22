const commonRootLayoutPaddings = {
  px: [3, 4],
  py: [4, 3]
};
const common = {
  fonts: {
    body: '"Nunito Sans", sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  breakpoints: ["23.4375em", "40em", "56em", "90em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "32": "8rem",
    "40": "10rem",
    "48": "12rem",
    "56": "14rem",
    "64": "16rem",
    px: "1px",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "1/2": "50%",
    "1/3": "33.333333%",
    "2/3": "66.666667%",
    "1/4": "25%",
    "2/4": "50%",
    "3/4": "75%",
    "1/5": "20%",
    "2/5": "40%",
    "3/5": "60%",
    "4/5": "80%",
    "1/6": "16.666667%",
    "2/6": "33.333333%",
    "3/6": "50%",
    "4/6": "66.666667%",
    "5/6": "83.333333%",
    "1/12": "8.333333%",
    "2/12": "16.666667%",
    "3/12": "25%",
    "4/12": "33.333333%",
    "5/12": "41.666667%",
    "6/12": "50%",
    "7/12": "58.333333%",
    "8/12": "66.666667%",
    "9/12": "75%",
    "10/12": "83.333333%",
    "11/12": "91.666667%",
    full: "100%",
    screenHeight: "100vh",
    screenWidth: "100vw"
  },
  fontWeights: {
    body: 300,
    heading: 600,
    display: 800
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading"
    },
    display: {
      variant: "text.heading",
      fontSize: [5, 6],
      fontWeight: "display",
      letterSpacing: "-0.03em",
      mt: 3
    },
    default: {
      color: "text",
      fontSize: [1, 2]
    },
    name: {
      fontWeight: "heading",
      "::after": {
        content: '":"'
      },
      mr: 1
    },
    value: {
      mb: 1,
      width: "100%",
      display: "block"
    }
  },
  borders: {
    thick: "2px solid var(--theme-ui-colors-text, black)",
    thin: "1px solid var(--theme-ui-colors-text, black)"
  },
  config: {
    initialColorModeName: "light",
    printColorModeName: "light",
    useColorSchemeMediaQuery: true,
    useLocalStorage: true
  },
  colors: {
    text: "#000",
    subText: "#b7b7b7",
    background: "#fafafa",
    primary: "#07c",
    secondary: "#30c",
    highlight: "#b5d5ff",
    muted: "#fff",
    modes: {
      dark: {
        text: "#fff",
        subText: "#AAB3BB",
        background: "#222D37",
        primary: "#3cf",
        secondary: "#D6DCE1",
        highlight: "#29112c",
        muted: "#2C3743"
      }
    }
  },
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body"
    },
    a: {
      cursor: "pointer"
    }
  },
  layout: {
    root: {
      fontSize: [1, 2]
    },
    header: {
      ...commonRootLayoutPaddings
    },
    main: {
      ...commonRootLayoutPaddings,
      flex: "1 1 auto",
      backgroundColor: "background"
    },
    mainDebug: {
      ...commonRootLayoutPaddings,
      flex: "1 1 auto",
      border: "thin",
      backgroundColor: "background"
    },
    footer: {
      p: 0,
      m: 0
    }
  },
  cards: {
    primary: {
      maxWidth: [null, "22em"],
      backgroundColor: "muted",
      listStyleType: "none"
    },
    full: {
      maxWidth: "100%",
      listStyleType: "none"
    }
  },
  alerts: {
    primary: {
      color: "background",
      bg: "primary"
    },
    muted: {
      color: "text",
      bg: "muted"
    }
  },
  buttons: {
    primary: {
      cursor: "pointer",
      color: "text",
      bg: "background",
      "&:hover": {
        bg: "b5d5ff"
      },
      boxShadow: "0px 0px 2px var(--theme-ui-colors-text, black) inset"
    }
  }
};
export default common;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL1VzZXJzL2FuaHRyYW5kYWMvUHJvamVjdHMvZnJlZF9jb3VudHJpZXNfcGFnZS9zcmMvc3R5bGVzL3RoZW1lLnRzIl0sCiAgIm1hcHBpbmdzIjogIkFBQUEsTUFBTSwyQkFBMkI7QUFBQSxFQUMvQixJQUFJLENBQUMsR0FBRztBQUFBLEVBQ1IsSUFBSSxDQUFDLEdBQUc7QUFBQTtBQUVWLE1BQU0sU0FBUztBQUFBLEVBQ2IsT0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsV0FBVztBQUFBO0FBQUEsRUFHYixXQUFXLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJO0FBQUEsRUFFNUMsYUFBYSxDQUFDLGFBQWEsUUFBUSxRQUFRO0FBQUEsRUFFM0MsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksSUFBSSxJQUFJLEtBQUssS0FBSztBQUFBLEVBRXZDLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxJQUNMLEtBQUs7QUFBQSxJQUNMLEtBQUs7QUFBQSxJQUNMLEtBQUs7QUFBQSxJQUNMLEtBQUs7QUFBQSxJQUNMLEtBQUs7QUFBQSxJQUNMLEtBQUs7QUFBQSxJQUNMLEtBQUs7QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLElBQUk7QUFBQSxJQUNKLElBQUk7QUFBQSxJQUNKLElBQUk7QUFBQSxJQUNKLElBQUk7QUFBQSxJQUNKLElBQUk7QUFBQSxJQUNKLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJ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
