const validateDate = require('../src/validators/dateValidator');

test('validates a correct date', () => {
    expect(validateDate('2020-01-01')).toBe(true);
});

test('invalidates date with letters', () => {
    expect(validateDate('2020-01-abc')).toBe(false);
});

test('invalidates date with special characters', () => {
    expect(validateDate('2020-01-01-')).toBe(false);
});

test('invalidates empty string', () => {
    expect(validateDate('')).toBe(false);
});

test('invalidates null input', () => {
    expect(validateDate(null)).toBe(false);
});