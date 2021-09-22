import consts from "./const.js";
export const subtractFromTotal = (arr) => arr.map((w) => `calc(100% - ${w})`);
export const isValidHTTPScheme = (string) => {
  const str = string.toLocaleLowerCase();
  return str.startsWith("http://") || str.startsWith("https://") || str.startsWith("//");
};
export const getURI = (path, fields = [], baseUrl = consts.API_BASE_URL) => {
  let url = "";
  if (isValidHTTPScheme(path)) {
    url = path;
  } else if (isValidHTTPScheme(baseUrl)) {
    url = `${baseUrl}/${path}`.replaceAll("//", "/");
  }
  if (url) {
    const urlObject = new URL(url);
    const params = urlObject.searchParams;
    if (Array.isArray(fields) && fields.length) {
      params.append("fields", fields.join(consts.FIELDS_SEPARATOR));
    }
    return urlObject.toString();
  }
  return url;
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL1VzZXJzL2FuaHRyYW5kYWMvUHJvamVjdHMvZnJlZF9jb3VudHJpZXNfcGFnZS9zcmMvdXRpbHMvaW5kZXgudHMiXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUVPLGFBQU0sb0JBQStDLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLGVBQWU7QUFFNUYsYUFBTSxvQkFBaUQsQ0FBQyxXQUFXO0FBQ3hFLFFBQU0sTUFBTSxPQUFPO0FBQ25CLFNBQU8sSUFBSSxXQUFXLGNBQWMsSUFBSSxXQUFXLGVBQWUsSUFBSSxXQUFXO0FBQUE7QUFVNUUsYUFBTSxTQUF3RSxDQUNuRixNQUNBLFNBQVMsSUFDVCxVQUFVLE9BQU8saUJBQ2Q7QUFDSCxNQUFJLE1BQU07QUFDVixNQUFJLGtCQUFrQixPQUFPO0FBQzNCLFVBQU07QUFBQSxhQUNHLGtCQUFrQixVQUFVO0FBQ3JDLFVBQU0sR0FBRyxXQUFXLE9BQU8sV0FBVyxNQUFNO0FBQUE7QUFFOUMsTUFBSSxLQUFLO0FBQ1AsVUFBTSxZQUFZLElBQUksSUFBSTtBQUMxQixVQUFNLFNBQVMsVUFBVTtBQUN6QixRQUFJLE1BQU0sUUFBUSxXQUFXLE9BQU8sUUFBUTtBQUMxQyxhQUFPLE9BQU8sVUFBVSxPQUFPLEtBQUssT0FBTztBQUFBO0FBRTdDLFdBQU8sVUFBVTtBQUFBO0FBRW5CLFNBQU87QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
