import { afterEach, beforeEach, describe, expect, it, test } from "vitest";
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

  describe("serverOnly option", () => {
    describe("is set to true", () => {
      const whenExecuted = () => getEnv("NODE_ENV", { serverOnly: true });

      describe("and we are running in a server environment", () => {
        it("should not throw", () => {
          expect(whenExecuted).not.toThrow();
        });
      });

      describe("and we are running in a client environment", () => {
        beforeEach(() => {
          globalThis.window = {} as any;
        });

        afterEach(() => {
          globalThis.window = undefined as any;
        });

        it("should throw expected error", () => {
          const expectedError = new Error(
            "Attempted to access server-only variable NODE_ENV in client context"
          );
          expect(whenExecuted).toThrowError(expectedError);
        });
      });
    });

    describe("is not set", () => {
      const whenExecuted = () => getEnv("NODE_ENV");

      describe("and we are running in a client enironment", () => {
        beforeEach(() => {
          globalThis.window = {} as any;
        });

        afterEach(() => {
          globalThis.window = undefined as any;
        });

        it("should not throw", () => {
          expect(whenExecuted).not.toThrow();
        });
      });
    });
  });
});
