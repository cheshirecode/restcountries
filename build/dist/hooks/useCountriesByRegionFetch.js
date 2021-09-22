import useFetch from "./useFetch.js";
import endpoints from "../utils/endpoints.js";
import consts from "../utils/const.js";
import countries from "../data/countries.json.proxy.js";
const useCountriesByRegionFetch = (params) => {
  let {data, error} = useFetch(params?.region ? endpoints.getCountriesByRegion(params.region, params?.fields ?? consts.COMMON_COUNTRY_FIELDS) : null);
  if (!data && params?.region) {
    data = countries.filter((x) => x.continent === params?.region);
    data = data.length ? data : void 0;
    error = void 0;
  }
  return [data, error];
};
export default useCountriesByRegionFetch;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL1VzZXJzL2FuaHRyYW5kYWMvUHJvamVjdHMvZnJlZF9jb3VudHJpZXNfcGFnZS9zcmMvaG9va3MvdXNlQ291bnRyaWVzQnlSZWdpb25GZXRjaC50cyJdLAogICJtYXBwaW5ncyI6ICJBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTUEsTUFBTSw0QkFBMkcsQ0FDL0csV0FDRztBQUNILE1BQUksQ0FBRSxNQUFNLFNBQVUsU0FDcEIsUUFBUSxTQUNKLFVBQVUscUJBQXFCLE9BQU8sUUFBUSxRQUFRLFVBQVUsT0FBTyx5QkFDdkU7QUFHTixNQUFJLENBQUMsUUFBUSxRQUFRLFFBQVE7QUFDM0IsV0FBUSxVQUF3QixPQUFPLENBQUMsTUFBTSxFQUFFLGNBQWMsUUFBUTtBQUN0RSxXQUFPLEtBQUssU0FBUyxPQUFPO0FBQzVCLFlBQVE7QUFBQTtBQUdWLFNBQU8sQ0FBQyxNQUFNO0FBQUE7QUFHaEIsZUFBZTsiLAogICJuYW1lcyI6IFtdCn0K
