/** @jsx jsx */
import type { FC } from 'react';
import { jsx, ThemeProvider, Flex, Box } from 'theme-ui';
import ErrorBoundary from './components/ErrorBoundary';
import { SWRConfig } from 'swr';
import Header from './components/Header';
import Routes from './pages';
import type { BaseComponent } from './typings';
import { cx } from '@emotion/css';
import theme from './styles/theme';

const App: FC<BaseComponent> = ({ className }) => {
  return (
    <SWRConfig value={{ errorRetryCount: 1 }}>
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
            <ErrorBoundary>
              <Header className="layout--header" />
            </ErrorBoundary>
          </Box>
          <Box as="main" data-testid="main" variant="layout.main">
            <ErrorBoundary>
              <Routes />
            </ErrorBoundary>
          </Box>
          <Box as="footer" variant="layout.footer"></Box>
        </Flex>
      </ThemeProvider>
    </SWRConfig>
  );
};

export default App;
