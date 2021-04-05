const startHere = require("../workingFiles/startHere.js");

describe("startHere.js", () => {
    describe("add function", () => {
        it("should add function. takes in 2 numbers and returns the sum", () => {
            //arrange
            const firstInteger = 1;
            const secondInteger = 2;
            const expectedResult = 3;
            //act
            const actualResult = startHere.add(firstInteger, secondInteger)
            //assert
            expect(actualResult).toBe(expectedResult);
        })
        it("should add string numbers and return their integer result", () => {
            expect(startHere.add("1", "2")).toBe(3);
        })
        it("should add mixd string and integer numbers and return their integer result", () => {
            expect(startHere.add("1", 2)).toBe(3);
        })
        it("should add float numbers and return their results", () => {
            expect(startHere.add(1.25, 2.5)).toBe(3.75);
        })
    })
    describe("multiply function", () => {
        it("should take in 2 numbers and multiply it and return that value", () => {
            expect(startHere.multiply(4, 5)).toBe(20);
        })
        it("should multiply string numbers and return their integer result", () => {
            expect(startHere.multiply("4", "5")).toBe(20);
        })
        it("should multiply mixd string and integer numbers and return their integer result", () => {
            expect(startHere.multiply("4", 5)).toBe(20);
        })
        it("should multiply float numbers and return their results", () => {
            expect(startHere.multiply(4.25, 5.5)).toBe(23.375);
        })
    })
})