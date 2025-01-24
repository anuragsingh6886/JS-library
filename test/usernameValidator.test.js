const validateUsername = require('../src/validators/usernameValidator');

test('validates a correct username', () => {
    expect(validateUsername('john_doe')).toBe(true);
});

test('validates username with numbers', () => {
    expect(validateUsername('john_doe123')).toBe(true);
});

test('invalidates username with special characters', () => {
    expect(validateUsername('john$doe')).toBe(false);
});

test('invalidates username with spaces', () => {
    expect(validateUsername('john doe')).toBe(false);
});

test('invalidates username with less than 3 characters', () => {
    expect(validateUsername('jo')).toBe(false);
});