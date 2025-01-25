import { validateNumber } from '../src/validators/validateNumber';

describe('Number Validator', () => {
    test('validates valid numbers', () => {
        expect(validateNumber('123')).toBe(true);
        expect(validateNumber('0')).toBe(true);
        expect(validateNumber('-123')).toBe(true);
        expect(validateNumber('123.45')).toBe(true);
    });

    test('validates numbers within range', () => {
        expect(validateNumber('5', { min: 0, max: 10 })).toBe(true);
        expect(validateNumber('0', { min: 0, max: 10 })).toBe(true);
        expect(validateNumber('10', { min: 0, max: 10 })).toBe(true);
    });

    test('rejects numbers outside range', () => {
        expect(validateNumber('-1', { min: 0, max: 10 })).toBe(false);
        expect(validateNumber('11', { min: 0, max: 10 })).toBe(false);
    });

    test('validates with only min', () => {
        expect(validateNumber('5', { min: 0 })).toBe(true);
        expect(validateNumber('-1', { min: 0 })).toBe(false);
    });

    test('validates with only max', () => {
        expect(validateNumber('5', { max: 10 })).toBe(true);
        expect(validateNumber('11', { max: 10 })).toBe(false);
    });

    test('rejects non-numeric input', () => {
        expect(validateNumber('abc')).toBe(false);
        expect(validateNumber('12a')).toBe(false);
        expect(validateNumber('')).toBe(false);
    });
});