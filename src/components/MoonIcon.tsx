/** @jsx jsx */
import { IconButton } from 'theme-ui';
import styled from '@emotion/styled';

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

export default MoonIcon;
