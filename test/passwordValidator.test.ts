import { validatePassword } from '../src/validators/passwordValidator';

describe('Password Validator', () => {
    test('validates correct passwords', () => {
        expect(validatePassword('Test123$')).toBe(true);
        expect(validatePassword('Complex1@Password')).toBe(true);
    });

    test('rejects invalid passwords', () => {
        expect(validatePassword('weak')).toBe(false);
        expect(validatePassword('NoSpecialChar1')).toBe(false);
    });
});