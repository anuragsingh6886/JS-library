/**
 * Validates an email address
 * @param email - The email address to validate
 * @returns boolean - True if the email is valid
 */
export function validateEmail(email: string): boolean {
    // Input validation
    if (!email || typeof email !== 'string') {
        return false;
    }

    // RFC 5322 compliant email regex
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return re.test(email.toLowerCase());
}