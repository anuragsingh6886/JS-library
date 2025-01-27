import { validateEmail } from '../src/validators/emailValidator';

describe('Email Validator', () => {
    test('validates correct email addresses', () => {
        expect(validateEmail('test@example.com')).toBe(true);
        expect(validateEmail('user.name@domain.co.uk')).toBe(true);
    });

    test('rejects invalid email addresses', () => {
        expect(validateEmail('test@')).toBe(false);
        expect(validateEmail('@domain.com')).toBe(false);
        expect(validateEmail('test.domain.com')).toBe(false);
    });

    test('handles special characters correctly', () => {
        expect(validateEmail('user-name@domain.com')).toBe(true);
        expect(validateEmail('user_name@domain.com')).toBe(true);
    });

    test('rejects invalid input types', () => {
        // @ts-ignore - testing invalid input
        expect(validateEmail(null)).toBe(false);
        // @ts-ignore - testing invalid input
        expect(validateEmail(undefined)).toBe(false);
        expect(validateEmail('')).toBe(false);
    });
});