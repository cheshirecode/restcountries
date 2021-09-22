import {jsx} from "../../_snowpack/pkg/theme-ui.js";
import CountryList from "./CountryList.js";
import useCountryListFetch from "../hooks/useCountryListFetch.js";
import ApiResponseHandler from "./ApiResponseHandler.js";
const FullCountryList = ({className}) => {
  const [data, error] = useCountryListFetch();
  return /* @__PURE__ */ jsx(ApiResponseHandler, {
    data,
    error
  }, /* @__PURE__ */ jsx(CountryList, {
    data,
    "data-testid": "full-country-list"
  }));
};
export default FullCountryList;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL1VzZXJzL2FuaHRyYW5kYWMvUHJvamVjdHMvZnJlZF9jb3VudHJpZXNfcGFnZS9zcmMvY29tcG9uZW50cy9GdWxsQ291bnRyeUxpc3QudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNLGtCQUE4QyxDQUFDLENBQUUsZUFBZ0I7QUFDckUsUUFBTSxDQUFDLE1BQU0sU0FBUztBQUN0QixTQUNFLG9CQUFDLG9CQUFEO0FBQUEsSUFBb0I7QUFBQSxJQUFZO0FBQUEsS0FDOUIsb0JBQUMsYUFBRDtBQUFBLElBQWE7QUFBQSxJQUFZLGVBQVk7QUFBQTtBQUFBO0FBSzNDLGVBQWU7IiwKICAibmFtZXMiOiBbXQp9Cg==
