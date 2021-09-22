import {useState, useMemo} from "../../_snowpack/pkg/react.js";
import {jsx, Container, Flex} from "../../_snowpack/pkg/theme-ui.js";
import FilteredCountryList from "../components/FilteredCountryList.js";
import FullCountryList from "../components/FullCountryList.js";
import RegionDropdown from "../components/RegionDropdown.js";
import {cx} from "../../_snowpack/pkg/@emotion/css.js";
import {throttle} from "../../_snowpack/pkg/lodash-es.js";
const Main = ({className}) => {
  const [region, setRegion] = useState("");
  const [countryName, setCountrySearchStr] = useState("");
  const throttledOnChange = useMemo(() => throttle((e) => {
    setCountrySearchStr(e.target.value);
  }, 300, {
    leading: true,
    trailing: true
  }), [setCountrySearchStr]);
  return /* @__PURE__ */ jsx(Container, {
    className: cx(className, "main")
  }, /* @__PURE__ */ jsx(Flex, {
    sx: {
      justifyContent: "space-between",
      flexWrap: "wrap",
      pt: 4,
      mb: [5, 4]
    }
  }, /* @__PURE__ */ jsx(Flex, {
    sx: {
      minWidth: [null, "27em"],
      width: ["full", "auto"]
    }
  }, /* @__PURE__ */ jsx("i", {
    sx: {
      transform: "rotate(-45deg)",
      fontSize: "1.5em",
      position: "absolute",
      ml: "3ch",
      mt: ".125em",
      color: "text"
    }
  }, "⚲"), /* @__PURE__ */ jsx("input", {
    sx: {
      width: "full",
      height: "2.5rem",
      pl: "8ch",
      color: "text",
      backgroundColor: "muted",
      border: "none",
      boxShadow: "none",
      WebkitAppearance: "none"
    },
    placeholder: "Search for a country...",
    onChange: throttledOnChange
  })), /* @__PURE__ */ jsx(RegionDropdown, {
    sx: {
      minWidth: 32,
      width: ["full", "48"],
      mt: [5, 0, 0],
      height: "2.5rem"
    },
    region,
    onRegionChange: setRegion
  })), countryName || region ? /* @__PURE__ */ jsx(FilteredCountryList, {
    region,
    countryName
  }) : /* @__PURE__ */ jsx(FullCountryList, null));
};
export default Main;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL1VzZXJzL2FuaHRyYW5kYWMvUHJvamVjdHMvZnJlZF9jb3VudHJpZXNfcGFnZS9zcmMvcGFnZXMvTWFpbi50c3giXSwKICAibWFwcGluZ3MiOiAiQUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLE1BQU0sT0FBMEIsQ0FBQyxDQUFFLGVBQWdCO0FBQ2pELFFBQU0sQ0FBQyxRQUFRLGFBQWEsU0FBaUI7QUFDN0MsUUFBTSxDQUFDLGFBQWEsdUJBQXVCLFNBQWlCO0FBQzVELFFBQU0sb0JBQW9CLFFBQ3hCLE1BQ0UsU0FDRSxDQUFDLE1BQXFDO0FBQ3BDLHdCQUFvQixFQUFFLE9BQU87QUFBQSxLQUUvQixLQUNBO0FBQUEsSUFDRSxTQUFTO0FBQUEsSUFDVCxVQUFVO0FBQUEsTUFHaEIsQ0FBQztBQUVILFNBQ0Usb0JBQUMsV0FBRDtBQUFBLElBQVcsV0FBVyxHQUFHLFdBQVc7QUFBQSxLQUNsQyxvQkFBQyxNQUFEO0FBQUEsSUFDRSxJQUFJO0FBQUEsTUFFRixnQkFBZ0I7QUFBQSxNQUNoQixVQUFVO0FBQUEsTUFDVixJQUFJO0FBQUEsTUFDSixJQUFJLENBQUMsR0FBRztBQUFBO0FBQUEsS0FHVixvQkFBQyxNQUFEO0FBQUEsSUFDRSxJQUFJO0FBQUEsTUFDRixVQUFVLENBQUMsTUFBTTtBQUFBLE1BQ2pCLE9BQU8sQ0FBQyxRQUFRO0FBQUE7QUFBQSxLQUdsQixvQkFBQyxLQUFEO0FBQUEsSUFDRSxJQUFJO0FBQUEsTUFDRixXQUFXO0FBQUEsTUFDWCxVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixPQUFPO0FBQUE7QUFBQSxLQUVWLE1BR0Qsb0JBQUMsU0FBRDtBQUFBLElBQ0UsSUFBSTtBQUFBLE1BQ0YsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsSUFBSTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsaUJBQWlCO0FBQUEsTUFDakIsUUFBUTtBQUFBLE1BQ1IsV0FBVztBQUFBLE1BQ1gsa0JBQWtCO0FBQUE7QUFBQSxJQUVwQixhQUFZO0FBQUEsSUFDWixVQUFVO0FBQUEsT0FJZCxvQkFBQyxnQkFBRDtBQUFBLElBQ0UsSUFBSTtBQUFBLE1BRUYsVUFBVTtBQUFBLE1BQ1YsT0FBTyxDQUFDLFFBQVE7QUFBQSxNQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHO0FBQUEsTUFDWCxRQUFRO0FBQUE7QUFBQSxJQUVWO0FBQUEsSUFDQSxnQkFBZ0I7QUFBQSxPQUduQixlQUFlLFNBQVMsb0JBQUMscUJBQUQ7QUFBQSxJQUFxQjtBQUFBLElBQWdCO0FBQUEsT0FBK0Isb0JBQUMsaUJBQUQ7QUFBQTtBQUtuRyxlQUFlOyIsCiAgIm5hbWVzIjogW10KfQo=
