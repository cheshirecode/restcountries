import {jsx, Spinner, Alert} from "../../_snowpack/pkg/theme-ui.js";
import {Route, Switch} from "../../_snowpack/pkg/wouter.js";
import {Suspense, lazy} from "../../_snowpack/pkg/react.js";
const Main = lazy(() => import("./Main.js"));
const MainRoute = () => /* @__PURE__ */ jsx(Suspense, {
  fallback: /* @__PURE__ */ jsx(Spinner, null)
}, /* @__PURE__ */ jsx(Main, {
  className: "layout--main"
}));
const CountryDetails = lazy(() => import("./CountryDetails.js"));
const CountryDetailsRoute = ({params}) => /* @__PURE__ */ jsx(Suspense, {
  fallback: /* @__PURE__ */ jsx(Spinner, null)
}, /* @__PURE__ */ jsx(CountryDetails, {
  params,
  className: "layout--country-details"
}));
const AllRoutes = ({className}) => {
  return /* @__PURE__ */ jsx(Switch, null, /* @__PURE__ */ jsx(Route, {
    path: "/",
    component: MainRoute
  }), /* @__PURE__ */ jsx(Route, {
    path: "/country-details/full-name/:fullName",
    component: CountryDetailsRoute
  }), /* @__PURE__ */ jsx(Route, {
    path: "/country-details/alpha3/:alpha3",
    component: CountryDetailsRoute
  }), /* @__PURE__ */ jsx(Route, {
    path: "/country-details/*",
    component: CountryDetailsRoute
  }), /* @__PURE__ */ jsx(Route, null, /* @__PURE__ */ jsx(Alert, {
    role: "alert"
  }, "404")));
};
export default AllRoutes;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL1VzZXJzL2FuaHRyYW5kYWMvUHJvamVjdHMvZnJlZF9jb3VudHJpZXNfcGFnZS9zcmMvcGFnZXMvaW5kZXgudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBRUE7QUFDQTtBQUNBO0FBR0EsTUFBTSxPQUFPLEtBQUssTUFBTSxPQUFPO0FBQy9CLE1BQU0sWUFBWSxNQUNoQixvQkFBQyxVQUFEO0FBQUEsRUFBVSxVQUFVLG9CQUFDLFNBQUQ7QUFBQSxHQUNsQixvQkFBQyxNQUFEO0FBQUEsRUFBTSxXQUFVO0FBQUE7QUFJcEIsTUFBTSxpQkFBaUIsS0FBSyxNQUFNLE9BQU87QUFDekMsTUFBTSxzQkFBOEUsQ0FBQyxDQUFFLFlBQ3JGLG9CQUFDLFVBQUQ7QUFBQSxFQUFVLFVBQVUsb0JBQUMsU0FBRDtBQUFBLEdBQ2xCLG9CQUFDLGdCQUFEO0FBQUEsRUFBZ0I7QUFBQSxFQUFnQixXQUFVO0FBQUE7QUFJOUMsTUFBTSxZQUErQixDQUFDLENBQUUsZUFBZ0I7QUFDdEQsU0FDRSxvQkFBQyxRQUFELE1BQ0Usb0JBQUMsT0FBRDtBQUFBLElBQU8sTUFBSztBQUFBLElBQUksV0FBVztBQUFBLE1BQzNCLG9CQUFDLE9BQUQ7QUFBQSxJQUFPLE1BQUs7QUFBQSxJQUF1QyxXQUFXO0FBQUEsTUFDOUQsb0JBQUMsT0FBRDtBQUFBLElBQU8sTUFBSztBQUFBLElBQWtDLFdBQVc7QUFBQSxNQUN6RCxvQkFBQyxPQUFEO0FBQUEsSUFBTyxNQUFLO0FBQUEsSUFBcUIsV0FBVztBQUFBLE1BQzVDLG9CQUFDLE9BQUQsTUFDRSxvQkFBQyxPQUFEO0FBQUEsSUFBTyxNQUFLO0FBQUEsS0FBUTtBQUFBO0FBTTVCLGVBQWU7IiwKICAibmFtZXMiOiBbXQp9Cg==
