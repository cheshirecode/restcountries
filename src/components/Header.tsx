/** @jsxImportSource theme-ui */
import React from 'react';
import type { FC } from 'react';
import type { BaseComponent } from '../typings';
import { Text, IconButton } from 'theme-ui';
import StackedSidebar from './layouts/StackedSidebar';
import useColourMode from '../hooks/useColourMode';
import styled from '@emotion/styled';
import { cx } from '@emotion/css';

// from https://css.gg/moon
const MoonIcon = styled(IconButton)`
  &,
  &::after {
    display: block;
    box-sizing: border-box;
    border-radius: 50%;
  }
  & {
    overflow: hidden;
    position: relative;
    transform: rotate(-135deg) scale(0.75);
    width: 1.25em;
    height: 1.25em;
    border: 0.125em solid;
    border-bottom-color: transparent;
  }
  &::after {
    content: '';
    position: absolute;
    width: 0.75em;
    height: 1.125em;
    border: 0.125em solid transparent;
    box-shadow: 0 0 0 0.125em;
    top: 0.5em;
    left: 0.125em;
  }
`;

const Header: FC<BaseComponent> = ({ className }) => {
  const [colourMode, nextColour, onClickChangeColourMode] = useColourMode();
  return (
    <StackedSidebar className={cx(className)} Sidebar={<Text variant="heading">Where in the world?</Text>}>
      <>
        <MoonIcon
          sx={{
            ...(nextColour ? { cursor: 'pointer' } : {}),
            mr: '0.5em',
          }}
          onClick={onClickChangeColourMode}
          aria-label="change colour"
        />
        <Text>{colourMode.charAt(0).toUpperCase() + colourMode.slice(1)} mode</Text>
      </>
    </StackedSidebar>
  );
};

export default Header;
