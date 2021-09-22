/** @jsx jsx */
import type { FC } from 'react';
import { jsx, Spinner, Alert } from 'theme-ui';
import { Route, Switch } from 'wouter';
import { Suspense, lazy } from 'react';
import type { BaseComponent } from '../typings';

const Main = lazy(() => import('../pages/Main'));
const MainRoute = () => (
  <Suspense fallback={<Spinner />}>
    <Main className="layout--main" />
  </Suspense>
);

const AllRoutes: FC<BaseComponent> = ({ className }) => {
  return (
    <Switch>
      <Route path="/" component={MainRoute}></Route>
      <Route>
        <Alert role="alert">404</Alert>
      </Route>
    </Switch>
  );
};

export default AllRoutes;
