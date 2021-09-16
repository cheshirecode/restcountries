/** @jsx jsx */
import type { FC } from 'react';
import { jsx } from '@emotion/react';
import ThemeHandler from './components/ThemeHandler';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import type { BaseComponent } from './typings';

import styled from '@emotion/styled';

const App: FC<BaseComponent> = ({ className }) => {
  return (
    <article className={className}>
      <Header data-testid="header" />
      <Main data-testid="main" />
      <Footer data-testid="footer" />
    </article>
  );
};

const StyledApp = styled(App)((props) => ({
  backgroundColor: props.theme.colors.background,
  color: props.theme.colors.text,
}));

const ThemedApp: FC = ({ children, ...props }) => {
  return (
    <ThemeHandler>
      <StyledApp {...props} />
    </ThemeHandler>
  );
};

export default ThemedApp;
