/** @jsx jsx */
/**
 * stacked sidebar - flexible layout renders 2 child components side by side and let them stack if the container becomes narrow
 * --- side bar fixed width --- flexible main          ---
 * OR
 * --- side bar fixed width ---
 * --- flexible main          ---
 */
import { jsx } from '@emotion/react';
import { Flex } from 'theme-ui';
import type { FC } from 'react';
import type { BaseComponent } from '../../typings';
import { subtractFromTotal } from '../../utils';

export interface StackedSidebarProps extends BaseComponent {
  Sidebar?: React.ReactNode;
  sidebarWidth?: string | number;
}

const widths = ['15em', '20em'];

const StackedSidebar: FC<StackedSidebarProps> = ({
  className,
  Sidebar = null,
  children,
  sidebarWidth = Sidebar === null ? '0em' : widths,
}) => {
  const arr = Array.isArray(sidebarWidth) ? sidebarWidth : [sidebarWidth];
  const sectionMinWidth =
    Sidebar === null ? '100%' : subtractFromTotal(arr).map((w, i) => (i === 0 ? `max(${w}, ${widths[i]})` : w));
  return (
    <Flex
      className={className}
      sx={{
        flexWrap: 'wrap',
      }}
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
        }}
        as="section"
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default StackedSidebar;
