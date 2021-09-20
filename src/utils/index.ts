import consts from './const';

export const subtractFromTotal: <T>(arr: T[]) => string[] = (arr) => arr.map((w) => `calc(100% - ${w})`);

export const isValidHTTPScheme: (string: string) => boolean = (string) => {
  const str = string.toLocaleLowerCase();
  return str.startsWith('http://') || str.startsWith('https://') || str.startsWith('//');
};

/**
 *
 * @param path string URI or path from base URL
 * @param fields string[] fields parameters, defaulting to []
 * @param baseUrl string base URL to override, defaulting to ''
 * @returns string the fully resolved URI
 */
export const getURI: (path: string, fields?: string[], baseUrl?: string) => string = (
  path,
  fields = [],
  baseUrl = consts.API_BASE_URL,
) => {
  let url = '';
  if (isValidHTTPScheme(path)) {
    url = path;
  } else if (isValidHTTPScheme(baseUrl)) {
    url = `${baseUrl}/${path}`.replaceAll('//', '/');
  }
  if (url) {
    const urlObject = new URL(url);
    const params = urlObject.searchParams;
    if (Array.isArray(fields) && fields.length) {
      params.append('fields', fields.join());
    }
    return urlObject.toString();
  }
  return url;
};
