const validateIPAddress = require('../src/validators/ipAddressValidator');

test('validates a correct IP address', () => {
    expect(validateIPAddress('38.0.101.76')).toBe(true);
});

test('invalidates IP address with letters', () => {
    expect(validateIPAddress('38.0.101.7a')).toBe(false);
});

test('invalidates IP address with special characters', () => {
    expect(validateIPAddress('38.0.101.76-')).toBe(false);
});

test('invalidates IP address with numbers greater than 255', () => {
    expect(validateIPAddress('38.0.101.256')).toBe(false);
});

test('invalidates IP address with numbers less than 0', () => {
    expect(validateIPAddress('38.0.101.-1')).toBe(false);
});