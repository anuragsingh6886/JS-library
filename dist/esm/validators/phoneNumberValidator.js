/**
 * Validate a phone number string to ensure it meets the following criteria:
 * @param {string} phoneNumber - The phone number string to validate
 * @returns {boolean} True if the phone number is valid, false otherwise
 */
export function validatePhoneNumber(phoneNumber) {
    if (!phoneNumber || typeof phoneNumber !== 'string')
        return false;
    const re = /^\+?[1-9]\d{1,14}$/;
    return re.test(String(phoneNumber));
}
