import { validateCreditCardNumber } from '../src/validators/creditCardValidator';

describe('Credit Card Validator', () => {
  test('validates a correct credit card number', () => {
    expect(validateCreditCardNumber('4532015112830366')).toBe(true);
  });

  test('rejects invalid credit card number', () => {
    expect(validateCreditCardNumber('4532015112830367')).toBe(false);
  });

  test('rejects non-numeric input', () => {
    expect(validateCreditCardNumber('abcd1234efgh5678')).toBe(false);
  });

  test('rejects input with wrong length', () => {
    expect(validateCreditCardNumber('45320151')).toBe(false);
  });

  test('rejects empty string', () => {
    expect(validateCreditCardNumber('')).toBe(false);
  });

  test('rejects null input', () => {
    // @ts-ignore - testing invalid input
    expect(validateCreditCardNumber(null)).toBe(false);
  });

  test('rejects undefined input', () => {
    // @ts-ignore - testing invalid input
    expect(validateCreditCardNumber(undefined)).toBe(false);
  });
});