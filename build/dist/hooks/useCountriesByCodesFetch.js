import useFetch from "./useFetch.js";
import endpoints from "../utils/endpoints.js";
import consts from "../utils/const.js";
import countriesWithDetails from "../data/countriesWithDetails.json.proxy.js";
const useCountriesByCodesFetch = (params) => {
  let {data, error} = useFetch(params?.codes ? endpoints.getCountryByCodes(params.codes, params?.fields ?? consts.COMMON_COUNTRY_FIELDS) : null);
  if (!data && params?.codes) {
    data = countriesWithDetails.filter((x) => params?.codes.includes(x.alpha3Code));
    data = data.length ? data : void 0;
    error = void 0;
  }
  return [data, error];
};
export default useCountriesByCodesFetch;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL1VzZXJzL2FuaHRyYW5kYWMvUHJvamVjdHMvZnJlZF9jb3VudHJpZXNfcGFnZS9zcmMvaG9va3MvdXNlQ291bnRyaWVzQnlDb2Rlc0ZldGNoLnRzIl0sCiAgIm1hcHBpbmdzIjogIkFBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFNQSxNQUFNLDJCQUEwRyxDQUM5RyxXQUNHO0FBQ0gsTUFBSSxDQUFFLE1BQU0sU0FBVSxTQUNwQixRQUFRLFFBQVEsVUFBVSxrQkFBa0IsT0FBTyxPQUFPLFFBQVEsVUFBVSxPQUFPLHlCQUF5QjtBQUc5RyxNQUFJLENBQUMsUUFBUSxRQUFRLE9BQU87QUFDMUIsV0FBUSxxQkFBbUMsT0FBTyxDQUFDLE1BQU0sUUFBUSxNQUFNLFNBQVMsRUFBRTtBQUNsRixXQUFPLEtBQUssU0FBUyxPQUFPO0FBQzVCLFlBQVE7QUFBQTtBQUdWLFNBQU8sQ0FBQyxNQUFNO0FBQUE7QUFHaEIsZUFBZTsiLAogICJuYW1lcyI6IFtdCn0K
