import { validateIPAddress } from '../src/validators/ipAddressValidator';

describe('IP Address Validator', () => {
    test('validates correct IP addresses', () => {
        expect(validateIPAddress('192.168.1.1')).toBe(true);
        expect(validateIPAddress('255.255.255.0')).toBe(true);
    });

    test('rejects invalid IP addresses', () => {
        expect(validateIPAddress('256.1.2.3')).toBe(false);
        expect(validateIPAddress('1.2.3')).toBe(false);
    });
});