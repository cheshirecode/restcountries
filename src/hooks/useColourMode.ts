/** @jsxImportSource theme-ui */
import type { MouseEvent } from 'react';
import { useCallback } from 'react';
import { useColorMode, useThemeUI } from 'theme-ui';

const useColourMode: () => [string, string, (e: MouseEvent) => void] = () => {
  const [colourMode, setColourMode] = useColorMode();
  const {
    theme: { rawColors },
  } = useThemeUI();
  const colours = Object.keys(rawColors?.modes ?? {});
  const nextColour = colours.find((c) => c !== colourMode) ?? '';
  const onClickChangeColourMode = useCallback(
    (e: MouseEvent) => {
      if (nextColour) {
        setColourMode(nextColour);
      }
    },
    [nextColour, setColourMode],
  );

  return [colourMode, nextColour, onClickChangeColourMode];
};

export default useColourMode;
