import {jsx} from "../../_snowpack/pkg/theme-ui.js";
import CountryList from "./CountryList.js";
import useCountriesByRegionFetch from "../hooks/useCountriesByRegionFetch.js";
import useCountriesByNameFetch from "../hooks/useCountriesByNameFetch.js";
import ApiResponseHandler from "./ApiResponseHandler.js";
const FilteredCountryList = ({
  region,
  countryName: name,
  ...props
}) => {
  let [data, error] = useCountriesByRegionFetch({
    region
  });
  const [byNameData, byNameError] = useCountriesByNameFetch({
    name
  });
  if (Array.isArray(data)) {
    if (name) {
      data = data.filter((country) => country.name.toLowerCase().includes(name));
    }
  } else {
    data = byNameData;
    error = byNameError;
  }
  return /* @__PURE__ */ jsx(ApiResponseHandler, {
    data,
    error
  }, /* @__PURE__ */ jsx(CountryList, {
    ...props,
    data,
    "data-testid": "filtered-country-list"
  }));
};
export default FilteredCountryList;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL1VzZXJzL2FuaHRyYW5kYWMvUHJvamVjdHMvZnJlZF9jb3VudHJpZXNfcGFnZS9zcmMvY29tcG9uZW50cy9GaWx0ZXJlZENvdW50cnlMaXN0LnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNLHNCQUF1RixDQUFDO0FBQUEsRUFDNUY7QUFBQSxFQUNBLGFBQWE7QUFBQSxLQUNWO0FBQUEsTUFDQztBQUNKLE1BQUksQ0FBQyxNQUFNLFNBQVMsMEJBQTBCO0FBQUEsSUFDNUM7QUFBQTtBQUVGLFFBQU0sQ0FBQyxZQUFZLGVBQWUsd0JBQXdCO0FBQUEsSUFDeEQ7QUFBQTtBQUdGLE1BQUksTUFBTSxRQUFRLE9BQU87QUFFdkIsUUFBSSxNQUFNO0FBQ1IsYUFBTyxLQUFLLE9BQU8sQ0FBQyxZQUFZLFFBQVEsS0FBSyxjQUFjLFNBQVM7QUFBQTtBQUFBLFNBRWpFO0FBQ0wsV0FBTztBQUNQLFlBQVE7QUFBQTtBQUVWLFNBQ0Usb0JBQUMsb0JBQUQ7QUFBQSxJQUFvQjtBQUFBLElBQVk7QUFBQSxLQUM5QixvQkFBQyxhQUFEO0FBQUEsT0FBaUI7QUFBQSxJQUFPO0FBQUEsSUFBWSxlQUFZO0FBQUE7QUFBQTtBQUt0RCxlQUFlOyIsCiAgIm5hbWVzIjogW10KfQo=
