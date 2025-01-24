const validateURL = require('../src/validators/urlValidator');

test('validates a correct URL', () => {
    expect(validateURL('https://example.com')).toBe(true);
});

test('invalidates an incorrect URL', () => {
    expect(validateURL('htp://example')).toBe(false);
});