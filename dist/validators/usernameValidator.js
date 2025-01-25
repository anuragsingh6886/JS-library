"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUsername = validateUsername;
/**
 * Validate username using a regular expression
 * @param {string} username - The username to validate
 * @returns {boolean} Whether the username is valid or not
 */
function validateUsername(username) {
    if (!username || typeof username !== 'string')
        return false;
    const re = /^[a-zA-Z0-9_]{3,16}$/;
    return re.test(username);
}
