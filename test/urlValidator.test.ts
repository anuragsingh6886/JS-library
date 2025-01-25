import { validateURL } from '../src/validators/urlValidator';

describe('URL Validator', () => {
    test('validates correct URLs', () => {
        expect(validateURL('https://example.com')).toBe(true);
        expect(validateURL('http://sub.domain.com/path')).toBe(true);
    });

    test('rejects invalid URLs', () => {
        expect(validateURL('not-a-url')).toBe(false);
        expect(validateURL('ftp:/invalid')).toBe(false);
    });
});