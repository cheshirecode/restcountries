import useFetch from "./useFetch.js";
import endpoints from "../utils/endpoints.js";
import regions from "../data/regions.json.proxy.js";
const useRegionListFetch = (params) => {
  let {data, error} = useFetch(endpoints.getAllCountries(["continent"]));
  if (!data) {
    data = regions;
    error = void 0;
  }
  data?.sort((a, b) => a.name?.localeCompare(b.name));
  return [data, error];
};
export default useRegionListFetch;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL1VzZXJzL2FuaHRyYW5kYWMvUHJvamVjdHMvZnJlZF9jb3VudHJpZXNfcGFnZS9zcmMvaG9va3MvdXNlUmVnaW9uTGlzdEZldGNoLnRzIl0sCiAgIm1hcHBpbmdzIjogIkFBQ0E7QUFDQTtBQUVBO0FBTUEsTUFBTSxxQkFBK0YsQ0FBQyxXQUFXO0FBQy9HLE1BQUksQ0FBRSxNQUFNLFNBQVUsU0FBb0IsVUFBVSxnQkFBZ0IsQ0FBQztBQUdyRSxNQUFJLENBQUMsTUFBTTtBQUNULFdBQU87QUFDUCxZQUFRO0FBQUE7QUFFVixRQUFNLEtBQUssQ0FBQyxHQUFHLE1BQU0sRUFBRSxNQUFNLGNBQWMsRUFBRTtBQUM3QyxTQUFPLENBQUMsTUFBTTtBQUFBO0FBR2hCLGVBQWU7IiwKICAibmFtZXMiOiBbXQp9Cg==
