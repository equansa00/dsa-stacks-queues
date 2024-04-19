const calc = require('../../src/algorithms/calc');  

describe('calc', () => {
    test('addition', () => {
        expect(calc('+ 1 2')).toBe(3);
    });

    test('subtraction', () => {
        expect(calc('- 1 2')).toBe(-1);
    });

    test('multiplication', () => {
        expect(calc('* 2 3')).toBe(6);
    });

    test('division', () => {
        expect(calc('/ 6 2')).toBe(3);
    });

    test('complex expression', () => {
        expect(calc('* 2 + 1 2')).toBe(6);
    });
});
