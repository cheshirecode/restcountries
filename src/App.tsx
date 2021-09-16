/** @jsx jsx */
import type { FC } from 'react';
import { jsx } from '@emotion/react';
import ThemeHandler from './components/ThemeHandler';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Flex, Box } from 'theme-ui';
import type { BaseComponent } from './typings';
import { cx } from '@emotion/css';

const App: FC<BaseComponent> = ({ className }) => {
  return (
    <Flex
      // additional class name for escape hatch if external styling is required outside the code
      className={cx(className, 'layout')}
      sx={{
        // root-level font size for typographic scale
        fontSize: [1, 2],
        height: '100vh',
        flexDirection: 'column',
        backgroundColor: 'background',
        color: 'text',
        '> *': {
          px: [3, 4],
          py: [4, 2],
        },
      }}
    >
      <Box bg="muted" as="header" data-testid="header">
        <Header className="layout--header" />
      </Box>
      <Box
        py={0}
        sx={{
          border: 'thin', // TODO - remove after working version
          borderColor: 'text', // currently --theme-ui-colors-text doesn't work yet
          flex: '1 1 auto',
        }}
        as="main"
      >
        <Main data-testid="main" className="layout--main" />
      </Box>
      <Box as="footer">
        <Footer data-testid="footer" className="layout--main" />
      </Box>
    </Flex>
  );
};

const ThemedApp: FC = ({ children, ...props }) => {
  return (
    <ThemeHandler {...props}>
      <App />
    </ThemeHandler>
  );
};

export default ThemedApp;
