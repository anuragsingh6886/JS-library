const validateEmail = require('../src/validators/emailValidator');

test('validates a correct email', () => {
    expect(validateEmail('test@example.com')).toBe(true);
});

test('invalidates an incorrect email', () => {
    expect(validateEmail('test@.com')).toBe(false);
});