import useFetch from "./useFetch.js";
import endpoints from "../utils/endpoints.js";
import consts from "../utils/const.js";
import countries from "../data/countries.json.proxy.js";
const useCountriesByNameFetch = (params) => {
  let {data, error} = useFetch(params?.name ? endpoints.getCountriesByName(params.name, params?.fields ?? consts.COMMON_COUNTRY_FIELDS) : null);
  if (!data) {
    data = countries.filter((x) => x.name?.toLocaleLowerCase().includes(params?.name.toLocaleLowerCase()));
    data = data.length ? data : void 0;
    error = void 0;
  }
  return [data, error];
};
export default useCountriesByNameFetch;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL1VzZXJzL2FuaHRyYW5kYWMvUHJvamVjdHMvZnJlZF9jb3VudHJpZXNfcGFnZS9zcmMvaG9va3MvdXNlQ291bnRyaWVzQnlOYW1lRmV0Y2gudHMiXSwKICAibWFwcGluZ3MiOiAiQUFDQTtBQUNBO0FBRUE7QUFDQTtBQU1BLE1BQU0sMEJBQXVHLENBQzNHLFdBQ0c7QUFDSCxNQUFJLENBQUUsTUFBTSxTQUFVLFNBQ3BCLFFBQVEsT0FBTyxVQUFVLG1CQUFtQixPQUFPLE1BQU0sUUFBUSxVQUFVLE9BQU8seUJBQXlCO0FBRzdHLE1BQUksQ0FBQyxNQUFNO0FBQ1QsV0FBUSxVQUF3QixPQUFPLENBQUMsTUFDdEMsRUFBRSxNQUFNLG9CQUFvQixTQUFTLFFBQVEsS0FBSztBQUVwRCxXQUFPLEtBQUssU0FBUyxPQUFPO0FBQzVCLFlBQVE7QUFBQTtBQUdWLFNBQU8sQ0FBQyxNQUFNO0FBQUE7QUFHaEIsZUFBZTsiLAogICJuYW1lcyI6IFtdCn0K
