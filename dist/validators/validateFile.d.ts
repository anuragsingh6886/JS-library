/**
 * File validation options
 * @param maxSize - The maximum file size in bytes
 * @param allowedTypes - The allowed file types
 */
export interface FileValidationOptions {
    maxSize?: number;
    allowedTypes?: string[];
}
/**
 * Validate a file based on the given options
 * @param file - The file to validate
 * @param options - The validation options
 * @returns boolean - True if the file is valid
 */
export declare function validateFile(file: File, options?: FileValidationOptions): boolean;
