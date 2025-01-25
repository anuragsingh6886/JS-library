import { validateDate } from '../src/validators/dateValidator';

describe('Date Validator', () => {
    test('validates correct date format', () => {
        expect(validateDate('2024-01-25')).toBe(true);
    });

    test('rejects invalid date format', () => {
        expect(validateDate('25-01-2024')).toBe(false);
    });

    test('rejects invalid dates', () => {
        expect(validateDate('2024-02-30')).toBe(false);
        expect(validateDate('2024-13-01')).toBe(false);
        expect(validateDate('2024-00-01')).toBe(false);
    });

    test('handles leap years correctly', () => {
        expect(validateDate('2024-02-29')).toBe(true);
        expect(validateDate('2023-02-29')).toBe(false);
    });

    test('rejects invalid input types', () => {
        // @ts-ignore - testing invalid input
        expect(validateDate(null)).toBe(false);
        // @ts-ignore - testing invalid input
        expect(validateDate(undefined)).toBe(false);
        expect(validateDate('')).toBe(false);
    });
});