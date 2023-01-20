const { isEmpty, isMinLenght } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

// TODO: Create tests suite for validation function

describe("validations tests suites - isMinLenght", () => {
    test("should return false as the label is less that 8 carac.", () => {
        const result = isMinLenght();
        expect(result).toBe(false);
    });
    test("should return true as the label is more that 8 carac.", () => {
        const result = isMinLenght("GamerTag89");
        expect(result).toBe(true);
    });
    test("should return true as the label is less that 8 carac.", () => {
        const result = isMinLenght("ded");
        expect(result).toBe(false);
    });
});

describe("validations tests suites - haveSpecialChar", () => {
    test("should return true as the label have a special char", () => {
        const result = haveSpecialChar("GamerTag@89");
        expect(result).toBe(true);
    });
    test("should return false as the label don't have a special char.", () => {
        const result = haveSpecialChar("gamersansrien");
        expect(result).toBe(false);
    });
});
