import { describe, expect, it, test } from "vitest";
import { getEnv } from "./index";

describe("getEnv", () => {
  describe("when an existing value is requested", () => {
    it("should return the value", () => {
      const result = getEnv("NODE_ENV");
      expect(result).toBe("test");
    });
  });

  describe("when a non-existing value is requested", () => {
    describe("when no default value has been provided", () => {
      it("should throw the expected error", () => {
        expect(() => getEnv("NON_EXISTING")).toThrow(
          "Environment variable NON_EXISTING is not defined"
        );
      });
    });

    describe("when a default value has been provided", () => {
      it("should return the provided default value", () => {
        const result = getEnv("NON_EXISTING", { default: "default-value" });
        expect(result).toBe("default-value");
      });
    });
  });

  describe("when serverOnly option", () => {
    describe("is set to true", () => {
      describe("and we are running in a server environment", () => {
        it.todo("should not throw");
      });

      describe("and we are running in a client environment", () => {
        it.todo("should throw");
      });
    });

    describe("is not set", () => {
      describe("and we are running in a client enironment", () => {
        it.todo("should not throw");
      });
    });
  });
});
