import { describe, expect, it } from "vitest";
import { getEnv } from "./index";

describe("getEnv", () => {
  describe("when an existing value is requested", () => {
    it("should return the value", () => {
      const result = getEnv("NODE_ENV");
      expect(result).toBe("test");
    });
  });

  describe("when a non-existing value is requested", () => {
    it("should throw the expected error", () => {
      expect(() => getEnv("NON_EXISTING")).toThrow(
        "Environment variable NON_EXISTING is not defined"
      );
    });
  });
});
