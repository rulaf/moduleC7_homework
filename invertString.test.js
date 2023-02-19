import { invertString } from "./invertString";

describe("Тесты для функции invertString", () => {
    it("Тесты", () => {
        expect(invertString('abc')).toBe('cba');
        expect(invertString('123456')).toBe('654321');
        expect(invertString('][][;./,')).toBe(',/.;[][]')
    })
})
