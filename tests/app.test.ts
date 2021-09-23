import  canIHazAddends  from "../src/app";


describe("canIHazAddends()", () => {

    test("it should parse empty array and k value 1 ", () => {
        let arr = new Array<number>();

        expect(canIHazAddends(arr, 1)).toBe(false);
    });

    test("arr = {0,0}, k=1 should be false", () => {
        let arr: Array<number> = [0, 0];
        let k = 1;

        expect(canIHazAddends(arr, k)).toBe(false);
    });

    test("arr = {1,2,3}, k=2", () => {
        let arr: Array<number> = [1, 2, 3];
        let k = 2;

        expect(canIHazAddends(arr, k)).toBe(false);
    });

    test("arr = {1,2,3}, k=3", () => {
        let arr: Array<number> = [1, 2, 3];
        let k = 3;

        expect(canIHazAddends(arr, k)).toBe(true);
    });

    test("{1, 1, 89, 90}, k=91", () => {
        let arr: Array<number> = [1, 1, 89, 90];
        let k = 91;

        expect(canIHazAddends(arr, k)).toBe(true);
    });

});
