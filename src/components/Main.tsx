/** @jsx jsx */
import type { FC } from 'react';
import { jsx /* , useTheme, css */ } from '@emotion/react';
import { cx } from '@emotion/css';
import styled from '@emotion/styled';
import { Flex } from 'theme-ui';

const Main: FC<{ className?: string }> = ({ className }) => <Flex className={cx(className, 'main')}>main</Flex>;

const StyledMain = styled(Main)(() => ({}));

export default StyledMain;
