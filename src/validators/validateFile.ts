/**
 * File validation options
 * @param maxSize - The maximum file size in bytes
 * @param allowedTypes - The allowed file types
 */
export interface FileValidationOptions {
    maxSize?: number; // in bytes
    allowedTypes?: string[];
}

/**
 * Validate a file based on the given options
 * @param file - The file to validate
 * @param options - The validation options
 * @returns boolean - True if the file is valid
 */
export function validateFile(file: File, options: FileValidationOptions = {}): boolean {
    // Input validation
    if (!(file instanceof File)) return false;

    // Validate file size if maxSize is specified
    if (typeof options.maxSize === 'number') {
        if (file.size > options.maxSize) {
            return false;
        }
    }

    // Validate file type if allowedTypes is specified
    if (Array.isArray(options.allowedTypes) && options.allowedTypes.length > 0) {
        if (!options.allowedTypes.includes(file.type)) {
            return false;
        }
    }

    return true;
}