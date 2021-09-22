import * as __SNOWPACK_ENV__ from '../../_snowpack/env.js';

import {Component} from "../../_snowpack/pkg/react.js";
import {jsx, Alert} from "../../_snowpack/pkg/theme-ui.js";
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.componentDidCatch = (error, errorInfo) => {
      this.setState({
        error,
        errorInfo
      });
    };
    this.render = () => {
      if (this.state.errorInfo) {
        return __SNOWPACK_ENV__.NODE_ENV === "development" ? /* @__PURE__ */ jsx("details", {
          style: {whiteSpace: "pre-wrap"}
        }, this.state.error && this.state.error.toString(), /* @__PURE__ */ jsx("br", null), this.state.errorInfo.componentStack) : /* @__PURE__ */ jsx(Alert, {
          variant: "highlight",
          mb: 2
        }, this.state.error.toString());
      }
      return this.props.children;
    };
    this.state = {error: null, errorInfo: null};
  }
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL1VzZXJzL2FuaHRyYW5kYWMvUHJvamVjdHMvZnJlZF9jb3VudHJpZXNfcGFnZS9zcmMvY29tcG9uZW50cy9FcnJvckJvdW5kYXJ5LnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUNBO0FBRUE7QUFHQSwyQ0FBMkMsVUFBMkU7QUFBQSxFQUNwSCxZQUFZLE9BQWdDO0FBQzFDLFVBQU07QUFLUiw2QkFBa0UsQ0FBQyxPQUFPLGNBQWM7QUFDdEYsV0FBSyxTQUFTO0FBQUEsUUFDWjtBQUFBLFFBQ0E7QUFBQTtBQUFBO0FBSUosa0JBQTBCLE1BQU07QUFDOUIsVUFBSSxLQUFLLE1BQU0sV0FBVztBQUN4QixlQUFPLFlBQVksSUFBSSxhQUFhLGdCQUNsQyxvQkFBQyxXQUFEO0FBQUEsVUFBUyxPQUFPLENBQUUsWUFBWTtBQUFBLFdBQzNCLEtBQUssTUFBTSxTQUFTLEtBQUssTUFBTSxNQUFNLFlBQ3RDLG9CQUFDLE1BQUQsT0FDQyxLQUFLLE1BQU0sVUFBVSxrQkFHeEIsb0JBQUMsT0FBRDtBQUFBLFVBQU8sU0FBUTtBQUFBLFVBQVksSUFBSTtBQUFBLFdBQzVCLEtBQUssTUFBTSxNQUFNO0FBQUE7QUFLeEIsYUFBTyxLQUFLLE1BQU07QUFBQTtBQXpCbEIsU0FBSyxRQUFRLENBQUUsT0FBTyxNQUFNLFdBQVc7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
