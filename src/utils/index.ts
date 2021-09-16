export const subtractFromTotal: <T>(arr: T[]) => string[] = (arr) => arr.map((w) => `calc(100% - ${w})`);
