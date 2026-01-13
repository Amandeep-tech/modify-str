export const camelCase = (str: string) =>
  str
    .toLowerCase()
    .replace(/[_-\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""));
