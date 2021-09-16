/** @jsx jsx */
import type { FC } from 'react';
import { jsx /* , useTheme, css */ } from '@emotion/react';
import { cx } from '@emotion/css';
import styled from '@emotion/styled';

const Footer: FC<{ className?: string }> = ({ className }) => (
  <footer className={cx(className, 'footer')}>footer</footer>
);

const StyledFooter = styled(Footer)(() => ({}));

export default StyledFooter;
