import React from 'react';
import type { FC } from 'react';
import { ThemeProvider } from '@emotion/react';

import themes from '../themes';

const ThemeHandler: FC = ({ children, ...props }) => {
  const childrenWithExtraProps = React.Children.map(children, (child) =>
    React.cloneElement(child as React.ReactElement, props),
  );

  return <ThemeProvider theme={themes.dark}>{childrenWithExtraProps}</ThemeProvider>;
};

export default ThemeHandler;
