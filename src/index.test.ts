import { describe, expect, it } from "vitest";
import { hello } from "./index";

describe("hello", () => {
  describe("when no name is provided", () => {
    it("should return expected value", () => {
      expect(hello()).toBe("Hello You 👋");
    });
  });

  describe("when name is provided", () => {
    it("should return expected value", () => {
      expect(hello("Larry")).toBe("Hello Larry 👋");
    });
  });
});
