/** @jsx jsx */
import type { FC } from 'react';
import { ThemeProvider, useTheme, css, jsx } from '@emotion/react';
import themes from './themes';
import type { Theme } from './themes';

const App: FC = () => {
  const theme = useTheme() as Theme;

  return (
    <div
      css={css`
        background-color: ${theme.colors.background};
        color: ${theme.colors.text};
      `}
    >
      <header>header</header>
      <main>main</main>
      <footer>footer</footer>
    </div>
  );
};
const ThemedApp: FC = ({ children, ...props }) => {
  return (
    <ThemeProvider theme={themes.dark}>
      <App {...props} />
    </ThemeProvider>
  );
};

export default ThemedApp;
