/**
 * Validates an IPv4 address string
 * @param {string} ipAddress - The IP address string to validate
 * @returns {boolean} True if the IP address is valid, false otherwise
 */
export function validateIPAddress(ipAddress) {
    if (!ipAddress || typeof ipAddress !== 'string')
        return false;
    const re = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return re.test(ipAddress);
}
