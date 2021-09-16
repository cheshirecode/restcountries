/** @jsxImportSource theme-ui */
import React from 'react';
import type { FC } from 'react';
import type { BaseComponent } from '../typings';
import { Text, IconButton } from 'theme-ui';
import StackedSidebar from './layouts/StackedSidebar';

import { cx } from '@emotion/css';
import styled from '@emotion/styled';

const Header: FC<BaseComponent & { colourMode?: string }> = ({ className, colourMode = 'dark' }) => (
  <StackedSidebar className={cx(className)} Sidebar={<Text variant="heading">Where in the world?</Text>}>
    <>
      <IconButton />
      <Text>{colourMode.charAt(0).toUpperCase() + colourMode.slice(1)} mode</Text>
    </>
  </StackedSidebar>
);

const StyledHeader = styled(Header)(() => ({}));

export default StyledHeader;
