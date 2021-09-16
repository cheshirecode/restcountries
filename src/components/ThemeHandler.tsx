import React from 'react';
import type { FC } from 'react';
import { ThemeProvider } from 'theme-ui';

import theme from '../styles/theme';

const ThemeHandler: FC = ({ children, ...props }) => {
  const childrenWithExtraProps = React.Children.map(children, (child) =>
    React.cloneElement(child as React.ReactElement, props),
  );

  return <ThemeProvider theme={theme}>{childrenWithExtraProps}</ThemeProvider>;
};

export default ThemeHandler;
