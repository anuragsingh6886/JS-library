/**
 * Validate a phone number string to ensure it meets the following criteria:
 * @param {string} phoneNumber - The phone number string to validate
 * @returns {boolean} True if the phone number is valid, false otherwise
 */
export function validatePhone(phoneNumber) {
    if (!phoneNumber || typeof phoneNumber !== 'string')
        return false;
    const regex = /^\+?[1-9]\d{1,14}$/;
    return regex.test(String(phoneNumber));
}
export function validatePhone_US(phoneNumber) {
    if (!phoneNumber || typeof phoneNumber !== 'string')
        return false;
    const regex = /^(\+1|1)?[2-9]\d{2}[2-9](?!11)\d{6}$/;
    return regex.test(String(phoneNumber));
}
export function validatePhone_IN(phoneNumber) {
    if (!phoneNumber || typeof phoneNumber !== 'string')
        return false;
    const regex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    return regex.test(String(phoneNumber));
}
export function validatePhone_UK(phoneNumber) {
    if (!phoneNumber || typeof phoneNumber !== 'string')
        return false;
    const regex = /^(\+44|0)7\d{9}$/;
    return regex.test(String(phoneNumber));
}
export function validatePhone_AU(phoneNumber) {
    if (!phoneNumber || typeof phoneNumber !== 'string')
        return false;
    const regex = /^(\+61|0)4\d{8}$/;
    return regex.test(String(phoneNumber));
}
