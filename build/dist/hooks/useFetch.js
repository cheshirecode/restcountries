import useSWR from "../../_snowpack/pkg/swr.js";
import fetch from "../../_snowpack/pkg/unfetch.js";
export const fetcher = (url) => fetch(url).then((response) => {
  if (response.ok) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  return Promise.reject(error);
}).then((response) => response.json());
const useFetch = (url) => useSWR(url, fetcher);
export default useFetch;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL1VzZXJzL2FuaHRyYW5kYWMvUHJvamVjdHMvZnJlZF9jb3VudHJpZXNfcGFnZS9zcmMvaG9va3MvdXNlRmV0Y2gudHMiXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUNBO0FBSU8sYUFBTSxVQUFVLENBQUMsUUFDdEIsTUFBTSxLQUNILEtBQUssQ0FBQyxhQUFhO0FBR2xCLE1BQUksU0FBUyxJQUFJO0FBQ2YsV0FBTztBQUFBO0FBR1QsUUFBTSxRQUFtQixJQUFJLE1BQU0sU0FBUztBQUM1QyxRQUFNLFdBQVc7QUFDakIsU0FBTyxRQUFRLE9BQU87QUFBQSxHQUV2QixLQUFLLENBQUMsYUFBYSxTQUFTO0FBR2pDLE1BQU0sV0FBVyxDQUFJLFFBQXVCLE9BQThCLEtBQUs7QUFFL0UsZUFBZTsiLAogICJuYW1lcyI6IFtdCn0K
