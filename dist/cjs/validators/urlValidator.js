"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateURL = validateURL;
/**
 * Validate a URL string using a regular expression
 * @param {string} url - The URL to validate
 * @returns {boolean} Whether the URL is valid or not
 */
function validateURL(url) {
    if (!url || typeof url !== 'string')
        return false;
    const re = /^(ftp|http|https):\/\/[^ "]+$/;
    return re.test(String(url).toLowerCase());
}
