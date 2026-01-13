export const snakeCase = (str: string) =>
  str
    .trim()
    // Handle camelCase / PascalCase → camel_Case
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    // Replace spaces & hyphens with underscore
    .replace(/[\s-]+/g, "_")
    // Remove duplicate underscores
    .replace(/_+/g, "_")
    .toLowerCase();
