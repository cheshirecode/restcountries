/** @jsx jsx */
import type { FC } from 'react';
import { jsx, ThemeProvider, Flex, Box, Spinner, Alert } from 'theme-ui';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import { Route, Switch } from 'wouter';
import { Suspense, lazy } from 'react';
import type { BaseComponent } from './typings';
import { cx } from '@emotion/css';
import theme from './styles/theme';

const Main = lazy(() => import('./components/Main'));
const MainRoute = () => (
  <Suspense fallback={<Spinner />}>
    <Main className="layout--main" />
  </Suspense>
);

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
          <ErrorBoundary>
            <Header className="layout--header" />
          </ErrorBoundary>
        </Box>
        <Box
          as="main"
          data-testid="main"
          variant="layout.mainDebug" // TODO - use layout.main after working version
        >
          <ErrorBoundary>
            <Switch>
              <Route path="/" component={MainRoute}></Route>
              <Route>
                <Alert role="alert">404</Alert>
              </Route>
            </Switch>
          </ErrorBoundary>
        </Box>
        <Box as="footer" variant="layout.footer"></Box>
      </Flex>
    </ThemeProvider>
  );
};

export default App;
