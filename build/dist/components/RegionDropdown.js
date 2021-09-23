import {useMemo} from "../../_snowpack/pkg/react.js";
import {jsx, Alert} from "../../_snowpack/pkg/theme-ui.js";
import Select from "../../_snowpack/pkg/react-select.js";
import useRegionListFetch from "../hooks/useRegionListFetch.js";
import ApiResponseHandler from "./ApiResponseHandler.js";
const noop = () => {
};
const RegionDropdown = ({className, region, onRegionChange = noop}) => {
  const [data, error] = useRegionListFetch();
  const regions = useMemo(() => [...new Set(data?.map((d) => d.region ?? d.continent ?? "").filter((x) => x))], [data]);
  regions.sort();
  const options = regions.map((x) => ({
    id: x,
    value: x,
    label: x,
    isCurrent: x === region
  }));
  const currentOption = options.filter((x) => x.isCurrent);
  const classNamePrefix = "react-select";
  return /* @__PURE__ */ jsx(ApiResponseHandler, {
    data,
    error
  }, options.length ? /* @__PURE__ */ jsx(Select, {
    className,
    classNamePrefix,
    placeholder: "Filter by region",
    options,
    sx: {
      [`.${classNamePrefix}__indicator-separator`]: {
        visibility: "hidden"
      },
      [`.${classNamePrefix}__control`]: {
        color: "text",
        backgroundColor: "muted",
        border: "none"
      },
      [`.${classNamePrefix}__menu`]: {
        color: "text",
        backgroundColor: "muted",
        mt: 0
      }
    },
    styles: {
      singleValue: (base) => ({
        ...base,
        color: "inherit",
        backgroundColor: "inherit"
      }),
      option: (base, state) => ({
        ...base,
        ...state.isFocused || state.isSelected ? {color: "background"} : {backgroundColor: "inherit", color: "inherit"}
      })
    },
    onChange: (option, action) => {
      if (action?.action === "select-option" || action?.action === "clear") {
        onRegionChange(option?.id ?? "");
      }
    },
    isClearable: true,
    value: currentOption,
    "data-testid": "region-dropdown"
  }) : /* @__PURE__ */ jsx(Alert, {
    role: "alert"
  }, "No regions"));
};
export default RegionDropdown;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL1VzZXJzL2FuaHRyYW5kYWMvUHJvamVjdHMvZnJlZF9jb3VudHJpZXNfcGFnZS9zcmMvY29tcG9uZW50cy9SZWdpb25Ecm9wZG93bi50c3giXSwKICAibWFwcGluZ3MiOiAiQUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0EsTUFBTSxPQUFPLE1BQU07QUFBQTtBQU9uQixNQUFNLGlCQUEwQyxDQUFDLENBQUUsV0FBVyxRQUFRLGlCQUFpQixVQUFXO0FBQ2hHLFFBQU0sQ0FBQyxNQUFNLFNBQVM7QUFFdEIsUUFBTSxVQUFVLFFBQVEsTUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFJLE1BQU0sSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsYUFBYSxJQUFJLE9BQU8sQ0FBQyxNQUFNLE1BQU0sQ0FBQztBQUMvRyxVQUFRO0FBQ1IsUUFBTSxVQUErRSxRQUFRLElBQUksQ0FBQyxNQUFPO0FBQUEsSUFDdkcsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsV0FBVyxNQUFNO0FBQUE7QUFFbkIsUUFBTSxnQkFBZ0IsUUFBUSxPQUFPLENBQUMsTUFBTSxFQUFFO0FBQzlDLFFBQU0sa0JBQWtCO0FBQ3hCLFNBQ0Usb0JBQUMsb0JBQUQ7QUFBQSxJQUFvQjtBQUFBLElBQVk7QUFBQSxLQUc1QixRQUFRLFNBQ04sb0JBQUMsUUFBRDtBQUFBLElBQ0U7QUFBQSxJQUVBO0FBQUEsSUFDQSxhQUFZO0FBQUEsSUFDWjtBQUFBLElBQ0EsSUFBSTtBQUFBLE9BQ0QsSUFBSSx5Q0FBeUM7QUFBQSxRQUM1QyxZQUFZO0FBQUE7QUFBQSxPQUViLElBQUksNkJBQTZCO0FBQUEsUUFDaEMsT0FBTztBQUFBLFFBQ1AsaUJBQWlCO0FBQUEsUUFDakIsUUFBUTtBQUFBO0FBQUEsT0FFVCxJQUFJLDBCQUEwQjtBQUFBLFFBQzdCLE9BQU87QUFBQSxRQUNQLGlCQUFpQjtBQUFBLFFBQ2pCLElBQUk7QUFBQTtBQUFBO0FBQUEsSUFJUixRQUFRO0FBQUEsTUFDTixhQUFhLENBQUMsU0FBcUI7QUFBQSxXQUM5QjtBQUFBLFFBQ0gsT0FBTztBQUFBLFFBQ1AsaUJBQWlCO0FBQUE7QUFBQSxNQUVuQixRQUFRLENBQUMsTUFBaUIsVUFBVztBQUFBLFdBQ2hDO0FBQUEsV0FDQyxNQUFNLGFBQWEsTUFBTSxhQUN6QixDQUFFLE9BQU8sZ0JBQ1QsQ0FBRSxpQkFBaUIsV0FBVyxPQUFPO0FBQUE7QUFBQTtBQUFBLElBRzdDLFVBQVUsQ0FBQyxRQUFRLFdBQVc7QUFDNUIsVUFBSSxRQUFRLFdBQVcsbUJBQW1CLFFBQVEsV0FBVyxTQUFTO0FBQ3BFLHVCQUFlLFFBQVEsTUFBTTtBQUFBO0FBQUE7QUFBQSxJQUdqQyxhQUFXO0FBQUEsSUFDWCxPQUFPO0FBQUEsSUFDUCxlQUFZO0FBQUEsT0FHZCxvQkFBQyxPQUFEO0FBQUEsSUFBTyxNQUFLO0FBQUEsS0FBUTtBQUFBO0FBTzlCLGVBQWU7IiwKICAibmFtZXMiOiBbXQp9Cg==
