const validateCreditCardNumber  = require('../src/validators/creditCardValidator');

test('validates a correct credit card number', () => {
    expect(validateCreditCardNumber('4532015112830366')).toBe(true);
});

test('invalidates credit card number with letters', () => {
    expect(validateCreditCardNumber('123abc4567')).toBe(false);
});

test('invalidates credit card number with special characters', () => {
    expect(validateCreditCardNumber('123-456-7890')).toBe(false);
});

test('invalidates empty string', () => {
    expect(validateCreditCardNumber('')).toBe(false);
});

test('invalidates null input', () => {
    expect(validateCreditCardNumber(null)).toBe(false);
});