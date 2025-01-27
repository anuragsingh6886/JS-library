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

    // email regex
    const regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    return regex.test(email.toLowerCase());
}