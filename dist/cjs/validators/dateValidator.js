/**
 * Validates if a string is a valid date in YYYY-MM-DD format
 * @param date - The date string to validate
 * @returns boolean - True if the date is valid and follows YYYY-MM-DD format
 */
export function validateDate(date) {
    // Input validation
    if (!date || typeof date !== 'string') {
        return false;
    }
    // Format validation (YYYY-MM-DD)
    const re = /^\d{4}-\d{2}-\d{2}$/;
    if (!re.test(date)) {
        return false;
    }
    // Parse date parts
    const [year, month, day] = date.split('-').map(Number);
    // Create date object and verify valid date
    const dateObj = new Date(year, month - 1, day);
    return dateObj.getFullYear() === year &&
        dateObj.getMonth() === month - 1 &&
        dateObj.getDate() === day;
}
