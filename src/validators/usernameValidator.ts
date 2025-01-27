/**
 * Validate username using a regular expression
 * @param {string} username - The username to validate
 * @returns {boolean} Whether the username is valid or not
 */
export function validateUsername(username: string): boolean {
    if (!username || typeof username !== 'string') return false;
    const re = /^[a-zA-Z0-9_]{4,16}$/;
    return re.test(username);
}