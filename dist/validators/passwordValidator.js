"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePassword = validatePassword;
/**
 * Validates a password string to ensure it meets the following criteria:
 * @param {string} password - The password string to validate
 * @returns {boolean} True if the password is valid, false otherwise
 */
function validatePassword(password) {
    if (!password || typeof password !== 'string')
        return false;
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
}
