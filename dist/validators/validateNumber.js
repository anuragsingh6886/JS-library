"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateNumber = validateNumber;
/**
 * Validate a number within a range or not
 * @param value - The number to validate
 * @returns boolean - True if the number is valid
 */
function validateNumber(value, options = {}) {
    const num = Number(value);
    if (isNaN(num))
        return false;
    if (options.min !== undefined && num < options.min)
        return false;
    if (options.max !== undefined && num > options.max)
        return false;
    return true;
}
