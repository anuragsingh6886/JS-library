import { validateUsername } from '../src/validators/usernameValidator';

describe('Username Validator', () => {
    test('validates correct usernames', () => {
        expect(validateUsername('user123')).toBe(true);
        expect(validateUsername('john_doe')).toBe(true);
    });

    test('rejects invalid usernames', () => {
        expect(validateUsername('ab')).toBe(false);
        expect(validateUsername('user@name')).toBe(false);
        expect(validateUsername('very_long_username_123')).toBe(false);
    });
});