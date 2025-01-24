const validatePassword = require('../src/validators/passwordValidator');

test('validates a strong password', () => {
    expect(validatePassword('StrongP@ssw0rd')).toBe(true);
});

test('invalidates a weak password', () => {
    expect(validatePassword('weakpass')).toBe(false);
});

test('invalidates empty string', () => {
    expect(validatePassword('')).toBe(false);
});