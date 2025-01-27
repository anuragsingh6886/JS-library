import { validatePassword, validatePasswordLength } from '../src/validators/passwordValidator';

describe('Password Validator', () => {
    test('validates correct passwords', () => {
        expect(validatePassword('Test123$')).toBe(true);
        expect(validatePassword('Complex1@Password')).toBe(true);
    });

    test('rejects invalid passwords', () => {
        expect(validatePassword('weak')).toBe(false);
        expect(validatePassword('NoSpecialChar1')).toBe(false);
    });

    test('validates password length', () => {
        expect(validatePasswordLength('Test123$', 8)).toBe(true);
        expect(validatePasswordLength('Complex1@Password', 16)).toBe(true);
    });

    test('rejects passwords that are too short', () => {
        expect(validatePasswordLength('Test123$', 9)).toBe(false);
        expect(validatePasswordLength('Complex1@Password', 18)).toBe(false);
    });
});