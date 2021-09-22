import React from "../../_snowpack/pkg/react.js";
import {jsx, Text} from "../../_snowpack/pkg/theme-ui.js";
import {Link} from "../../_snowpack/pkg/wouter.js";
import MoonIcon from "./MoonIcon.js";
import StackedSidebar from "./layouts/StackedSidebar.js";
import useColourMode from "../hooks/useColourMode.js";
import {cx} from "../../_snowpack/pkg/@emotion/css.js";
const Header = ({className}) => {
  const [colourMode, nextColour, onClickChangeColourMode] = useColourMode();
  return /* @__PURE__ */ jsx(StackedSidebar, {
    className: cx(className),
    Sidebar: /* @__PURE__ */ jsx(Link, {
      href: `/`
    }, /* @__PURE__ */ jsx(Text, {
      variant: "heading",
      as: "a",
      sx: {
        color: "inherit",
        textDecoration: "none"
      }
    }, "Where in the world?"))
  }, /* @__PURE__ */ jsx(React.Fragment, null, /* @__PURE__ */ jsx(MoonIcon, {
    sx: {
      ...nextColour ? {cursor: "pointer"} : {}
    },
    onClick: onClickChangeColourMode,
    "aria-label": "change colour"
  }), /* @__PURE__ */ jsx(Text, {
    sx: {
      minWidth: "10ch",
      textAlign: "end"
    }
  }, colourMode.charAt(0).toUpperCase() + colourMode.slice(1), " mode")));
};
export default Header;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL1VzZXJzL2FuaHRyYW5kYWMvUHJvamVjdHMvZnJlZF9jb3VudHJpZXNfcGFnZS9zcmMvY29tcG9uZW50cy9IZWFkZXIudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNLFNBQTRCLENBQUMsQ0FBRSxlQUFnQjtBQUNuRCxRQUFNLENBQUMsWUFBWSxZQUFZLDJCQUEyQjtBQUMxRCxTQUNFLG9CQUFDLGdCQUFEO0FBQUEsSUFDRSxXQUFXLEdBQUc7QUFBQSxJQUNkLFNBQ0Usb0JBQUMsTUFBRDtBQUFBLE1BQU0sTUFBTTtBQUFBLE9BQ1Ysb0JBQUMsTUFBRDtBQUFBLE1BQ0UsU0FBUTtBQUFBLE1BQ1IsSUFBRztBQUFBLE1BQ0gsSUFBSTtBQUFBLFFBQ0YsT0FBTztBQUFBLFFBQ1AsZ0JBQWdCO0FBQUE7QUFBQSxPQUVuQjtBQUFBLEtBTUwsMENBQ0Usb0JBQUMsVUFBRDtBQUFBLElBQ0UsSUFBSTtBQUFBLFNBQ0UsYUFBYSxDQUFFLFFBQVEsYUFBYztBQUFBO0FBQUEsSUFFM0MsU0FBUztBQUFBLElBQ1QsY0FBVztBQUFBLE1BRWIsb0JBQUMsTUFBRDtBQUFBLElBQ0UsSUFBSTtBQUFBLE1BQ0YsVUFBVTtBQUFBLE1BQ1YsV0FBVztBQUFBO0FBQUEsS0FHWixXQUFXLE9BQU8sR0FBRyxnQkFBZ0IsV0FBVyxNQUFNLElBQUc7QUFBQTtBQU9wRSxlQUFlOyIsCiAgIm5hbWVzIjogW10KfQo=
