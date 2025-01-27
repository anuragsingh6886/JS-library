/**
 * Validates a password string to ensure it meets the following criteria:
 * @param {string} password - The password string to validate
 * @returns {boolean} True if the password is valid, false otherwise
 */
export function validatePassword(password: string): boolean {
    if (!password || typeof password !== 'string') return false;
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
}

export function validatePasswordLength(password: string, length: number): boolean {
    if (!password || typeof password !== 'string') return false;
    return password.length >= length;
}