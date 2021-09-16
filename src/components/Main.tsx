/** @jsx jsx */
import type { FC } from 'react';
import { jsx /* , useTheme, css */ } from '@emotion/react';
import { cx } from '@emotion/css';
import styled from '@emotion/styled';

const Main: FC<{ className?: string }> = ({ className }) => <main className={cx(className, 'main')}>main</main>;

const StyledMain = styled(Main)(() => ({}));

export default StyledMain;
