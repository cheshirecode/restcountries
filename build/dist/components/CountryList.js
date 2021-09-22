import {jsx, Grid, Card, AspectImage, Box, Heading, Text, Message, Link} from "../../_snowpack/pkg/theme-ui.js";
import {Link as RouterLink} from "../../_snowpack/pkg/wouter.js";
const CountryList = ({data, ...props}) => {
  return /* @__PURE__ */ jsx(Grid, {
    gap: 4,
    width: ["100%", "15rem"],
    "data-testid": props["data-testid"] ?? "country-list",
    as: "ul",
    pl: 0
  }, data && data.length ? data.map(({flag, name, population, capital, flags, continent}) => /* @__PURE__ */ jsx(Card, {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL1VzZXJzL2FuaHRyYW5kYWMvUHJvamVjdHMvZnJlZF9jb3VudHJpZXNfcGFnZS9zcmMvY29tcG9uZW50cy9Db3VudHJ5TGlzdC50c3giXSwKICAibWFwcGluZ3MiOiAiQUFFQTtBQUNBO0FBR0EsTUFBTSxjQUFtRSxDQUFDLENBQUUsU0FBUyxXQUFZO0FBQy9GLFNBQ0Usb0JBQUMsTUFBRDtBQUFBLElBQU0sS0FBSztBQUFBLElBQUcsT0FBTyxDQUFDLFFBQVE7QUFBQSxJQUFVLGVBQWEsTUFBTSxrQkFBa0I7QUFBQSxJQUFnQixJQUFHO0FBQUEsSUFBSyxJQUFJO0FBQUEsS0FDdEcsUUFBUSxLQUFLLFNBQ1osS0FBSyxJQUFJLENBQUMsQ0FBRSxNQUFNLE1BQU0sWUFBWSxTQUFTLE9BQU8sZUFDbEQsb0JBQUMsTUFBRDtBQUFBLElBQU0sSUFBRztBQUFBLElBQUssS0FBSztBQUFBLEtBQ2pCLG9CQUFDLFlBQUQ7QUFBQSxJQUFZLE1BQU0sOEJBQThCO0FBQUEsS0FDOUMsb0JBQUMsTUFBRCxNQUNFLG9CQUFDLGFBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE9BQU8sSUFBSTtBQUFBLElBQ1gsS0FBSyxRQUFRLE1BQU07QUFBQSxJQUNuQixNQUFLO0FBQUEsSUFDTCxjQUFZO0FBQUEsUUFJbEIsb0JBQUMsS0FBRDtBQUFBLElBQUssSUFBSTtBQUFBLElBQUcsSUFBSTtBQUFBLEtBQ2Qsb0JBQUMsU0FBRDtBQUFBLElBQVMsSUFBRztBQUFBLElBQUssSUFBSTtBQUFBLEtBQ2xCLE9BRUgsb0JBQUMsTUFBRDtBQUFBLElBQU0sU0FBUTtBQUFBLEtBQ1osb0JBQUMsTUFBRDtBQUFBLElBQU0sU0FBUTtBQUFBLEtBQU8sZUFDcEIsV0FBVyxlQUFlLFdBRTdCLG9CQUFDLE1BQUQ7QUFBQSxJQUFNLFNBQVE7QUFBQSxLQUNaLG9CQUFDLE1BQUQ7QUFBQSxJQUFNLFNBQVE7QUFBQSxLQUFPLFdBQ3BCLFlBRUgsb0JBQUMsTUFBRDtBQUFBLElBQU0sU0FBUTtBQUFBLEtBQ1osb0JBQUMsTUFBRDtBQUFBLElBQU0sU0FBUTtBQUFBLEtBQU8sWUFDcEIsY0FNVCxvQkFBQyxNQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsSUFBSyxTQUFRO0FBQUEsS0FDcEIsb0JBQUMsU0FBRCxNQUFTO0FBQUE7QUFPbkIsZUFBZTsiLAogICJuYW1lcyI6IFtdCn0K
