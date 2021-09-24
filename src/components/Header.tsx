/** @jsx jsx */
import React from 'react';
import type { FC } from 'react';
import type { BaseComponent } from '../typings';
import { jsx, Text, Flex, useThemeUI } from 'theme-ui';
import { Link } from 'wouter';
import MoonIcon from '../components/MoonIcon';
import useColourMode from '../hooks/useColourMode';

const Header: FC<BaseComponent> = ({ className }) => {
  const [colourMode, nextColour, onClickChangeColourMode] = useColourMode();
  const {
    theme: { breakpoints = [0] },
  } = useThemeUI();
  return (
    <Flex
      sx={{
        width: 'full',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
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
      <Flex
        sx={{
          [`@media screen and (max-width: ${breakpoints[0]})`]: {
            justifyContent: 'flex-start',
            pt: 2,
            minWidth: 48,
          },
        }}
      >
        <MoonIcon
          sx={{
            ...(nextColour ? { cursor: 'pointer' } : {}),
          }}
          onClick={onClickChangeColourMode}
          aria-label="change colour"
        />
        <Text
          sx={{
            minWidth: '9ch', //small hack to avoid the component shrinking once text change (light mode = 10 chars)
            textAlign: 'end',
          }}
        >
          {colourMode.charAt(0).toUpperCase() + colourMode.slice(1)} mode
        </Text>
      </Flex>
    </Flex>
  );
};

export default Header;
