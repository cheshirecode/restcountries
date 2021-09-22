/** @jsx jsx */
import React from 'react';
import type { FC } from 'react';
import type { BaseComponent } from '../typings';
import { jsx, Text } from 'theme-ui';
import { Link } from 'wouter';
import MoonIcon from '../components/MoonIcon';
import StackedSidebar from './layouts/StackedSidebar';
import useColourMode from '../hooks/useColourMode';
import { cx } from '@emotion/css';

const Header: FC<BaseComponent> = ({ className }) => {
  const [colourMode, nextColour, onClickChangeColourMode] = useColourMode();
  return (
    <StackedSidebar
      className={cx(className)}
      Sidebar={
        <Link href={`/`}>
          <Text
            variant="heading"
            as="a"
            sx={{
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Where in the world?
          </Text>
        </Link>
      }
    >
      <>
        <MoonIcon
          sx={{
            ...(nextColour ? { cursor: 'pointer' } : {}),
          }}
          onClick={onClickChangeColourMode}
          aria-label="change colour"
        />
        <Text
          sx={{
            minWidth: '10ch', //small hack to avoid the component shrinking once text change (light mode = 10 chars)
            textAlign: 'end',
          }}
        >
          {colourMode.charAt(0).toUpperCase() + colourMode.slice(1)} mode
        </Text>
      </>
    </StackedSidebar>
  );
};

export default Header;
