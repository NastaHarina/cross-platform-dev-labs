const { diff, getDerivative } = require('../src/diff'); 

describe('diff function', () => {
    test('should calculate the derivative of a monomial with exponent', () => {
        expect(diff('2x^3', 'x')).toBe('6x^2');
    });

    test('should calculate the derivative of a monomial without exponent', () => {
        expect(diff('3x', 'x')).toBe('3');
    });

    test('should return "0" when the variable is not present', () => {
        expect(diff('4y^2', 'x')).toBe('0');
    });

    test('should return "1"', () => {
        expect(diff('x', 'x')).toBe('1');
    });
});

describe('getDerivative function', () => {
    test('should calculate the derivative of a polynomial', () => {
        expect(getDerivative('2x^3 + 3x^2 - 4x + 5', 'x')).toBe('6x^2+6x-4');
    });

    test('should handle negative polynomial', () => {
        expect(getDerivative('-x^2 - 2x', 'x')).toBe('-2x-2');
    });
    
});
