import useFetch from "./useFetch.js";
import endpoints from "../utils/endpoints.js";
import consts from "../utils/const.js";
import countriesWithDetails from "../data/countriesWithDetails.json.proxy.js";
const useCountryDetailsFetch = (params) => {
  let {data, error} = useFetch(params?.fullName ? endpoints.getCountryDetails(params?.fullName, params?.fields ?? consts.COMMON_COUNTRY_FIELDS) : null);
  if (!data && params?.fullName) {
    data = countriesWithDetails.filter((x) => x.name === params?.fullName);
    data = data.length ? data : void 0;
    error = void 0;
  }
  return [data, error];
};
export default useCountryDetailsFetch;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL1VzZXJzL2FuaHRyYW5kYWMvUHJvamVjdHMvZnJlZF9jb3VudHJpZXNfcGFnZS9zcmMvaG9va3MvdXNlQ291bnRyeURldGFpbHNGZXRjaC50cyJdLAogICJtYXBwaW5ncyI6ICJBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBT0EsTUFBTSx5QkFBc0csQ0FDMUcsV0FDRztBQUNILE1BQUksQ0FBRSxNQUFNLFNBQVUsU0FDcEIsUUFBUSxXQUNKLFVBQVUsa0JBQWtCLFFBQVEsVUFBVSxRQUFRLFVBQVUsT0FBTyx5QkFDdkU7QUFHTixNQUFJLENBQUMsUUFBUSxRQUFRLFVBQVU7QUFDN0IsV0FBUSxxQkFBbUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxTQUFTLFFBQVE7QUFDNUUsV0FBTyxLQUFLLFNBQVMsT0FBTztBQUM1QixZQUFRO0FBQUE7QUFFVixTQUFPLENBQUMsTUFBTTtBQUFBO0FBR2hCLGVBQWU7IiwKICAibmFtZXMiOiBbXQp9Cg==
