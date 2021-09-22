import {useMemo} from "../../_snowpack/pkg/react.js";
import {jsx, Alert} from "../../_snowpack/pkg/theme-ui.js";
import Select from "../../_snowpack/pkg/react-select.js";
import useRegionListFetch from "../hooks/useRegionListFetch.js";
import ApiResponseHandler from "./ApiResponseHandler.js";
const noop = () => {
};
const RegionDropdown = ({className, region, onRegionChange = noop}) => {
  const [data, error] = useRegionListFetch({
    fields: ["region"]
  });
  const regions = useMemo(() => [...new Set(data?.map((d) => d.region).filter((x) => x))], [data]);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL1VzZXJzL2FuaHRyYW5kYWMvUHJvamVjdHMvZnJlZF9jb3VudHJpZXNfcGFnZS9zcmMvY29tcG9uZW50cy9SZWdpb25Ecm9wZG93bi50c3giXSwKICAibWFwcGluZ3MiOiAiQUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0EsTUFBTSxPQUFPLE1BQU07QUFBQTtBQU9uQixNQUFNLGlCQUEwQyxDQUFDLENBQUUsV0FBVyxRQUFRLGlCQUFpQixVQUFXO0FBQ2hHLFFBQU0sQ0FBQyxNQUFNLFNBQVMsbUJBQW1CO0FBQUEsSUFDdkMsUUFBUSxDQUFDO0FBQUE7QUFHWCxRQUFNLFVBQVUsUUFBUSxNQUFNLENBQUMsR0FBRyxJQUFJLElBQUksTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsT0FBTyxDQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzFGLFVBQVE7QUFDUixRQUFNLFVBQStFLFFBQVEsSUFBSSxDQUFDLE1BQU87QUFBQSxJQUN2RyxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxXQUFXLE1BQU07QUFBQTtBQUVuQixRQUFNLGdCQUFnQixRQUFRLE9BQU8sQ0FBQyxNQUFNLEVBQUU7QUFDOUMsUUFBTSxrQkFBa0I7QUFDeEIsU0FDRSxvQkFBQyxvQkFBRDtBQUFBLElBQW9CO0FBQUEsSUFBWTtBQUFBLEtBRzVCLFFBQVEsU0FDTixvQkFBQyxRQUFEO0FBQUEsSUFDRTtBQUFBLElBRUE7QUFBQSxJQUNBLGFBQVk7QUFBQSxJQUNaO0FBQUEsSUFDQSxJQUFJO0FBQUEsT0FDRCxJQUFJLHlDQUF5QztBQUFBLFFBQzVDLFlBQVk7QUFBQTtBQUFBLE9BRWIsSUFBSSw2QkFBNkI7QUFBQSxRQUNoQyxPQUFPO0FBQUEsUUFDUCxpQkFBaUI7QUFBQSxRQUNqQixRQUFRO0FBQUE7QUFBQSxPQUVULElBQUksMEJBQTBCO0FBQUEsUUFDN0IsT0FBTztBQUFBLFFBQ1AsaUJBQWlCO0FBQUEsUUFDakIsSUFBSTtBQUFBO0FBQUE7QUFBQSxJQUlSLFFBQVE7QUFBQSxNQUNOLGFBQWEsQ0FBQyxTQUFxQjtBQUFBLFdBQzlCO0FBQUEsUUFDSCxPQUFPO0FBQUEsUUFDUCxpQkFBaUI7QUFBQTtBQUFBLE1BRW5CLFFBQVEsQ0FBQyxNQUFpQixVQUFXO0FBQUEsV0FDaEM7QUFBQSxXQUNDLE1BQU0sYUFBYSxNQUFNLGFBQ3pCLENBQUUsT0FBTyxnQkFDVCxDQUFFLGlCQUFpQixXQUFXLE9BQU87QUFBQTtBQUFBO0FBQUEsSUFHN0MsVUFBVSxDQUFDLFFBQVEsV0FBVztBQUM1QixVQUFJLFFBQVEsV0FBVyxtQkFBbUIsUUFBUSxXQUFXLFNBQVM7QUFDcEUsdUJBQWUsUUFBUSxNQUFNO0FBQUE7QUFBQTtBQUFBLElBR2pDLGFBQVc7QUFBQSxJQUNYLE9BQU87QUFBQSxJQUNQLGVBQVk7QUFBQSxPQUdkLG9CQUFDLE9BQUQ7QUFBQSxJQUFPLE1BQUs7QUFBQSxLQUFRO0FBQUE7QUFPOUIsZUFBZTsiLAogICJuYW1lcyI6IFtdCn0K
