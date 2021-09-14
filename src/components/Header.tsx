/** @jsx jsx */
import type { FC } from 'react';
import { jsx /* , useTheme, css */ } from '@emotion/react';
import { cx } from '@emotion/css';
import styled from '@emotion/styled';

const Header: FC<{ className?: string }> = ({ className }) => (
  <header className={cx(className, 'header')}>header</header>
);

const StyledHeader = styled(Header)(() => ({}));

export default StyledHeader;
