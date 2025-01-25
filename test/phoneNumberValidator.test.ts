import { validatePhoneNumber } from '../src/validators/phoneNumberValidator';

describe('Phone Number Validator', () => {
    test('validates correct phone numbers', () => {
        expect(validatePhoneNumber('+919876543210')).toBe(true);
        expect(validatePhoneNumber('919876543210')).toBe(true);
    });

    test('rejects invalid phone numbers', () => {
        expect(validatePhoneNumber('abc')).toBe(false);
        expect(validatePhoneNumber('+0123')).toBe(false);
    });
});