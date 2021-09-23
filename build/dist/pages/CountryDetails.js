import {jsx, Container, Box, Button, Flex, AspectImage, Heading, Text} from "../../_snowpack/pkg/theme-ui.js";
import ApiResponseHandler from "../components/ApiResponseHandler.js";
import {Link} from "../../_snowpack/pkg/wouter.js";
import useCountryDetailsFetch from "../hooks/useCountryDetailsFetch.js";
import useCountriesByCodesFetch from "../hooks/useCountriesByCodesFetch.js";
import consts from "../utils/const.js";
import {cx} from "../../_snowpack/pkg/@emotion/css.js";
const CountryDetails = ({className, params}) => {
  let [data, error] = useCountryDetailsFetch({
    fullName: params.fullName ? decodeURIComponent(params.fullName) : "",
    fields: consts.DETAILED_COUNTRY_FIELDS
  });
  const [byCodesData, byCodesError] = useCountriesByCodesFetch({
    codes: params.alpha3 ? [params.alpha3] : [],
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
    className: cx(className, "country-details"),
    "data-testid": "country-details"
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL1VzZXJzL2FuaHRyYW5kYWMvUHJvamVjdHMvZnJlZF9jb3VudHJpZXNfcGFnZS9zcmMvcGFnZXMvQ291bnRyeURldGFpbHMudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQSxNQUFNLGlCQUF5RSxDQUFDLENBQUUsV0FBVyxZQUFhO0FBQ3hHLE1BQUksQ0FBQyxNQUFNLFNBQVMsdUJBQXVCO0FBQUEsSUFDekMsVUFBVSxPQUFPLFdBQVcsbUJBQW1CLE9BQU8sWUFBWTtBQUFBLElBQ2xFLFFBQVEsT0FBTztBQUFBO0FBRWpCLFFBQU0sQ0FBQyxhQUFhLGdCQUFnQix5QkFBeUI7QUFBQSxJQUMzRCxPQUFPLE9BQU8sU0FBUyxDQUFDLE9BQU8sVUFBVTtBQUFBLElBQ3pDLFFBQVEsT0FBTztBQUFBO0FBR2pCLE1BQUksQ0FBQyxNQUFNO0FBQ1QsV0FBTztBQUNQLFlBQVE7QUFBQTtBQUdWLFFBQU07QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxNQUNHLE9BQU8sS0FBSyxNQUFNLEtBQUs7QUFFNUIsUUFBTSxTQUFTLE1BQU0sT0FBTyxRQUFRO0FBQ3BDLFNBQ0Usb0JBQUMsb0JBQUQ7QUFBQSxJQUFvQjtBQUFBLElBQVk7QUFBQSxLQUM3QixPQUNDLG9CQUFDLFdBQUQ7QUFBQSxJQUFXLFdBQVcsR0FBRyxXQUFXO0FBQUEsSUFBb0IsZUFBWTtBQUFBLEtBQ2xFLG9CQUFDLEtBQUQsTUFDRSxvQkFBQyxRQUFEO0FBQUEsSUFBUSxJQUFJO0FBQUEsSUFBRyxTQUFTO0FBQUEsS0FDdEIsb0JBQUMsUUFBRDtBQUFBLElBQ0UsSUFBSTtBQUFBLE1BQ0YsU0FBUztBQUFBLE1BQ1QsV0FBVztBQUFBLE1BQ1gsSUFB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
