/**
 * Validates a credit card number using the Luhn Algorithm
 * @param creditCardNumber - The credit card number to validate
 * @returns boolean - True if the credit card number is valid
 */
export function validateCreditCard(creditCardNumber) {
    // Input validation
    if (!creditCardNumber || typeof creditCardNumber !== 'string') {
        return false;
    }
    // Basic Luhn Algorithm implementation
    const re = /^\d{16}$/;
    if (!re.test(creditCardNumber))
        return false;
    let sum = 0;
    for (let i = 0; i < creditCardNumber.length; i++) {
        let intVal = parseInt(creditCardNumber.substr(i, 1));
        if (i % 2 === 0) {
            intVal *= 2;
            if (intVal > 9)
                intVal -= 9;
        }
        sum += intVal;
    }
    return (sum % 10) === 0;
}
