/** @jsx jsx */
import type { FC } from 'react';
import { ThemeProvider, jsx /* , useTheme, css */ } from '@emotion/react';
import Header from './components/Header';

import themes from './themes';
import type { Theme } from './themes';
import styled from '@emotion/styled';

const App: FC<{ theme?: Theme; className?: string }> = ({ className }) => {
  // const theme = useTheme() as Theme;

  return (
    <div className={className}>
      <Header />
      <main>main</main>
      <footer>footer</footer>
    </div>
  );
};

const StyledApp = styled(App)((props) => ({
  backgroundColor: props.theme.colors.background,
  color: props.theme.colors.text,
}));

const ThemedApp: FC = ({ children, ...props }) => {
  return (
    <ThemeProvider theme={themes.dark}>
      <StyledApp {...props} />
    </ThemeProvider>
  );
};

export default ThemedApp;
