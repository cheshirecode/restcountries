import {jsx, Grid, Card, AspectImage, Box, Heading, Text, Message, Link} from "../../_snowpack/pkg/theme-ui.js";
import {Link as RouterLink} from "../../_snowpack/pkg/wouter.js";
import {uniqBy} from "../../_snowpack/pkg/lodash.js";
const CountryList = ({data, ...props}) => {
  return /* @__PURE__ */ jsx(Grid, {
    gap: 4,
    width: ["100%", "15rem"],
    "data-testid": props["data-testid"] ?? "country-list",
    as: "ul",
    pl: 0
  }, data && data.length ? uniqBy(data, (x) => x.name).map(({flag, name, population, capital, flags, continent}, index) => /* @__PURE__ */ jsx(Card, {
    as: "li",
    key: name
  }, /* @__PURE__ */ jsx(RouterLink, {
    href: `/country-details/full-name/${name}`
  }, /* @__PURE__ */ jsx(Link, null, /* @__PURE__ */ jsx(AspectImage, {
    className: "list-country--image",
    ratio: 3 / 2,
    src: flag || flags[0],
    role: "link",
    "aria-label": name
  }))), /* @__PURE__ */ jsx(Box, {
    px: 4,
    py: 4
  }, /* @__PURE__ */ jsx(Heading, {
    as: "h2",
    mb: 4
  }, name), /* @__PURE__ */ jsx(Text, {
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
  }, "Capital"), capital)))) : /* @__PURE__ */ jsx(Card, {
    as: "li",
    variant: "full"
  }, /* @__PURE__ */ jsx(Message, null, "No countries found...")));
};
export default CountryList;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL1VzZXJzL2FuaHRyYW5kYWMvUHJvamVjdHMvZnJlZF9jb3VudHJpZXNfcGFnZS9zcmMvY29tcG9uZW50cy9Db3VudHJ5TGlzdC50c3giXSwKICAibWFwcGluZ3MiOiAiQUFFQTtBQUNBO0FBRUE7QUFFQSxNQUFNLGNBQW1FLENBQUMsQ0FBRSxTQUFTLFdBQVk7QUFDL0YsU0FDRSxvQkFBQyxNQUFEO0FBQUEsSUFBTSxLQUFLO0FBQUEsSUFBRyxPQUFPLENBQUMsUUFBUTtBQUFBLElBQVUsZUFBYSxNQUFNLGtCQUFrQjtBQUFBLElBQWdCLElBQUc7QUFBQSxJQUFLLElBQUk7QUFBQSxLQUN0RyxRQUFRLEtBQUssU0FHWixPQUFPLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBRSxNQUFNLE1BQU0sWUFBWSxTQUFTLE9BQU8sWUFBYSxVQUN0RixvQkFBQyxNQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsSUFBSyxLQUFLO0FBQUEsS0FDakIsb0JBQUMsWUFBRDtBQUFBLElBQVksTUFBTSw4QkFBOEI7QUFBQSxLQUM5QyxvQkFBQyxNQUFELE1BQ0Usb0JBQUMsYUFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsT0FBTyxJQUFJO0FBQUEsSUFDWCxLQUFLLFFBQVEsTUFBTTtBQUFBLElBQ25CLE1BQUs7QUFBQSxJQUNMLGNBQVk7QUFBQSxRQUlsQixvQkFBQyxLQUFEO0FBQUEsSUFBSyxJQUFJO0FBQUEsSUFBRyxJQUFJO0FBQUEsS0FDZCxvQkFBQyxTQUFEO0FBQUEsSUFBUyxJQUFHO0FBQUEsSUFBSyxJQUFJO0FBQUEsS0FDbEIsT0FFSCxvQkFBQyxNQUFEO0FBQUEsSUFBTSxTQUFRO0FBQUEsS0FDWixvQkFBQyxNQUFEO0FBQUEsSUFBTSxTQUFRO0FBQUEsS0FBTyxlQUNwQixXQUFXLGVBQWUsV0FFN0Isb0JBQUMsTUFBRDtBQUFBLElBQU0sU0FBUTtBQUFBLEtBQ1osb0JBQUMsTUFBRDtBQUFBLElBQU0sU0FBUTtBQUFBLEtBQU8sV0FDcEIsWUFFSCxvQkFBQyxNQUFEO0FBQUEsSUFBTSxTQUFRO0FBQUEsS0FDWixvQkFBQyxNQUFEO0FBQUEsSUFBTSxTQUFRO0FBQUEsS0FBTyxZQUNwQixjQU1ULG9CQUFDLE1BQUQ7QUFBQSxJQUFNLElBQUc7QUFBQSxJQUFLLFNBQVE7QUFBQSxLQUNwQixvQkFBQyxTQUFELE1BQVM7QUFBQTtBQU9uQixlQUFlOyIsCiAgIm5hbWVzIjogW10KfQo=
