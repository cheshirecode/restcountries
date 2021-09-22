import {jsx, Alert, Spinner} from "../../_snowpack/pkg/theme-ui.js";
export const API_ERROR_TEXT = "API error";
const ApiResponseHandler = ({error, data, children}) => {
  if (error) {
    return /* @__PURE__ */ jsx(Alert, {
      role: "alert"
    }, API_ERROR_TEXT);
  }
  if (!data)
    return /* @__PURE__ */ jsx(Spinner, {
      "data-testid": "apiresponsehandler-spinner"
    });
  return children;
};
export default ApiResponseHandler;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL1VzZXJzL2FuaHRyYW5kYWMvUHJvamVjdHMvZnJlZF9jb3VudHJpZXNfcGFnZS9zcmMvY29tcG9uZW50cy9BcGlSZXNwb25zZUhhbmRsZXIudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBRUE7QUFHTyxhQUFNLGlCQUFpQjtBQUU5QixNQUFNLHFCQUF3RCxDQUFDLENBQUUsT0FBTyxNQUFNLGNBQWU7QUFDM0YsTUFBSSxPQUFPO0FBR1QsV0FBTyxvQkFBQyxPQUFEO0FBQUEsTUFBTyxNQUFLO0FBQUEsT0FBUztBQUFBO0FBRTlCLE1BQUksQ0FBQztBQUFNLFdBQU8sb0JBQUMsU0FBRDtBQUFBLE1BQVMsZUFBWTtBQUFBO0FBR3ZDLFNBQU87QUFBQTtBQUdULGVBQWU7IiwKICAibmFtZXMiOiBbXQp9Cg==
