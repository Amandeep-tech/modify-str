import { camelCase } from "./transformers/camelCase";
import { snakeCase } from "./transformers/snakeCase";
import { ModifyOptions } from "./types";

const validKeys = new Set<keyof ModifyOptions>([
  "capitaliseFirstChar",
  "toUpperCase",
  "toLowerCase",
  "snakeCase",
  "camelCase",
  "trim",
  "removeExtraSpaces",
]);

export function modifyStr(input: string, options: ModifyOptions = {}) {
  if (input === null || input === undefined) {
    throw new Error("modifyStr: input string cannot be null or undefined");
  }

  let result = input;

  Object.keys(options).forEach((key) => {
    if (!validKeys.has(key as keyof ModifyOptions)) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(`modifyStr: unknown option "${key}" ignored`);
      }
      return;
    }

    if (!(options as any)[key]) return;

    switch (key) {
      case "trim":
        result = result.trim();
        break;

      case "removeExtraSpaces":
        result = result.replace(/\s+/g, " ");
        break;

      case "capitaliseFirstChar":
        result = result.charAt(0).toUpperCase() + result.slice(1);
        break;

      case "toUpperCase":
        result = result.toUpperCase();
        break;

      case "toLowerCase":
        result = result.toLowerCase();
        break;

      case "snakeCase":
        result = snakeCase(result);
        break;

      case "camelCase":
        result = camelCase(result);
        break;
    }
  });

  return result;
}
