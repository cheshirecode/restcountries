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

const CountryDetails = lazy(() => import('./CountryDetails'));
const CountryDetailsRoute: FC<BaseComponent & { params: Record<string, string> }> = ({ params }) => (
  <Suspense fallback={<Spinner />}>
    <CountryDetails params={params} className="layout--country-details" />
  </Suspense>
);

const AllRoutes: FC<BaseComponent> = ({ className }) => {
  return (
    <Switch>
      <Route path="/" component={MainRoute}></Route>
      <Route path="/country-details/full-name/:fullName" component={CountryDetailsRoute}></Route>
      <Route path="/country-details/alpha3/:alpha3" component={CountryDetailsRoute}></Route>
      <Route path="/country-details/*" component={CountryDetailsRoute}></Route>
      <Route>
        <Alert role="alert">404</Alert>
      </Route>
    </Switch>
  );
};

export default AllRoutes;
