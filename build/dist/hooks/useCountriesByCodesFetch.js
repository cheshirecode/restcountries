import useFetch from "./useFetch.js";
import endpoints from "../utils/endpoints.js";
import consts from "../utils/const.js";
import countriesWithDetails from "../data/countriesWithDetails.json.proxy.js";
const useCountriesByCodesFetch = (params) => {
  let {data, error} = useFetch(params?.codes && params.codes.length > 0 ? endpoints.getCountryByCodes(params.codes, params?.fields ?? consts.COMMON_COUNTRY_FIELDS) : null);
  if (!data && params?.codes) {
    data = countriesWithDetails.filter((x) => params?.codes.includes(x.alpha3Code));
    data = data.length ? data : void 0;
    error = void 0;
  }
  return [data, error];
};
export default useCountriesByCodesFetch;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL1VzZXJzL2FuaHRyYW5kYWMvUHJvamVjdHMvZnJlZF9jb3VudHJpZXNfcGFnZS9zcmMvaG9va3MvdXNlQ291bnRyaWVzQnlDb2Rlc0ZldGNoLnRzIl0sCiAgIm1hcHBpbmdzIjogIkFBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFNQSxNQUFNLDJCQUEwRyxDQUM5RyxXQUNHO0FBQ0gsTUFBSSxDQUFFLE1BQU0sU0FBVSxTQUNwQixRQUFRLFNBQVMsT0FBTyxNQUFNLFNBQVMsSUFDbkMsVUFBVSxrQkFBa0IsT0FBTyxPQUFPLFFBQVEsVUFBVSxPQUFPLHlCQUNuRTtBQUdOLE1BQUksQ0FBQyxRQUFRLFFBQVEsT0FBTztBQUMxQixXQUFRLHFCQUFtQyxPQUFPLENBQUMsTUFBTSxRQUFRLE1BQU0sU0FBUyxFQUFFO0FBQ2xGLFdBQU8sS0FBSyxTQUFTLE9BQU87QUFDNUIsWUFBUTtBQUFBO0FBR1YsU0FBTyxDQUFDLE1BQU07QUFBQTtBQUdoQixlQUFlOyIsCiAgIm5hbWVzIjogW10KfQo=
