import { describe, it, expect } from "vitest";
import { modifyStr } from "../src";

describe("modifyStr", () => {
  it("applies snakeCase", () => {
    expect(modifyStr("Hello World", { snakeCase: true }))
      .toBe("hello_world");
  });

  it("last option wins", () => {
    expect(
      modifyStr("hello world", {
        toUpperCase: true,
        toLowerCase: true,
      })
    ).toBe("hello world");
  });

  it("ignores unknown options", () => {
    expect(
      modifyStr("hello", { foo: true } as any)
    ).toBe("hello");
  });
});
