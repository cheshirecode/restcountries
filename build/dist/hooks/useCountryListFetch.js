import useFetch from "./useFetch.js";
import endpoints from "../utils/endpoints.js";
import consts from "../utils/const.js";
import countries from "../data/countries.json.proxy.js";
const useCountryListFetch = (params) => {
  let {data, error} = useFetch(endpoints.getAllCountries(params?.fields ?? consts.COMMON_COUNTRY_FIELDS));
  if (!data) {
    data = countries;
    error = void 0;
  }
  data?.sort((a, b) => a.name?.localeCompare(b.name));
  return [data, error];
};
export default useCountryListFetch;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL1VzZXJzL2FuaHRyYW5kYWMvUHJvamVjdHMvZnJlZF9jb3VudHJpZXNfcGFnZS9zcmMvaG9va3MvdXNlQ291bnRyeUxpc3RGZXRjaC50cyJdLAogICJtYXBwaW5ncyI6ICJBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTUEsTUFBTSxzQkFBZ0csQ0FBQyxXQUFXO0FBQ2hILE1BQUksQ0FBRSxNQUFNLFNBQVUsU0FBb0IsVUFBVSxnQkFBZ0IsUUFBUSxVQUFVLE9BQU87QUFFN0YsTUFBSSxDQUFDLE1BQU07QUFDVCxXQUFPO0FBQ1AsWUFBUTtBQUFBO0FBRVYsUUFBTSxLQUFLLENBQUMsR0FBRyxNQUFNLEVBQUUsTUFBTSxjQUFjLEVBQUU7QUFDN0MsU0FBTyxDQUFDLE1BQU07QUFBQTtBQUdoQixlQUFlOyIsCiAgIm5hbWVzIjogW10KfQo=
