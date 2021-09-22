import consts from "./const.js";
import {getURI} from "./index.js";
const getAllCountries = (fields = []) => {
  return getURI(consts.API_ENDPOINTS.GET_ALL_COUNTRIES, fields);
};
const getCountriesByRegion = (region, fields = []) => {
  return getURI(`${consts.API_ENDPOINTS.GET_COUNTRIES_BY_REGION}/${region}`, fields);
};
const getCountriesByName = (name, fields = []) => {
  return getURI(`${consts.API_ENDPOINTS.GET_COUNTRIES_BY_NAME}/${name}`, fields);
};
const getCountryDetails = (fullName, fields = []) => {
  return getURI(`${consts.API_ENDPOINTS.GET_COUNTRIES_BY_NAME}/${fullName}?fullText=true`, fields);
};
const getCountryByCodes = (codes = [], fields = []) => {
  return getURI(`${consts.API_ENDPOINTS.GET_COUNTRIES_BY_CODES}?codes=${codes.join()}`, fields);
};
const endpoints = {
  getAllCountries,
  getCountriesByRegion,
  getCountriesByName,
  getCountryDetails,
  getCountryByCodes
};
export default endpoints;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL1VzZXJzL2FuaHRyYW5kYWMvUHJvamVjdHMvZnJlZF9jb3VudHJpZXNfcGFnZS9zcmMvdXRpbHMvZW5kcG9pbnRzLnRzIl0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFDQTtBQUVBLE1BQU0sa0JBQWlELENBQUMsU0FBUyxPQUFPO0FBQ3RFLFNBQU8sT0FBTyxPQUFPLGNBQWMsbUJBQW1CO0FBQUE7QUFHeEQsTUFBTSx1QkFBc0UsQ0FBQyxRQUFRLFNBQVMsT0FBTztBQUNuRyxTQUFPLE9BQU8sR0FBRyxPQUFPLGNBQWMsMkJBQTJCLFVBQVU7QUFBQTtBQUc3RSxNQUFNLHFCQUFrRSxDQUFDLE1BQU0sU0FBUyxPQUFPO0FBQzdGLFNBQU8sT0FBTyxHQUFHLE9BQU8sY0FBYyx5QkFBeUIsUUFBUTtBQUFBO0FBR3pFLE1BQU0sb0JBQWlFLENBQUMsVUFBVSxTQUFTLE9BQU87QUFDaEcsU0FBTyxPQUFPLEdBQUcsT0FBTyxjQUFjLHlCQUF5QiwwQkFBMEI7QUFBQTtBQUczRixNQUFNLG9CQUFvRSxDQUFDLFFBQVEsSUFBSSxTQUFTLE9BQU87QUFDckcsU0FBTyxPQUFPLEdBQUcsT0FBTyxjQUFjLGdDQUFnQyxNQUFNLFVBQVU7QUFBQTtBQUd4RixNQUFNLFlBQVk7QUFBQSxFQUNoQjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQTtBQUdGLGVBQWU7IiwKICAibmFtZXMiOiBbXQp9Cg==
