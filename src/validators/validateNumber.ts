/**
 * Validate a number within a range or not
 * @param value - The number to validate
 * @returns boolean - True if the number is valid
 */
export function validateNumber(value: string, options: {min?: number; max?: number} = {}): boolean {
    if (!value || value.trim() === '') return false;

    // Convert to number and validate
    const num = Number(value);
    if (isNaN(num)) return false;

    // Check minimum if specified
    if (options.min !== undefined && num < options.min) {
        return false;
    }

    // Check maximum if specified
    if (options.max !== undefined && num > options.max) {
        return false;
    }

    return true;
}