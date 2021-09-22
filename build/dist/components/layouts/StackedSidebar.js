import {jsx, Flex, useThemeUI} from "../../../_snowpack/pkg/theme-ui.js";
import {subtractFromTotal} from "../../utils/index.js";
const widths = ["48", "64", "xs"];
const StackedSidebar = ({
  className,
  Sidebar = null,
  children,
  sidebarWidth = Sidebar === null ? "0em" : widths
}) => {
  const arr = Array.isArray(sidebarWidth) ? sidebarWidth : [sidebarWidth];
  const {
    theme: {breakpoints = [0]}
  } = useThemeUI();
  const sectionMinWidth = Sidebar === null ? "100%" : subtractFromTotal(arr).map((w, i) => i === 0 ? `max(${w}, ${widths[i]})` : w);
  return /* @__PURE__ */ jsx(Flex, {
    className,
    sx: {
      flexWrap: "wrap"
    },
    "data-testid": "stackedsidebar"
  }, /* @__PURE__ */ jsx(Flex, {
    sx: {
      flexGrow: 1,
      flexBasis: sidebarWidth,
      alignItems: "center"
    },
    as: "aside"
  }, Sidebar), /* @__PURE__ */ jsx(Flex, {
    sx: {
      flexGrow: 99999,
      flexBasis: 0,
      minWidth: sectionMinWidth,
      alignItems: "center",
      justifyContent: "flex-end",
      [`@media screen and (max-width: ${breakpoints[0]})`]: {
        justifyContent: "flex-start",
        pt: 2
      }
    },
    as: "section"
  }, children));
};
export default StackedSidebar;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL1VzZXJzL2FuaHRyYW5kYWMvUHJvamVjdHMvZnJlZF9jb3VudHJpZXNfcGFnZS9zcmMvY29tcG9uZW50cy9sYXlvdXRzL1N0YWNrZWRTaWRlYmFyLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQVFBO0FBR0E7QUFPQSxNQUFNLFNBQVMsQ0FBQyxNQUFNLE1BQU07QUFFNUIsTUFBTSxpQkFBMEMsQ0FBQztBQUFBLEVBQy9DO0FBQUEsRUFDQSxVQUFVO0FBQUEsRUFDVjtBQUFBLEVBQ0EsZUFBZSxZQUFZLE9BQU8sUUFBUTtBQUFBLE1BQ3RDO0FBQ0osUUFBTSxNQUFNLE1BQU0sUUFBUSxnQkFBZ0IsZUFBZSxDQUFDO0FBQzFELFFBQU07QUFBQSxJQUNKLE9BQU8sQ0FBRSxjQUFjLENBQUM7QUFBQSxNQUN0QjtBQUNKLFFBQU0sa0JBQ0osWUFBWSxPQUFPLFNBQVMsa0JBQWtCLEtBQUssSUFBSSxDQUFDLEdBQUcsTUFBTyxNQUFNLElBQUksT0FBTyxNQUFNLE9BQU8sUUFBUTtBQUMxRyxTQUNFLG9CQUFDLE1BQUQ7QUFBQSxJQUNFO0FBQUEsSUFDQSxJQUFJO0FBQUEsTUFDRixVQUFVO0FBQUE7QUFBQSxJQUVaLGVBQVk7QUFBQSxLQUVaLG9CQUFDLE1BQUQ7QUFBQSxJQUNFLElBQUk7QUFBQSxNQUNGLFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLFlBQVk7QUFBQTtBQUFBLElBRWQsSUFBRztBQUFBLEtBRUYsVUFFSCxvQkFBQyxNQUFEO0FBQUEsSUFDRSxJQUFJO0FBQUEsTUFDRixVQUFVO0FBQUEsTUFDVixXQUFXO0FBQUEsTUFDWCxVQUFVO0FBQUEsTUFDVixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxPQUNmLGlDQUFpQyxZQUFZLFFBQVE7QUFBQSxRQUNwRCxnQkFBZ0I7QUFBQSxRQUNoQixJQUFJO0FBQUE7QUFBQTtBQUFBLElBR1IsSUFBRztBQUFBLEtBRUY7QUFBQTtBQU1ULGVBQWU7IiwKICAibmFtZXMiOiBbXQp9Cg==
