/** @jsx jsx */
/**
 * stacked sidebar - flexible layout renders 2 child components side by side and let them stack if the container becomes narrow
 * --- side bar fixed width --- flexible main          ---
 * OR
 * --- side bar fixed width ---
 * --- flexible main          ---
 */
import { jsx } from '@emotion/react';
import { Box } from 'theme-ui';
import type { FC } from 'react';
import type { BaseComponent } from '../../typings';
import { subtractFromTotal } from '../../utils';

export interface StackedSidebarProps extends BaseComponent {
  Sidebar?: React.ReactNode;
  sidebarWidth?: string | number;
}

const StackedSidebar: FC<StackedSidebarProps> = ({
  Sidebar = null,
  children,
  sidebarWidth = Sidebar === null ? '0em' : ['10em', '20em'],
}) => {
  const arr = Array.isArray(sidebarWidth) ? sidebarWidth : [sidebarWidth];
  const sectionMinWidth = Sidebar === null ? '100%' : subtractFromTotal(arr);
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          flexBasis: sidebarWidth,
        }}
        as="aside"
      >
        {Sidebar}
      </Box>
      <Box
        sx={{
          flexGrow: 99999,
          flexBasis: 0,
          minWidth: sectionMinWidth,
        }}
        as="section"
      >
        {children}
      </Box>
    </Box>
  );
};

export default StackedSidebar;
