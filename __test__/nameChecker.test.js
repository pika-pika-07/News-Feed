import { checkForName } from "../src/client/js/nameChecker";

describe("Includes Names in list", () => {
    test("should return true", () => {
      const input = "Picard";
      expect(checkForName(input)).toBe(true);
    });
    test("should return false", () => {
      const input = "DontKnow";
      expect(checkForName(input)).toBe(false);
    });
  });
  
