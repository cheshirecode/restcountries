import {jsx, Container, Box, Button, Flex, AspectImage, Heading, Text} from "../../_snowpack/pkg/theme-ui.js";
import ApiResponseHandler from "../components/ApiResponseHandler.js";
import {Link} from "../../_snowpack/pkg/wouter.js";
import useCountryDetailsFetch from "../hooks/useCountryDetailsFetch.js";
import useCountriesByCodesFetch from "../hooks/useCountriesByCodesFetch.js";
import consts from "../utils/const.js";
import {cx} from "../../_snowpack/pkg/@emotion/css.js";
const CountryDetails = ({className, params}) => {
  let [data, error] = useCountryDetailsFetch({
    fullName: decodeURIComponent(params.fullName),
    fields: consts.DETAILED_COUNTRY_FIELDS
  });
  const [byCodesData, byCodesError] = useCountriesByCodesFetch({
    codes: [params.alpha3],
    fields: consts.DETAILED_COUNTRY_FIELDS
  });
  if (!data) {
    data = byCodesData;
    error = byCodesError;
  }
  const {
    name,
    nativeName,
    population,
    continent,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
    flag,
    flags
  } = data ? data[0] ?? {} : {};
  const goBack = () => window.history.back();
  return /* @__PURE__ */ jsx(ApiResponseHandler, {
    data,
    error
  }, data ? /* @__PURE__ */ jsx(Container, {
    className: cx(className, "country-details")
  }, /* @__PURE__ */ jsx(Box, null, /* @__PURE__ */ jsx(Button, {
    px: 4,
    onClick: goBack
  }, /* @__PURE__ */ jsx("span", {
    sx: {
      display: "inline-block",
      transform: "scaleX(2.5)",
      mr: "1em",
      fontSize: "0.875em"
    }
  }, "←"), "Back")), /* @__PURE__ */ jsx(Flex, {
    sx: {
      justifyContent: "space-between",
      flexWrap: "wrap",
      pt: 4
    }
  }, /* @__PURE__ */ jsx(Box, {
    sx: {
      width: ["full", null, "1/2"],
      py: [5, 4],
      pr: [5, 4]
    }
  }, /* @__PURE__ */ jsx(AspectImage, {
    className: "list-country--image",
    ratio: 3 / 2,
    src: flag || flags[0]
  })), /* @__PURE__ */ jsx(Flex, {
    px: 4,
    py: 4,
    sx: {
      width: ["full", null, "1/2"],
      flexWrap: "wrap"
    }
  }, /* @__PURE__ */ jsx(Heading, {
    as: "h2",
    my: 4,
    sx: {width: "100%"}
  }, name), /* @__PURE__ */ jsx(Box, {
    sx: {
      width: ["full", null, null, "1/2"]
    }
  }, /* @__PURE__ */ jsx(Text, {
    variant: "value"
  }, /* @__PURE__ */ jsx(Text, {
    variant: "name"
  }, "Native Name"), nativeName), /* @__PURE__ */ jsx(Text, {
    variant: "value"
  }, /* @__PURE__ */ jsx(Text, {
    variant: "name"
  }, "Population"), population.toLocaleString("en-SG")), /* @__PURE__ */ jsx(Text, {
    variant: "value"
  }, /* @__PURE__ */ jsx(Text, {
    variant: "name"
  }, "Region"), continent), /* @__PURE__ */ jsx(Text, {
    variant: "value"
  }, /* @__PURE__ */ jsx(Text, {
    variant: "name"
  }, "Sub Region"), subregion), /* @__PURE__ */ jsx(Text, {
    variant: "value"
  }, /* @__PURE__ */ jsx(Text, {
    variant: "name"
  }, "Capital"), capital)), /* @__PURE__ */ jsx(Box, {
    sx: {
      width: ["full", null, null, "1/2"],
      mt: [4, null, null, 0]
    }
  }, /* @__PURE__ */ jsx(Text, {
    variant: "value"
  }, /* @__PURE__ */ jsx(Text, {
    variant: "name"
  }, "Top Level Domain"), topLevelDomain), /* @__PURE__ */ jsx(Text, {
    variant: "value"
  }, /* @__PURE__ */ jsx(Text, {
    variant: "name"
  }, "currencies"), currencies.map((x) => x.name).join(", ")), /* @__PURE__ */ jsx(Text, {
    variant: "value"
  }, /* @__PURE__ */ jsx(Text, {
    variant: "name"
  }, "Languages"), languages.map((x) => x.name).join(", "))), /* @__PURE__ */ jsx(Flex, {
    as: "ul",
    sx: {
      "> li": {listStyleType: "none", display: "flex", alignItems: "center"},
      pl: 0,
      flexWrap: "wrap",
      gap: [2, 3],
      mt: [4, 5]
    }
  }, /* @__PURE__ */ jsx(Text, {
    variant: "name",
    as: "li"
  }, "Borders"), borders.map((x) => /* @__PURE__ */ jsx("li", {
    key: x
  }, /* @__PURE__ */ jsx(Link, {
    href: `/country-details/alpha3/${x}`
  }, /* @__PURE__ */ jsx(Button, {
    px: 4
  }, x)))))))) : null);
};
export default CountryDetails;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL1VzZXJzL2FuaHRyYW5kYWMvUHJvamVjdHMvZnJlZF9jb3VudHJpZXNfcGFnZS9zcmMvcGFnZXMvQ291bnRyeURldGFpbHMudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQSxNQUFNLGlCQUF5RSxDQUFDLENBQUUsV0FBVyxZQUFhO0FBQ3hHLE1BQUksQ0FBQyxNQUFNLFNBQVMsdUJBQXVCO0FBQUEsSUFDekMsVUFBVSxtQkFBbUIsT0FBTztBQUFBLElBQ3BDLFFBQVEsT0FBTztBQUFBO0FBRWpCLFFBQU0sQ0FBQyxhQUFhLGdCQUFnQix5QkFBeUI7QUFBQSxJQUMzRCxPQUFPLENBQUMsT0FBTztBQUFBLElBQ2YsUUFBUSxPQUFPO0FBQUE7QUFFakIsTUFBSSxDQUFDLE1BQU07QUFDVCxXQUFPO0FBQ1AsWUFBUTtBQUFBO0FBR1YsUUFBTTtBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLE1BQ0csT0FBTyxLQUFLLE1BQU0sS0FBSztBQUU1QixRQUFNLFNBQVMsTUFBTSxPQUFPLFFBQVE7QUFDcEMsU0FDRSxvQkFBQyxvQkFBRDtBQUFBLElBQW9CO0FBQUEsSUFBWTtBQUFBLEtBQzdCLE9BQ0Msb0JBQUMsV0FBRDtBQUFBLElBQVcsV0FBVyxHQUFHLFdBQVc7QUFBQSxLQUNsQyxvQkFBQyxLQUFELE1BQ0Usb0JBQUMsUUFBRDtBQUFBLElBQVEsSUFBSTtBQUFBLElBQUcsU0FBUztBQUFBLEtBQ3RCLG9CQUFDLFFBQUQ7QUFBQSxJQUNFLElBQUk7QUFBQSxNQUNGLFNBQVM7QUFBQSxNQUNULFdBQVc7QUFBQSxNQUNYLElBQUk7QUFBQSxNQUNKLFVBQVU7QUFBQTtBQUFBLEtBRWIsTUFFTSxVQUlYLG9CQUFD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
