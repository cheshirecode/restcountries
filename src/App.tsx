/** @jsx jsx */
import type { FC } from 'react';
import { jsx } from '@emotion/react';
import ThemeHandler from './components/ThemeHandler';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Box } from 'theme-ui';
import type { BaseComponent } from './typings';
import { cx } from '@emotion/css';
import styled from '@emotion/styled';

const App: FC<BaseComponent> = ({ className }) => {
  return (
    <Box
      className={cx(className, 'layout')}
      sx={{
        // root-level font size for typographic scale
        fontSize: [1, 2],
      }}
    >
      <Box>
        <Header data-testid="header" className="layout--header" />
      </Box>
      <Box>
        <Main data-testid="main" className="layout--main" />
      </Box>
      <Box>
        <Footer data-testid="footer" className="layout--main" />
      </Box>
    </Box>
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
