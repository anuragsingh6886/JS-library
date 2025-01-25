"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFile = validateFile;
/**
 * Validate a file based on the given options
 * @param file - The file to validate
 * @param options - The validation options
 * @returns boolean - True if the file is valid
 */
function validateFile(file, options = {}) {
    if (!(file instanceof File))
        return false;
    if (options.maxSize && file.size > options.maxSize)
        return false;
    if (options.allowedTypes && !options.allowedTypes.includes(file.type))
        return false;
    return true;
}
