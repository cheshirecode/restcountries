/** @jsx jsx */
import type { FC } from 'react';
import { jsx /* , useTheme, css */ } from '@emotion/react';
import { cx } from '@emotion/css';
import styled from '@emotion/styled';
import type { BaseComponent } from '../typings/common';

const Footer: FC<BaseComponent> = ({ className, ...props }) => (
  <footer className={cx(className, 'footer')} data-testid={props['data-testid']}>
    footer
  </footer>
);

const StyledFooter = styled(Footer)(() => ({}));

export default StyledFooter;
