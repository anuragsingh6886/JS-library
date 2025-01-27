import { validatePhone, validatePhone_AU, validatePhone_IN, validatePhone_UK, validatePhone_US } from '../src/validators/phoneNumberValidator';

describe('Phone Number Validator', () => {
    test('validates correct phone numbers', () => {
        expect(validatePhone('+919876543210')).toBe(true);
        expect(validatePhone('919876543210')).toBe(true);
    });

    test('rejects invalid phone numbers', () => {
        expect(validatePhone('abc')).toBe(false);
        expect(validatePhone('+0123')).toBe(false);
    });

    test('validates correct phone numbers for AU', () => {
        expect(validatePhone_AU('0412345678')).toBe(true);
        expect(validatePhone_AU('+61412345678')).toBe(true);
    });

    test('rejects invalid phone numbers for AU', () => {
        expect(validatePhone_AU('abc')).toBe(false);
        expect(validatePhone_AU('+0123')).toBe(false);
    });

    test('validates correct phone numbers for IN', () => {
        expect(validatePhone_IN('9876543210')).toBe(true);
        expect(validatePhone_IN('+919876543210')).toBe(true);
    });

    test('rejects invalid phone numbers for IN', () => {
        expect(validatePhone_IN('abc')).toBe(false);
        expect(validatePhone_IN('+0123')).toBe(false);
    });

    test('validates correct phone numbers for UK', () => {
        expect(validatePhone_UK('07123456789')).toBe(true);
        expect(validatePhone_UK('+447123456789')).toBe(true);
    });

    test('rejects invalid phone numbers for UK', () => {
        expect(validatePhone_UK('abc')).toBe(false);
        expect(validatePhone_UK('+0123')).toBe(false);
    });

    test('validates correct phone numbers for US', () => {
        expect(validatePhone_US('9876543210')).toBe(true);
        expect(validatePhone_US('+19876543210')).toBe(true);
    });

    test('rejects invalid phone numbers for US', () => {
        expect(validatePhone_US('abc')).toBe(false);
        expect(validatePhone_US('+0123')).toBe(false);
    });
});