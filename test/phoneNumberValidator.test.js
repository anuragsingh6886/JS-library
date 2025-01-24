const validatePhoneNumber = require('../src/validators/phoneNumberValidator');

test('validates a correct phone number', () => {
    expect(validatePhoneNumber('+1234567890')).toBe(true);
});

test('validates phone number without plus sign', () => {
    expect(validatePhoneNumber('1234567890')).toBe(true);
});

test('invalidates phone number with letters', () => {
    expect(validatePhoneNumber('123abc4567')).toBe(false);
});

test('invalidates phone number with special characters', () => {
    expect(validatePhoneNumber('123-456-7890')).toBe(false);
});

test('invalidates empty string', () => {
    expect(validatePhoneNumber('')).toBe(false);
});

test('invalidates null input', () => {
    expect(validatePhoneNumber(null)).toBe(false);
});

test('invalidates undefined input', () => {
    expect(validatePhoneNumber(undefined)).toBe(false);
});