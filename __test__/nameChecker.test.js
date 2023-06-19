import { checkForName } from "../src/client/js/nameChecker";

describe("Includes Names in list", () => {
    test("should return true", () => {
      const input = "https://www.google.com/sheets/about/";
      expect(checkForName(input)).toBe(true);
    });
    test("should return false", () => {
      const input = "DontKnow";
      expect(checkForName(input)).toBe(false);
    });
  });
  
