/** @jsx jsx */
/**
 * stacked sidebar - flexible layout renders aside + container side by side and let them stack if the container becomes narrow
 * --- side bar fixed width --- flexible main          ---
 * OR
 * --- side bar fixed width ---
 * --- flexible main          ---
 */
import { jsx, Flex, useThemeUI } from 'theme-ui';
import type { FC } from 'react';
import type { BaseComponent } from '../../typings';
import { subtractFromTotal } from '../../utils';

export interface StackedSidebarProps extends BaseComponent {
  Sidebar?: React.ReactNode;
  sidebarWidth?: string | number;
}

const widths = ['48', '64', 'xs'];

const StackedSidebar: FC<StackedSidebarProps> = ({
  className,
  Sidebar = null,
  children,
  sidebarWidth = Sidebar === null ? '0em' : widths,
}) => {
  const arr = Array.isArray(sidebarWidth) ? sidebarWidth : [sidebarWidth];
  const {
    theme: { breakpoints = [0] },
  } = useThemeUI();
  const sectionMinWidth =
    Sidebar === null ? '100%' : subtractFromTotal(arr).map((w, i) => (i === 0 ? `max(${w}, ${widths[i]})` : w));
  return (
    <Flex
      className={className}
      sx={{
        flexWrap: 'wrap',
      }}
      data-testid="stackedsidebar"
    >
      <Flex
        sx={{
          flexGrow: 1,
          flexBasis: sidebarWidth,
          alignItems: 'center',
        }}
        as="aside"
      >
        {Sidebar}
      </Flex>
      <Flex
        sx={{
          flexGrow: 99999,
          flexBasis: 0,
          minWidth: sectionMinWidth,
          alignItems: 'center',
          justifyContent: 'flex-end',
          [`@media screen and (max-width: ${breakpoints[0]})`]: {
            justifyContent: 'flex-start',
            pt: 2,
          },
        }}
        as="section"
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default StackedSidebar;
