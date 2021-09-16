/** @jsx jsx */
import type { FC } from 'react';
import { jsx /* , useTheme, css */ } from '@emotion/react';
import type { BaseComponent } from '../typings/common';

import { cx } from '@emotion/css';
import styled from '@emotion/styled';

const Header: FC<BaseComponent> = ({ className, ...props }) => (
  <header className={cx(className, 'header')} data-testid={props['data-testid']}>
    header
  </header>
);

const StyledHeader = styled(Header)(() => ({}));

export default StyledHeader;
