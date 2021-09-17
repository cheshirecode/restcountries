/** @jsx jsx */
import type { FC } from 'react';
import { jsx, ThemeProvider, Flex, Box } from 'theme-ui';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import type { BaseComponent } from './typings';
import { cx } from '@emotion/css';
import theme from './styles/theme';

const App: FC<BaseComponent> = ({ className }) => {
  return (
    <ThemeProvider theme={theme}>
      <Flex
        // additional class name for escape hatch if external styling is required outside the code
        className={cx(className, 'layout')}
        variant="layout.root"
        sx={{
          height: '100vh',
          flexDirection: 'column',
          backgroundColor: 'background',
          color: 'text',
        }}
        data-testid="root"
      >
        <Box bg="muted" as="header" data-testid="header" variant="layout.header">
          <Header className="layout--header" />
        </Box>
        <Box
          as="main"
          data-testid="main"
          variant="layout.mainDebug" // TODO - use layout.main after working version
          sx={{
            flex: '1 1 auto',
            py: 0,
          }}
        >
          <Main className="layout--main" />
        </Box>
        <Box as="footer" variant="layout.footer">
          <Footer data-testid="footer" className="layout--footer" />
        </Box>
      </Flex>
    </ThemeProvider>
  );
};

export default App;
