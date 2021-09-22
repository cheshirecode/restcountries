import {jsx, ThemeProvider, Flex, Box} from "../_snowpack/pkg/theme-ui.js";
import ErrorBoundary from "./components/ErrorBoundary.js";
import {SWRConfig} from "../_snowpack/pkg/swr.js";
import Header from "./components/Header.js";
import Routes from "./pages/index.js";
import {cx} from "../_snowpack/pkg/@emotion/css.js";
import theme from "./styles/theme.js";
const App = ({className}) => {
  return /* @__PURE__ */ jsx(SWRConfig, {
    value: {errorRetryCount: 1}
  }, /* @__PURE__ */ jsx(ThemeProvider, {
    theme
  }, /* @__PURE__ */ jsx(Flex, {
    className: cx(className, "layout"),
    variant: "layout.root",
    sx: {
      height: "100vh",
      flexDirection: "column",
      backgroundColor: "background",
      color: "text"
    },
    "data-testid": "root"
  }, /* @__PURE__ */ jsx(Box, {
    bg: "muted",
    as: "header",
    "data-testid": "header",
    variant: "layout.header"
  }, /* @__PURE__ */ jsx(ErrorBoundary, null, /* @__PURE__ */ jsx(Header, {
    className: "layout--header"
  }))), /* @__PURE__ */ jsx(Box, {
    as: "main",
    "data-testid": "main",
    variant: "layout.main"
  }, /* @__PURE__ */ jsx(ErrorBoundary, null, /* @__PURE__ */ jsx(Routes, null))), /* @__PURE__ */ jsx(Box, {
    as: "footer",
    variant: "layout.footer"
  }))));
};
export default App;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL1VzZXJzL2FuaHRyYW5kYWMvUHJvamVjdHMvZnJlZF9jb3VudHJpZXNfcGFnZS9zcmMvQXBwLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsTUFBTSxNQUF5QixDQUFDLENBQUUsZUFBZ0I7QUFDaEQsU0FDRSxvQkFBQyxXQUFEO0FBQUEsSUFBVyxPQUFPLENBQUUsaUJBQWlCO0FBQUEsS0FDbkMsb0JBQUMsZUFBRDtBQUFBLElBQWU7QUFBQSxLQUNiLG9CQUFDLE1BQUQ7QUFBQSxJQUVFLFdBQVcsR0FBRyxXQUFXO0FBQUEsSUFDekIsU0FBUTtBQUFBLElBQ1IsSUFBSTtBQUFBLE1BQ0YsUUFBUTtBQUFBLE1BQ1IsZUFBZTtBQUFBLE1BQ2YsaUJBQWlCO0FBQUEsTUFDakIsT0FBTztBQUFBO0FBQUEsSUFFVCxlQUFZO0FBQUEsS0FFWixvQkFBQyxLQUFEO0FBQUEsSUFBSyxJQUFHO0FBQUEsSUFBUSxJQUFHO0FBQUEsSUFBUyxlQUFZO0FBQUEsSUFBUyxTQUFRO0FBQUEsS0FDdkQsb0JBQUMsZUFBRCxNQUNFLG9CQUFDLFFBQUQ7QUFBQSxJQUFRLFdBQVU7QUFBQSxRQUd0QixvQkFBQyxLQUFEO0FBQUEsSUFBSyxJQUFHO0FBQUEsSUFBTyxlQUFZO0FBQUEsSUFBTyxTQUFRO0FBQUEsS0FDeEMsb0JBQUMsZUFBRCxNQUNFLG9CQUFDLFFBQUQsU0FHSixvQkFBQyxLQUFEO0FBQUEsSUFBSyxJQUFHO0FBQUEsSUFBUyxTQUFRO0FBQUE7QUFBQTtBQU9uQyxlQUFlOyIsCiAgIm5hbWVzIjogW10KfQo=
